const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      location: 'Helsinki',
      provider: 'Virta',
      price: 0.29
    },
    {
      id: 2,
      location: 'Espoo',
      provider: 'Recharge',
      price: 0.31
    }
  ]);
});

module.exports = router;
