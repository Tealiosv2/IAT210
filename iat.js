const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // If the URL is '/', serve the iat.html file
    const filePath = path.join(__dirname, './index.html');

    // Read the content of the HTML file
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        // If there is an error reading the file, return a 500 response
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        // Set the appropriate content type for HTML
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        // Send the HTML content as the response
        res.end(content);
      }
    });
  } else {
    // If the URL is not '/', return a 404 response
    res.writeHead(404);
    res.end('Not Found');
  }
});

const port = 10000; // You can change this to any available port you prefer

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
