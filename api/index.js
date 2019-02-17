const express = require('express');
const path = require('path');

const router = express.Router();
const DATA_DIR = path.join(__dirname, '..', 'data');

router.get('*', (req, res) => {
  res.sendfile(path.join(DATA_DIR, req.url));
});

module.exports = router;
