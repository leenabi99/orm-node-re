const express = require('express');
const router = express.Router();

const members = [
  { mid: 1, name: '이용혁', username: 'leenabi99', email: 'lyh0922@empas.com' },

];

router.get('/all', (req, res) => {
  res.json({ members: members });
});

router.post('/create', (req, res) => {
  res.json({ message: '회원 등록이 완료되었습니다.' });
});

router.post('/modify', (req, res) => {
  res.json({ message: '회원 정보가 수정되었습니다.' });
});

router.post('/delete', (req, res) => {
  res.json({ message: '회원 정보가 삭제되었습니다.' });
});

router.get('/:mid', (req, res) => {
  const memberId = req.params.mid;
  const member = members.find((m) => m.mid === Number(memberId));

  if (member) {
    res.json({ member: member });
  } else {
    res.status(404).json({ message: '해당 회원을 찾을 수 없습니다.' });
  }
});
module.exports = router;