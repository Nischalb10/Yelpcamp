const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const Review = require('../models/review.js');
const {isLoggedIn ,isAuthorCampground , validateCampground} = require('../middleware');
const { reviewSchema } = require('../schema.js');
const campgrounds = require('../controllers/campgrounds');
const {storage} = require('../cloudinary');
const multer = require('multer');
const upload = multer({storage});

const Campground = require('../models/campground');

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('image'),validateCampground, catchAsync(campgrounds.createCampground));
    

router.get('/new', isLoggedIn ,campgrounds.renderNewForm);

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthorCampground,upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthorCampground, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit',isLoggedIn, isAuthorCampground, catchAsync(campgrounds.renderEditForm));

module.exports = router;