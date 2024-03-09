const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./html/index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }

      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(data);
    });
  } 
  else if (req.url === '/about') {
    fs.readFile('./html/about.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }

      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(data);
    });
  }
  else if (req.url === '/rules'){
    fs.readFile('./html/rules.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }

      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(data);
    });
  }
  else if (req.url === '/backstory'){
    fs.readFile('./html/backstory.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }

      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(data);
    });
  }
  else {
    // If the URL is not '/', return a 404 response
    res.writeHead(404);
    res.end('Not Found');
  }
});

const port = 10000; // You can change this to any available port you prefer

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
