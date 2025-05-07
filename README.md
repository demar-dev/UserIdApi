# Installation and setup

This project requires you to have node, express, and mongodb installed.

After installation of the required tools mentioned above, a .env file is required to be created in the parent folder. After creation copy the contents from .env.example and paste into .env.



# Node.js MongoDB API

A simple Node.js Express API that connects to a MongoDB database and retrieves user data.

## Approach

This API implements a GET endpoint at `/users/:id` that retrieves user data from MongoDB with age validation. The solution uses Express for the API server, Mongoose for MongoDB connectivity, and includes validation to ensure users are only returned if they're over 21 years old.

# Running the server

To run the server go to the parent directory of project and type
```
npm install && npm start
```


