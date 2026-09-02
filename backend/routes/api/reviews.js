const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const { check } = require('express-validator')
const {requireAuth} = require('../../utils/auth')
const { handleValidationErrors } = require('../../utils/validation')

const { User, Review, Event } = require(`../../db/models`)

const validateReview = [
    check('review').trim().notEmpty().isLength({ max: 500 }).withMessage('Review must be between 1 and 500 characters.'),
    check('rating').isInt({ min: 1, max: 10 }).withMessage('Rating must be between 1 and 10.'),
    handleValidationErrors
]

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const {id} = req.params
    const reviews = await Review.findAll({
        where: {eventId: id},
        include: User
    });
    return res.json(reviews)
}));

router.post('/:id(\\d+)', requireAuth, validateReview, asyncHandler(async(req, res) => {
    const {id} = req.params
    const {review, rating} = req.body;
    const event = await Event.findByPk(id);
    if (!event) return res.status(404).json({ errors: ['Event not found.'] });
    const createReview = await Review.create({
        review,
        rating,
        userId: req.user.id,
        eventId: id
    })

    const newReview = await Review.findByPk(createReview.id, {
        include: User
    })
    return res.status(201).json(newReview)

}));


router.put('/:id(\\d+)', requireAuth, validateReview, asyncHandler(async (req, res) => {
    const { review, rating } = req.body;
    const { id } = req.params;

    const reviews = await Review.findByPk(id);
    if (!reviews) return res.status(404).json({ errors: ['Review not found.'] });
    if (reviews.userId !== req.user.id) {
        return res.status(403).json({ errors: ['Unauthorized.'] });
    }
    const editingReview = await reviews.update({ review, rating });
    const updatedReview = await Review.findByPk(editingReview.id, {
        include: [User]
    });
    return res.json(updatedReview)
}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async(req, res) => {
    const {id} = req.params
    const review = await Review.findByPk(id)
    if (!review) return res.status(404).json({ errors: ['Review not found.'] });
    if (review.userId !== req.user.id) {
        return res.status(403).json({ errors: ['Unauthorized.'] });
    }
    await review.destroy();
    res.status(204).end()
}))



module.exports = router;
