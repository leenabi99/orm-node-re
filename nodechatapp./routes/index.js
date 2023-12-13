const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
  res.render('login');
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  res.redirect('/chat');
});

router.get('/entry', (req, res, next) => {
  res.render('entry');
});

router.post('/entry', (req, res, next) => {
  const { username, password, email } = req.body;
  res.redirect('/login');
});

router.get('/find', (req, res, next) => {
  const message = '';
  res.render('find', { message });
});

router.post('/find', (req, res, next) => {
  const { email } = req.body;
  let message = '';

  message = '암호 찾기 결과 메시지';

  res.render('find', { message });
});

module.exports = router;
