const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')
const { requireAuth } = require('../../utils/auth')
const { Event } = require('../../db/models')
const router = express.Router()


const validateEvent = [
    check('title')
      .exists({ checkFalsy: true })
      .withMessage('Please provide an event title.'),
    check('description')
      .exists({ checkFalsy: true })
      .withMessage('Please provide an event description.'),
    check('imageUrl')
      .exists({ checkFalsy: true })
      .withMessage('Please provide an image URL.'),
    check('eventDate')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a date.'),
    check('location')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a start time.'),
    check('lat')
      .exists({ checkFalsy: true })
      .withMessage('Password provide an latitude.'),
    check('lng')
      .exists({ checkFalsy: true })
      .withMessage('Password provide a longitude'),
]

// ---------------- get all events -------------------
router.get('/', asyncHandler(async(req, res) => {
    const events = await Event.findAll();
    console.log('333333333333333')
    return res.json(events)
}))

// ------------------ get one event -------------------
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {

    let eventId = parseInt(req.params.id, 10);
    let event = await Event.findByPk(eventId);

    return res.json(event);
}));

// --------------------- create an event---------------------
router.post('/add', requireAuth, validateEvent, asyncHandler(async (req, res) => {

  const { id } = req.user;
  const { title, description, imageUrl, eventDate, location, lat, lng } = req.body;

  const validateErrors = validationResult(req);
  if (validateErrors.isEmpty()) {
      const event = await Event.create({
          title,
          description,
          imageUrl,
          eventDate,
          location,
          lat,
          lng,
          userId: id
      });
      res.json(event);
  }
  else {
      return res.json(validateErrors)
  }
}));


// ------------------ delete an event -------------------
router.delete('/:id(\\d+)', requireAuth, validateEvent, asyncHandler(async function (req, res) {
  const eventId = parseInt(req.params.id, 10);
  const event = await Event.findByPk(eventId);
  const userId = event.userId;
  const { id } = req.user;
  if (id === userId) {
      await event.destroy();
      return res.json()
  }
}))

module.exports = router