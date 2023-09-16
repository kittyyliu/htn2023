var fetch = require('node-fetch');
const Octokit = require('@octokit/core');
var express = require('express');
const octokit = new Octokit.Octokit({
  request: {
    fetch: fetch,
  },
  auth: '460ec2061128944331e3146e548b910d97c95b45'
});
var router = express.Router();

async function test(){
  await octokit.request('POST /user/repos', {
    name: 'Hello-World',
    description: 'This is your first repo!',
    username: "TestAuthor",
    headers: {
      Authorization: `token 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`,
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