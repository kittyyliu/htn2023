const fetch = require('node-fetch');
const Octokit = require('@octokit/rest');
const express = require('express');
const octokit = new Octokit.Octokit({
  request: {
    fetch: fetch,
  },
  auth: process.env.GITHUB_TOKEN 
});
const calls = require('../lib/calls');
const router = express.Router();

async function getWork(){
  res = await octokit.rest.repos.getContent({
    owner: "TestWriter23",
    repo: "Hello-World",
    path: "README.md",
  });
  return res;
}

async function createWork(){
  data = await calls.createRepo();
  return data;
}

async function test(){
  ref = await calls.getReference("TestWriter23", "Hello-World", "heads/main");
  console.log(ref)
  res = await calls.createBranch(
    "TestWriter23",
    "Hello-World",
    "testBranchA",
    ref.data.object.sha
  );
  return res
}

/* GET */
router.get('/', async function(req, res, next) {
  try {
    const data = await test();
    //const data = await calls.getFile("TestWriter23", "Hello-World", "README.md");
    
    res.json(data);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/createWork', async function(req, res, next) {
  try {
    const name = req.query.name;
    const data = await calls.createRepo(name);
    res.json(data);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/createUpdateFile', async function(req, res, next) {
  try {
    const {owner, repo, path, message, content, sha, authorName, authorEmail} = req.query;
    const data = await calls.updateFile(
      owner, repo, path, message, content, sha, authorName, authorEmail
    );
    res.json(data);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/createBranch', async function(req, res, next) {
  try {
    const {owner, repo, path, message, content, sha, authorName, authorEmail} = req.query;
    const data = await calls.updateFile(
      owner, repo, path, message, content, sha, authorName, authorEmail
    );
    res.json(data);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
