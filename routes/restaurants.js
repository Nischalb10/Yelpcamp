const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const Review = require('../models/review.js');
const {isLoggedIn ,isAuthorRestaurant , validateRestaurant} = require('../middleware');
const { reviewSchema } = require('../schema.js');
const restaurants = require('../controllers/restaurants');
const {storage} = require('../cloudinary');
const multer = require('multer');
const upload = multer({storage});

const Restaurant = require('../models/restaurant');

router.route('/')
    .get(catchAsync(restaurants.index))
    .post(isLoggedIn, upload.array('image'),validateRestaurant, catchAsync(restaurants.createRestaurant));
    

router.get('/new', isLoggedIn ,restaurants.renderNewForm);

router.route('/:id')
    .get(catchAsync(restaurants.showRestaurant))
    .put(isLoggedIn, isAuthorRestaurant,upload.array('image'), validateRestaurant, catchAsync(restaurants.updateRestaurant))
    .delete(isLoggedIn, isAuthorRestaurant, catchAsync(restaurants.deleteRestaurant));

router.get('/:id/edit',isLoggedIn, isAuthorRestaurant, catchAsync(restaurants.renderEditForm));

module.exports = router;
