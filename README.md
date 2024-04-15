# 🏝️ Tour Tracking API ✈️

Welcome to the Tour Tracker API, where we streamline the journey of discovering and booking tours while seamlessly integrating user feedback through reviews! Designed with the modern traveler in mind, this API facilitates a robust platform for managing tours, user profiles, and real-time reviews, providing a comprehensive toolset for system operators and users alike.

## 🚀 Features 

- **Tour Management:** Create, update, and manage tours with detailed attributes including duration, group sizes, difficulty levels, and pricing.
- **User Authentication and Management:** Secure user authentication processes for registration and login, along with profile management features that allow users to update their information securely.
- **Dynamic Review System:** Users can post reviews for the tours they have experienced, which influences the overall ratings and helps others make informed decisions.
- **Advanced Query Capabilities:** Fetch tours based on various parameters such as proximity, price range, and ratings to provide flexibility and power to the end-user.
- **Security and Scalability:** Built with security and scalability at its core, ensuring data integrity and a seamless user experience even as the platform grows.

This API is built using Node.js and Express, leveraging MongoDB for a scalable database solution that efficiently handles complex queries and transactions associated with tour and user management.

Whether you are looking to integrate tour management capabilities into your existing system or start a new service, the Tour Tracker API offers all the necessary endpoints and functionality to get you started quickly and efficiently.

## 🚀 Installation

To get the Tour Tracker API up and running on your local machine, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community) installed locally or a MongoDB Atlas account for a cloud database.
- [Postman](https://www.postman.com/downloads/) for testing the API endpoints.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/henryaudi/TourTracker.git
   cd TourTracker
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```

### Configuration

The Tour Tracker API requires a connection to a MongoDB database and some other environment-specific variables. Follow these steps to configure your environment:

1. **MongoDB Database Setup:**
   - If you don’t have MongoDB installed, download and install it from MongoDB's official site.
   - Alternatively, set up a cloud-based MongoDB instance using MongoDB Atlas.
   - Once your database is set up, note down the connection string, as you will need it to configure your application.
2. **Environment Variables**
   - Create a new file in the root directory of the project and save it as `config.env`.
   - Populate the `config.env` file with the following key-value pairs, replacing the placeholder text with your own data:
     ```plaintext
      NODE_ENV=development
      PORT=8000
      DATABASE=<Your_MongoDB_Connection_String>
      JWT_SECRET=<Your_JWT_Secret>
      JWT_EXPIRES_IN=90d <OR another time span as you prefer>
      JWT_COOKIE_EXPIRES_IN=90 <OR another time span as you prefer>
      EMAIL_USERNAME=<Your_Mailtrap_Username>
      EMAIL_PASSWORD=<Your_Mailtrap_Password>
      EMAIL_HOST=sandbox.smtp.mailtrap.io
      EMAIL_PORT=25
     ```
### Running the server
   1. **Start the server:** (default would be in development mode)
   ```bash
   npm run start
   ```
   2. **Testing API Endpoints:**
   Use Postman or any other API testing tool to test the endpoints. Import the Postman collection provided in the documentation to quickly start interacting with the API.
   
