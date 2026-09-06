const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

// Health Check
app.get('/', (req, res) => {
  res.send('Scalable E-Commerce App Running on AWS!');
});

// Products API
app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 }
  ]);
});

app.listen(3000, () => console.log('Server running on port 3000'));
