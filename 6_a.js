const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

let products = [];

app.post('/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).send(product);
});

app.get('/products', (req, res) => {
  res.status(200).send(products);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
/*
curl -X POST -H "Content-Type: application/json" -d '{"id":1,"name":"Sample Product","price":100}' http://localhost:3000/products

*/