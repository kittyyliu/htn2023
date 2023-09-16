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

async function createRepo(){
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