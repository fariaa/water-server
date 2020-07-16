const express = require('express');
const router = express.Router();


router.post('/users', (req, res) => {

    res.json({ msg: "ok" });

})


module.exports = router;