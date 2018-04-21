const router = require('express').Router();

// Matches with "/api/self"
router
  .get('/', (req, res) => {
    console.log(req.user);
    console.log(req.session);
    console.log(req.session.passport);
    res.json(req.user);
  });

module.exports = router;
