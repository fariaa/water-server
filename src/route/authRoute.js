const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { email, pwd } = req.body;

    if (email === 'fariaa@hotmail.com' && pwd === 'admin') {
        const response = { msg: "user authorized", token: "jljaljljlajljlamlasifgkgl32323565" };
        res.json(response);
    }
    res.status(401).json({ msg: "user not authorized" })
})


module.exports = router;