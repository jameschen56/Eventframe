const express = require('express');
const asyncHandler = require('express-async-handler');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { check, validationResult } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')
const { requireAuth } = require('../../utils/auth')
const { Event, Tag } = require('../../db/models')
const {singlePublicFileUpload, singleMulterUpload} = require("../../awsS3")
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
      .withMessage('Please provide a location.'),
    // check('lat')
    //   .exists({ checkFalsy: true })
    //   .withMessage('Password provide an latitude.'),
    // check('lng')
    //   .exists({ checkFalsy: true })
    //   .withMessage('Password provide a longitude'),
    handleValidationErrors
]

// ---------------- get all events -------------------
router.get('/', asyncHandler(async(req, res) => {
    const events = await Event.findAll();
    
    return res.json(events)
}))

// ------------------ get one event -------------------
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {

    let eventId = parseInt(req.params.id, 10);
    let event = await Event.findByPk(eventId);

    return res.json(event);
}));

// ---------------------update one event---------------------
router.put('/:id(\\d+)/edit', requireAuth, validateEvent, asyncHandler(async (req, res) => {
    const validateErrors = validationResult(req);
    const { id } = req.user;
    const eventId = parseInt(req.params.id, 10);
    const eventToUpdate = await Event.findByPk(eventId);
    const userId = eventToUpdate.userId;
    const { title, description, imageUrl, eventDate, location} = req.body;
    console.log('$$$$$$$$$$$$$$$$', eventDate)
    if (id === userId) {
        if (validateErrors.isEmpty()) {
            const event = await eventToUpdate.update({title, description, imageUrl, eventDate, location});
            await eventToUpdate.save()
            return res.json(event)
        } else {
            res.json(validateErrors)
        }
    }
}))

// --------------------- create an event---------------------
router.post('/new', singleMulterUpload("image"), asyncHandler(async (req, res) => {
  console.log('11111111', req.body)
  const { user_Id, title, description, eventDate, location } = req.body;
  const imageUrl = await singlePublicFileUpload(req.file);
  const event = await Event.create({
      userId: user_Id,
      title,
      description,
      imageUrl,
      eventDate,
      location
  });
  return res.json(event);
}));

// ------------------ delete an event -------------------
router.delete('/delete/:id(\\d+)', requireAuth, asyncHandler(async function (req, res) {
  const eventId = parseInt(req.params.id, 10);

  const event = await Event.findByPk(eventId);
  const userId = event.userId;
  
  const { id } = req.user;
  if (id === userId) {
      await event.destroy();
      return res.json("Success");
  } else return res.status(401).json({ errors: ['Unauthorized.'] });
}))

// ------------------ search events -------------------
router.get('/search/:searchString', asyncHandler(async (req, res) => {

  let searchString = req.params.searchString;
  let events = await Event.findAll({
      where: {
          title: {
              [Op.iLike]: `%${searchString}%`
          }
      }
  });

  return res.json(events);

}));

// ------------------ events by categories -------------------
router.get('/category/:categoryId', asyncHandler(async (req, res) => {

  let categoryId = parseInt(req.params.categoryId, 10);
  console.log('-----------------', categoryId)
  let tags = await Tag.findAll({
      where: {categoryId: categoryId},
      include: {model: Event}
  });

  return res.json(tags.map(tag => tag.Event));
}));


module.exports = router