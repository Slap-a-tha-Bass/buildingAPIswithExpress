const express = require('express');
const chirpStore = require('../chirpstore');

let router = express.Router();

// Get localhost:3000/api/chirps/
router.get('/:id?', (req, res) => {
    let id = req.params.id;
    // let oneData = chirpStore.GetChirp(id);
    // let oneChirp = Object.keys(oneData).map(key => {
    //     return {
    //         id: key,
    //         user: oneData[key].user,
    //         message: oneData[key].message
    //     };
    // });
    let allData = chirpStore.GetChirps();
    let allChirps = Object.keys(allData).map(key => {
        return {
            id: key,
            ...allData[key]
        };
    });
    allChirps.pop();
    if (id) {
        res.json(chirpStore.GetChirp(id));
    } else {
        res.json(allChirps);
    }
});
// Post localhost:3000/api/chirps/
router.post('/', (req, res) => {
    const newChirp = req.body;
    res.json(chirpStore.CreateChirp(newChirp));
});

router.put('/:id', (req, res) => {
    let id = req.params.id; 
    chirpStore.UpdateChirp(id, req.body);
    res.json({message: 'Did it work?'});
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    chirpStore.DeleteChirp(id);
    res.json({ message: 'It deleted'});
});

module.exports = router;
