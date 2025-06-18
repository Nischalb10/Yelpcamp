const {campgroundSchema, restaurantSchema ,reviewSchema} = require('./schema.js');
const ExpressError = require('./utils/ExpressError');
const Campground = require('./models/campground');
const Restaurant = require('./models/restaurant');
const Review = require('./models/review');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

module.exports.validateCampground = (req,res,next) => {
    const {error} = campgroundSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el=> el.message).join(',');
        throw new ExpressError(msg,400);
    }
    else{
        next();
    }
}

module.exports.validateRestaurant = (req,res,next) => {
    const {error} = restaurantSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el=> el.message).join(',');
        throw new ExpressError(msg,400);
    }
    else{
        next();
    }
}

module.exports.isAuthorCampground = async (req,res,next) => {
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if(!campground.author.equals(req.user._id)){
        req.flash('error','You do not have permission to do that!');
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
}

module.exports.isAuthorRestaurant = async (req,res,next) => {
    const {id} = req.params;
    const restaurant = await Restaurant.findById(id);
    if(!restaurant.author.equals(req.user._id)){
        req.flash('error','You do not have permission to do that!');
        return res.redirect(`/restaurants/${id}`);
    }
    next();
}

module.exports.validateReview = (req,res,next) => {
    const {error} = reviewSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el=> el.message).join(',');
        throw new ExpressError(msg,400);
    } else{
        next();
    }
}

module.exports.isReviewAuthor = async (req,res,next) => {
    const {id ,reviewId} = req.params;
    const review = await Review.findById(reviewId);
    if(!review.author.equals(req.user._id)){
        req.flash('error','You do not have permission to do that!');
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
}

// Check if the review is for a campground
// module.exports.isCampgroundReviewAuthor = async (req, res, next) => {
//     const { id, reviewId } = req.params;
//     const review = await Review.findById(reviewId);
//     const campground = await Campground.findById(id);

//     if (!review || !campground) {
//         req.flash('error', 'Campground or review not found');
//         return res.redirect(`/campgrounds/${id}`);
//     }

//     if (!review.author.equals(req.user._id)) {
//         req.flash('error', 'You do not have permission to do that!');
//         return res.redirect(`/campgrounds/${id}`);
//     }

//     next();
// }

// Check if the review is for a restaurant
module.exports.isRestaurantReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    const restaurant = await Restaurant.findById(id);

    if (!review || !restaurant) {
        req.flash('error', 'Restaurant or review not found');
        return res.redirect(`/restaurants/${id}`);
    }

    if (!review.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that!');
        return res.redirect(`/restaurants/${id}`);
    }

    next();
}

