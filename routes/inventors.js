const express = require('express');
const dataInventors = require('../data/inventor');
const router = express.Router();

/* GET inventors listing. */
router.get('/', async function(req, res, next) {
  let inventors = await dataInventors.getInventors();

  res.send(inventors);
});

router.get('/:id', async (req, res, next)=>{
    let inventor = await dataInventors.getInventor(req.params.id);
    res.send(inventor);
});

router.post('/', async (req, res, next)=>{
    let result = await dataInventors.pushInventor(
        {
            _id: req.body._id,
            first: req.body.first,
            last: req.body.last,
            year: req.body.year
        }
    );

    res.send(result)
});

router.put('/:id', async (req, res, next)=>{
    let result = await dataInventors.updateInventor(
        {
            _id: req.params.id,
            first: req.body.first,
            last: req.body.last,
            year: req.body.year
        }
    );

    res.send(result)
});

router.delete('/:id', async (req, res, next)=>{
    let result = await dataInventors.deleteInventor(req.params.id);
    res.send(result);
});

module.exports = router;