// backend/routes/stations.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      location: 'Helsinki',
      provider: 'Virta',
      price: 0.29,
      lat: 60.1699,
      lng: 24.9384
    },
    {
      id: 2,
      location: 'Espoo',
      provider: 'Recharge',
      price: 0.31,
      lat: 60.2055,
      lng: 24.6559
    }
  ]);
});

module.exports = router;
