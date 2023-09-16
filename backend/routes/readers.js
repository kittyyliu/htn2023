var express = require('express');
var calls = require('../lib/calls.js');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send("readers functions!");
})

router.get('/getCreatedPR', async function(req, res, next) {
  try {
    const data = await calls.getCreatedPR();
    res.json(data);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.get('/getAssignedPR', async function(req, res, next) {
    try {
      const data = await calls.getAssignedPR();
      res.json(data);
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/getAllComments', async function (req, res, next){
    try {
        const data = await calls.getAllComments(req.query.repo);
        res.json(data);
      }
      catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
})

router.get('/getPrComments', async function (req, res, next){
  try {
      const data = await calls.getAllComments(req.query.repo, rep.query.pr);
      res.json(data);
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router;