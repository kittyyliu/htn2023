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

router.get('/createGeneralComment', async function (req, res, next){
  try {
      const data = await calls.createGeneralComment(req.query.repo, req.query.pr, req.query.comment);
      res.json(data);
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
})


router.get('/createInlineComment', async function (req, res, next){
  try {
      const data = await calls.createInlineComment(req.query.repo, rep.query.pr, rep.query.comment, rep.query.commit, rep.query.path, rep.query.start, rep.query.end);
      res.json(data);
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
})


router.get('/replyComment', async function (req, res, next){
  try {
      const data = await calls.replyComment(req.query.repo, req.query.pr, req.query.commentId, req.query.comment );
      res.json(data);
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router;