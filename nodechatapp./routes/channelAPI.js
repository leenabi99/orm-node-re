const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
  res.json({ channels: [] });
});

router.post('/create', (req, res) => {
  res.json({ message: '채널 등록이 완료되었습니다.' });
});

router.post('/modify', (req, res) => {
  res.json({ message: '채널 정보가 수정되었습니다.' });
});

router.post('/delete', (req, res) => {
  res.json({ message: '채널 정보가 삭제되었습니다.' });
});

router.get('/:cid', (req, res) => {
  res.json({ channel: {} });
});

module.exports = router;
