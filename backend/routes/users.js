var fetch = require('node-fetch');
const Octokit = require('@octokit/core');
var express = require('express');
const octokit = new Octokit.Octokit({
  request: {
    fetch: fetch,
  },
  auth: process.env.GITHUB_TOKEN 
});
var router = express.Router();

async function test(){
  await octokit.request('POST /user/repos', {
    name: 'Hello-World',
    description: 'This is your first repo!',
    username: "TestWriter23",
    headers: {
      Authorization: `token ` + process.env.GITHUB_TOKEN,
      Accept: 'application/vnd.github.machine-man-preview+json',

    }
  })
}

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const data = await test();
    res.json(data);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
