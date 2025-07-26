const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let data = { temperature: null, humidity: null };

app.get('/', (req, res) => {
  res.json(data); // Sends latest POSTed data
});

app.post('/', (req, res) => {
  data = req.body; // Stores new data
  res.json({ message: 'Data received and stored' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
