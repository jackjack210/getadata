const express = require('express');
const router = express.Router();

const models = require('./models');

router.post('/feedback',async (req, res) =>{

    const { name, longitude, latitude, email, data } = req.body;

    try {
        const datatake = new models ({ name, longitude, latitude, email, data });
        await datatake.save()
        res.status(422).json({message: "Feedback send Successfully"});
    } catch (err) {
        res.status(422).json({message: "Feedback send UnSuccessfully"});
    }
});

module.exports = router;