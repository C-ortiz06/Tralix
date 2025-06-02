const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main/home'); 
});
router.get('/top', (req, res) => {
  res.render('main/top'); 
});
router.get('/register', (req, res) => {
  res.render('main/register'); 
});
router.get('/detalles', (req, res) => {
  res.render('main/detalles'); 
});
module.exports = router;
