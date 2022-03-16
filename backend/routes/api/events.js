const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')
const { Event } = require('../../db/models')
const router = express.Router()


const validateCreatingEvent = [
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

// get all events 
router.get('/', asyncHandler(async(req, res) => {
    const events = await Event.findAll();
    console.log('333333333333333')
    return res.json(events)
}))

// get one event
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {

    let eventId = parseInt(req.params.id, 10);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%', eventId)
    let event = await Event.findByPk(eventId);
    console.log('!!!!!!!!!!!!!!!!!!!!')

    return res.json(event);
}));

// create an event
router.post('/', validateCreatingEvent, asyncHandler(async(req, res) => {
    const newEvent = await Event.create(req.body);
  
    return res.redirect(`${req.baseUrl}/${newEvent.id}/detail`);
}))

module.exports = router