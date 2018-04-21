const router = require('express').Router();

// Matches with "/api/self"
router
  .get('/', (req, res) => {
    res.json(req.user || { username: null });
  });

module.exports = router;
