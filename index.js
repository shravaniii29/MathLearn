const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9000;

app.use(cors());

app.get('/add', (req, res) => {
  const result = Number(req.query.a) + Number(req.query.b);
  res.json({ result });
});

app.get('/subtract', (req, res) => {
  const result = Number(req.query.a) - Number(req.query.b);
  res.json({ result });
});

app.get('/multiply', (req, res) => {
  const result = Number(req.query.a) * Number(req.query.b);
  res.json({ result });
});

app.get('/divide', (req, res) => {
  const result = Number(req.query.a) / Number(req.query.b);
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
