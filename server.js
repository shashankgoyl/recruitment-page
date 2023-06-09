const MongoClient = require('mongodb').MongoClient;
const url =' mongodb://localhost:27017'; // Replace with your MongoDB connection string

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB successfully!');

  // Further code for handling database operations goes here

  db.close(); // Close the database connection when you're done
});
const express = require('express');
const app = express();

// Define an API endpoint
app.get('/api/users', function(req, res) {
  db.collection('users').find().toArray(function(err, users) {
    if (err) {
      console.error('Error retrieving users from MongoDB:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(users);
  });
});

// Start the server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
