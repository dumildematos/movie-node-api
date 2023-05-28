const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('get all movies')
    res.send('Movie')
})

module.exports = router