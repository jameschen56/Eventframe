const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const {requireAuth} = require('../../utils/auth')

const { User, Review} = require(`../../db/models`)

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const {id} = req.params
    const reviews = await Review.findAll({
        where: {eventId: id},
        include: User
    });
    return res.json(reviews)
}));

router.post('/:id(\\d+)', requireAuth, asyncHandler(async(req, res) => {
    const {id} = req.params
    const {review, rating, userId} = req.body;
    const createReview = await Review.create({
        review,
        rating,
        userId,
        eventId: id
    })

    const newReview = await Review.findByPk(createReview.id, {
        include: User
    })
    return res.json(newReview)

}));


router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const { content } = req.body;

    const { id } = req.params;

    const review = await Review.findByPk(id);

    //NOTE ADDED==>
    //here you are updating it
    const editingReview = await review.update({ review: content });

    //here you are finding it again and INCLUDING the user.
    const updatedReview = await Review.findByPk(editingReview.id, {
        include: [User]
    });

    //HERE you are returning the NEW updated comment WITH USER included. 
    //This is why you did not have access to the username. 
    return res.json(updatedReview)
}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async(req, res) => {
    const {id} = req.params
    const review = await Review.findByPk(id)

    await review.destroy();
    res.status(204).end()
}))



module.exports = router;
