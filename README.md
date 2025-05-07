# Node.js MongoDB API

A simple Node.js Express API that connects to a MongoDB database and retrieves user data.

## Approach

This API implements a GET endpoint at `/users/:id` that retrieves user data from MongoDB with age validation. The solution uses Express for the API server, Mongoose for MongoDB connectivity, and includes validation to ensure users are only returned if they're over 21 years old.



