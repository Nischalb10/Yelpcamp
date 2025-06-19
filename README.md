YelpCamp
========

A full-stack web application for discovering and reviewing campgrounds and restaurants, built with Node.js, Express, and MongoDB.

🌟 Features
-----------

-   **User Authentication & Authorization**

    -   Secure login and registration
    -   Password encryption using Passport.js
    -   Role-based access control
-   **Campgrounds & Restaurants**

    -   CRUD operations
    -   Image upload with Cloudinary
    -   Location-based mapping with Mapbox
    -   Cluster map visualization
-   **Reviews & Ratings**

    -   Star-based rating system
    -   User reviews with timestamps
    -   Edit and delete functionality
-   **Security Features**

    -   MongoDB injection protection
    -   XSS protection
    -   Helmet security headers
    -   Session security

🚀 Tech Stack
-------------

-   **Frontend**: EJS, Bootstrap 5, JavaScript
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB, Mongoose
-   **Cloud Services**:
    -   Cloudinary (Image Storage)
    -   Mapbox (Maps & Geocoding)
    -   MongoDB Atlas (Database Hosting)
    -   Render (Application Hosting)
-   **Authentication**: Passport.js
-   **Security**: Helmet.js, Express-Mongo-Sanitize

📦 Installation
---------------

1.  **Clone the repository**

git clone https://github.com/Nischalb10/Yelpcamp.git

cd Yelpcamp

1.  **Install dependencies**

npm install

1.  **Create Environment Variables** Create a [.env](vscode-file://vscode-app/c:/Users/Nischal/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) file in the root directory:

CLOUDINARY_CLOUD_NAME=your_cloudinary_name

CLOUDINARY_KEY=your_cloudinary_key

CLOUDINARY_SECRET=your_cloudinary_secret

MAPBOX_TOKEN=your_mapbox_token

DB_URL=your_mongodb_url

APP_URL=your_application_url

1.  **Start the application**

npm start

🌐 API Routes
-------------

### Campgrounds

-   `GET /campgrounds` - View all campgrounds
-   `POST /campgrounds` - Create new campground
-   `GET /campgrounds/:id` - View specific campground
-   `PUT /campgrounds/:id` - Update campground
-   `DELETE /campgrounds/:id` - Delete campground

### Restaurants

-   `GET /restaurants` - View all restaurants
-   `POST /restaurants` - Create new restaurant
-   `GET /restaurants/:id` - View specific restaurant
-   `PUT /restaurants/:id` - Update restaurant
-   `DELETE /restaurants/:id` - Delete restaurant

### Reviews

-   `POST /campgrounds/:id/reviews` - Create campground review
-   `POST /restaurants/:id/reviews` - Create restaurant review
-   `DELETE /:id/reviews/:reviewId` - Delete review

🔒 Environment Variables
------------------------

| Variable | Description |
| --- | --- |
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name |
| `CLOUDINARY_KEY` | Cloudinary API key |
| `CLOUDINARY_SECRET` | Cloudinary API secret |
| `MAPBOX_TOKEN` | Mapbox access token |
| `DB_URL` | MongoDB connection URL |
| `APP_URL` | Application URL |

🛠️ Development
---------------

To run in development mode:

npm run dev

🧪 Testing
----------

Run tests using:

npm test

📝 License
----------

This project is licensed under the MIT License - see the LICENSE.md file for details.

👥 Contributing
---------------

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

📞 Contact
----------

My Github ID - [@Nischalb10](vscode-file://vscode-app/c:/Users/Nischal/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)

Project Link: [https://github.com/Nischalb10/Yelpcamp](vscode-file://vscode-app/c:/Users/Nischal/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)

🙏 Acknowledgments
------------------

-   [Node.js](vscode-file://vscode-app/c:/Users/Nischal/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
-   [Express.js](vscode-file://vscode-app/c:/Users/Nischal/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
-   [MongoDB](vscode-file://vscode-app/c:/Users/Nischal/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
-   [Bootstrap](vscode-file://vscode-app/c:/Users/Nischal/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
-   [Mapbox](vscode-file://vscode-app/c:/Users/Nischal/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
-   [Cloudinary](vscode-file://vscode-app/c:/Users/Nischal/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
