const express = require('express');
let router = express.Router();

// Get localhost:3000/api/users/
router.get('/', (req, res) => {
    res.json({ msg: 'sup lol'});
});

module.exports = router;