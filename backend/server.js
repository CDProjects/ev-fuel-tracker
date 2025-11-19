require('dotenv').config();
const express = require('express');
const cors = require('cors');

const stationsRouter = require('./routes/stations');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use the stations route
app.use('/api/stations', stationsRouter);

app.get('/', (req, res) => {
  res.send('EV Fuel Tracker Backend is running 🚗🔥');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
