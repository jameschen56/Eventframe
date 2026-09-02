const test = require('node:test');
const assert = require('node:assert/strict');

const app = require('../app');
const db = require('../db/models');

let server;
let baseUrl;

test.before(async () => {
  await db.sequelize.authenticate();
  server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

test.after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
  await db.sequelize.close();
});

test('health check and seeded events are available', async () => {
  const healthResponse = await fetch(`${baseUrl}/api/health`);
  assert.equal(healthResponse.status, 200);
  assert.deepEqual(await healthResponse.json(), { status: 'ok' });

  const eventsResponse = await fetch(`${baseUrl}/api/events`);
  assert.equal(eventsResponse.status, 200);
  const events = await eventsResponse.json();
  assert.equal(events.length, 15);
});

test('demo user can log in and restore the session', async () => {
  const csrfResponse = await fetch(`${baseUrl}/api/csrf/restore`);
  assert.equal(csrfResponse.status, 201);
  const cookies = csrfResponse.headers.getSetCookie();
  const cookieHeader = cookies.map((cookie) => cookie.split(';')[0]).join('; ');
  const csrfCookie = cookies.find((cookie) => cookie.startsWith('XSRF-TOKEN='));
  const csrfToken = decodeURIComponent(csrfCookie.split(';')[0].split('=')[1]);

  const loginResponse = await fetch(`${baseUrl}/api/session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'XSRF-Token': csrfToken,
      Cookie: cookieHeader,
    },
    body: JSON.stringify({ credential: 'Demo-lition', password: 'password' }),
  });
  assert.equal(loginResponse.status, 200);
  const loginCookies = loginResponse.headers.getSetCookie();
  const authenticatedCookies = [
    ...cookies,
    ...loginCookies,
  ].map((cookie) => cookie.split(';')[0]).join('; ');

  const sessionResponse = await fetch(`${baseUrl}/api/session`, {
    headers: { Cookie: authenticatedCookies },
  });
  assert.equal(sessionResponse.status, 200);
  const session = await sessionResponse.json();
  assert.equal(session.user.username, 'Demo-lition');
});
