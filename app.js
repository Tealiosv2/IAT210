const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static('html'));

// Define a route to serve your HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + './html/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
