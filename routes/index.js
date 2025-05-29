const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main/home'); 
});
router.get('/top', (req, res) => {
  res.render('main/top'); 
});

module.exports = router;
