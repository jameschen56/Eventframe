## Description

This is a clone of [eventbrite](https://www.eventbrite.com/). Eventframe is an event management website that allows users to browse and create local events as well as leave their ratings/reviews of a specific event.


## Table of Contents
  - [MVP Feature List](https://github.com/jameschen56/Eventframe/wiki/MVP-Features-List)
  - [Database Schema](https://github.com/jameschen56/Eventframe/wiki/Database-Schema)
  - [User Stories](https://github.com/jameschen56/Eventframe/wiki/User-Stories)
  - [Wireframes](https://github.com/jameschen56/Eventframe/wiki/Wireframes)

## Link to live site

Hosted on Heroku: [eventframe](https://eventframe.herokuapp.com/)

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


## Getting started

1. Clone this repo.
-- `gh repo clone jameschen56/Eventframe`

2. Install dependencies from the root directory.
-- `npm install`

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
-- `CREATE USER <name> WITH CREATEDB PASSWORD <'password'>`

4. Create a .env file in the backend directory based on the .env.example found within the respectice directory.
5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000).
6.  Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.
--`"proxy": "http://localhost:5000"`
7. Create Database, Migrate, and Seed models.
--`npx dotenv sequelize db:create`
--`npx dotenv sequelize db:migrate`
--`npx dotenv sequelize db:seed:all`
8. Start the serveices in the backend directory.
--`npm start`
9. Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to http://localhost:3000.
--`npm start`
10. You can use the Demo user or create an account to begin using eventframe.

## Features

# Splash Page 
![Splash-Page](https://user-images.githubusercontent.com/87781597/160284504-4a3673ee-ba15-4a84-b647-d0fe64f2ccba.png)




# Login Page 
<img width="1417" alt="login_page" src="https://user-images.githubusercontent.com/87781597/160020114-0586a54d-9b52-4eea-b835-fcb2119e0380.png">






# Signup Page 
<img width="1409" alt="singup_page" src="https://user-images.githubusercontent.com/87781597/160020174-a989cb01-b684-433c-baf6-f04b46463c0b.png">






# Event-Detail Page
![Event-Detail Page](https://user-images.githubusercontent.com/87781597/160284527-7a869ccb-feae-4bad-aa5d-d459b0e1c11d.png)

