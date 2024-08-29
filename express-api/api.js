const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET route
app.get('/api/getExample', (req, res) => {
  res.send('GET request to the homepage');
});

// POST route
app.post('/api/postExample', (req, res) => {
  const data = req.body;
  res.send(`POST request with data: ${JSON.stringify(data)}`);
});

// PUT route
app.put('/api/putExample', (req, res) => {
  const data = req.body;
  res.send(`PUT request with data: ${JSON.stringify(data)}`);
});

// DELETE route
app.delete('/api/deleteExample', (req, res) => {
  res.send('DELETE request to the homepage');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
