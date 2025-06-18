const Review = require('../models/review');
const Campground = require('../models/campground');
const Restaurant = require('../models/restaurant');

module.exports.createCampgroundReview = async(req,res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success','Created new review!');
    res.redirect(`/campgrounds/${campground._id}`);
}

module.exports.createRestaurantReview = async(req,res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    restaurant.reviews.push(review);
    await review.save();
    await restaurant.save();
    req.flash('success','Created new review!');
    res.redirect(`/restaurants/${restaurant._id}`);
}

module.exports.deleteCampgroundReview = async(req,res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Successfully deleted review!');
    res.redirect(`/campgrounds/${id}`);
}

module.exports.deleteRestaurantReview = async(req,res) => {
    const { id, reviewId } = req.params;
    await Restaurant.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Successfully deleted review!');
    res.redirect(`/restaurants/${id}`);
}
