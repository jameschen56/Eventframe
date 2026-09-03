## Description

This is a clone of [eventbrite](https://www.eventbrite.com/). Eventframe is an event management website that allows users to browse and create local events as well as leave their ratings/reviews of a specific event.


## Table of Contents
  - [MVP Feature List](https://github.com/jameschen56/Eventframe/wiki/MVP-Features-List)
  - [Database Schema](https://github.com/jameschen56/Eventframe/wiki/Database-Schema)
  - [User Stories](https://github.com/jameschen56/Eventframe/wiki/User-Stories)
  - [Wireframes](https://github.com/jameschen56/Eventframe/wiki/Wireframes)

## Deployment

The repository includes a Render Blueprint (`render.yaml`) for the Node web
service. Production PostgreSQL is hosted on Neon and supplied through the
`DATABASE_URL` environment variable. Image uploads additionally require AWS
credentials for the `eventframe` S3 bucket.

## Technologies

Eventframe was built using the following technologies:
<br>
<br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" style="width:75px;" />
<img src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg" style="width:75px;">
<img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" style="width:75px;">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" style="width:75px;" />


## Local development

Requirements: Node.js 20–24 and PostgreSQL 17 (Render uses Node.js 22). The
included Docker Compose database uses host port `5433` to avoid colliding with
an existing local PostgreSQL installation.

1. Copy `backend/.env.example` to `backend/.env` and enter your local database
   credentials. AWS variables are only required for image uploads.
2. Install both applications with `npm run install:all`.
3. Initialize the database:

   ```bash
   npm run db:create
   npm run db:migrate
   npm run db:seed
   ```

4. Start the backend with `npm run dev:backend`.
5. In another terminal, start the frontend with `npm run dev:frontend`.
6. Open `http://localhost:3000`. This checkout defaults to backend port `5002`
   so it can run alongside Flackr; keep `backend/.env` and the frontend proxy in
   sync if you change it.

The seeded Demo account uses username `Demo-lition` and password `password`.
Run the backend smoke tests with `npm test --prefix backend` and create a
production frontend bundle with `npm run build`.

## Deploying to Render

1. Push the repository to GitHub.
2. Create a free Neon Postgres project and copy its pooled connection string.
3. In Render, create a new Blueprint and select this repository.
4. Render reads `render.yaml` and prompts for `DATABASE_URL`, the AWS access key,
   secret key, and region. Use the Neon connection string for `DATABASE_URL`.
5. After deployment, verify `/api/health`, Demo login, an event detail page, and
   an image upload.

Neon's free plan currently provides 0.5 GB of storage and scales compute to zero
when idle, which is appropriate for this portfolio deployment.

## Features

# Splash Page 
![Splash-Page](https://user-images.githubusercontent.com/87781597/160284504-4a3673ee-ba15-4a84-b647-d0fe64f2ccba.png)




# Login Page 
<img width="1417" alt="login_page" src="https://user-images.githubusercontent.com/87781597/160020114-0586a54d-9b52-4eea-b835-fcb2119e0380.png">






# Signup Page 
<img width="1409" alt="singup_page" src="https://user-images.githubusercontent.com/87781597/160020174-a989cb01-b684-433c-baf6-f04b46463c0b.png">






# Event-Detail Page
![Event-Detail Page](https://user-images.githubusercontent.com/87781597/160284527-7a869ccb-feae-4bad-aa5d-d459b0e1c11d.png)

