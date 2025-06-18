const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Review = require('../models/review.js');
const Campground = require('../models/campground');
const Restaurant = require('../models/restaurant');
const {validateReview, isLoggedIn ,isReviewAuthor} = require('../middleware');
const reviews = require('../controllers/reviews');


router.post('/campground',isLoggedIn, validateReview,catchAsync(reviews.createCampgroundReview));
router.post('/restaurant',isLoggedIn, validateReview,catchAsync(reviews.createRestaurantReview));


router.delete('/campground/:reviewId',isLoggedIn ,isReviewAuthor, catchAsync(reviews.deleteCampgroundReview));
router.delete('/restaurant/:reviewId',isLoggedIn ,isReviewAuthor, catchAsync(reviews.deleteRestaurantReview));


module.exports = router;