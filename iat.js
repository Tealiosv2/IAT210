const express = require('express');
const app = express();


// Serve static files from the 'public' folder
app.use(express.static('html'));

// Define a route to serve your HTML page
app.get('/', (req, res) => {
  res.sendFile('./html/index.html');
});

// Start the server
const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
