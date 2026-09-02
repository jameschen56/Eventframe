const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventsRouter = require('./events.js');
const reviewsRouter = require('./reviews.js')
const { sequelize } = require('../../db/models');

router.get('/health', async (_req, res, next) => {
  try {
    await sequelize.authenticate();
    res.json({ status: 'ok' });
  } catch (error) {
    next(error);
  }
});

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/events', eventsRouter);

router.use('/reviews', reviewsRouter)

module.exports = router;
