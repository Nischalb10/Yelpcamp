// const mongoose = require('mongoose');
// const cities = require('./cities');
// const {places,descriptors} = require('./seedHelpers');
// const Campground = require('../models/campground');
// const Restaurant = require('../models/restaurant');

// mongoose.set('strictQuery', true);
// mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

// const db = mongoose.connection;
// db.on("error",console.error.bind(console,"connnection error:"));
// db.once("open",()=>{
//     console.log("Database connected");
// });

// const sample = array =>array[Math.floor(Math.random() * array.length)];
// const random = Math.floor(Math.random() * cities.length);
// const price = Math.floor(Math.random() * 20) + 10;
// const seedDB = async () =>{
//     await Campground.deleteMany({});
//     for(let i = 0; i < 100; i++){
//         // const random = Math.floor(Math.random() * cities.length);
//         // const price = Math.floor(Math.random() * 20) + 10;
//         const camp = new Campground({
//             author: '677d50ad2ec2201c5fecf43d',
//             location: `${cities[random].city},${cities[random].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`,
//             geometry: {
//                 type: 'Point',
//                 coordinates: [
//                     cities[random].longitude,
//                     cities[random].latitude,
//                 ]
//             },
//             images:[
//                 {
//                     url: 'https://res.cloudinary.com/da6exmxsw/image/upload/v1736356956/YelpCamp/phg5vsdlfssbyyfbpf5m.png',
//                     filename: 'YelpCamp/phg5vsdlfssbyyfbpf5m',
//                 },
//                 {
//                     url: 'https://res.cloudinary.com/da6exmxsw/image/upload/v1736356956/YelpCamp/nq88icrlaf3hxmjzaspi.png',
//                     filename: 'YelpCamp/nq88icrlaf3hxmjzaspi',
//                 }
//             ] ,
//             description: 'Lorem ipsum asjdkjadjiasjdfa',
//             price,
//         })
//         await camp.save();
//     }

//     await Restaurant.deleteMany({});
//     for(let i = 0; i < 100; i++){
//         // random = Math.floor(Math.random() * cities.length);
//         // price = Math.floor(Math.random() * 20) + 10;
//         const rest = new Restaurant({
//             author: '677d50ad2ec2201c5fecf43d',
//             location: `${cities[random].city},${cities[random].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`,
//             geometry: {
//                 type: 'Point',
//                 coordinates: [
//                     cities[random].longitude,
//                     cities[random].latitude,
//                 ]
//             },
//             images:[
//                 {
//                     url: 'https://res.cloudinary.com/da6exmxsw/image/upload/v1736356956/YelpCamp/phg5vsdlfssbyyfbpf5m.png',
//                     filename: 'YelpCamp/phg5vsdlfssbyyfbpf5m',
//                 },
//                 {
//                     url: 'https://res.cloudinary.com/da6exmxsw/image/upload/v1736356956/YelpCamp/nq88icrlaf3hxmjzaspi.png',
//                     filename: 'YelpCamp/nq88icrlaf3hxmjzaspi',
//                 }
//             ] ,
//             description: 'Lorem ipsum asjdkjadjiasjdfa',
//             price,
//         })
//         await rest.save();
//     }
// }

// seedDB().then(() => {
//     mongoose.connection.close();
// });

const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
const Restaurant = require('../models/restaurant');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

// Helper function to get a random element from an array
const sample = (array) => array[Math.floor(Math.random() * array.length)];

// Reusable function to create a random item
const createRandomItem = (Model) => {
    const random = Math.floor(Math.random() * cities.length);
    const price = Math.floor(Math.random() * 20) + 10;

    return new Model({
        author: '677d50ad2ec2201c5fecf43d', // Replace with a valid user ID
        location: `${cities[random].city}, ${cities[random].state}`,
        title: `${sample(descriptors)} ${sample(places)}`,
        geometry: {
            type: 'Point',
            coordinates: [cities[random].longitude, cities[random].latitude],
        },
        images: [
            {
                url: 'https://res.cloudinary.com/da6exmxsw/image/upload/v1736356956/YelpCamp/phg5vsdlfssbyyfbpf5m.png',
                filename: 'YelpCamp/phg5vsdlfssbyyfbpf5m',
            },
            {
                url: 'https://res.cloudinary.com/da6exmxsw/image/upload/v1736356956/YelpCamp/nq88icrlaf3hxmjzaspi.png',
                filename: 'YelpCamp/nq88icrlaf3hxmjzaspi',
            },
        ],
        description: 'Lorem ipsum asjdkjadjiasjdfa',
        price,
    });
};

// Seed function
const seedDB = async () => {
    // Clear existing data
    await Campground.deleteMany({});
    await Restaurant.deleteMany({});

    // Create campgrounds
    for (let i = 0; i < 100; i++) {
        const camp = createRandomItem(Campground);
        await camp.save();
    }

    // Create restaurants
    for (let i = 0; i < 100; i++) {
        const rest = createRandomItem(Restaurant);
        await rest.save();
    }
};

// Run the seed script
seedDB().then(() => {
    console.log('Database seeded successfully!');
    mongoose.connection.close();
});
