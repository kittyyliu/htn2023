var fetch = require('node-fetch');
const Octokit = require('@octokit/rest');
const octokit = new Octokit.Octokit({
  request: {
    fetch: fetch,
  },
  auth: process.env.GITHUB_TOKEN 
});

<<<<<<< HEAD
// create repository
async function createRepo(repoName){ 
  var res = await octokit.rest.repos.createForAuthenticatedUser({
    name: repoName,
  });
  return res;
}

// get file contents
async function getFile(owner, repo, path){ 
  var res = await octokit.rest.repos.getContent({
    owner: owner,
    repo: repo,
    path: path,
  });
  return res;
}

// update file contents
async function updateFile(owner, repo, path, message, content, sha, authorName, authorEmail){ 
  var res = await octokit.rest.repos.createOrUpdateFileContents({
    owner: owner,
    repo: repo,
    path: path,
    message: message,
    content: content,
    sha: sha,
    commiter: {name: authorName, email: authorEmail},
    author: {name: authorName, email: authorEmail},
  }); 
  return res;
}

async function getReference(owner, repo, ref){
  var res = await octokit.rest.git.getRef({
    owner: owner,
    repo: repo,
    ref: ref,
  });
  return res
}

async function createBranch(owner, repo, branchName, sha){
  var res = await octokit.rest.git.createRef({
    owner: owner,
    repo: repo,
    ref: 'refs/heads/' + branchName,
    sha: sha,
  }); 
  return res;
}

async function mergeBranch(owner, repo, head){
  var res = await octokit.rest.repos.merge({
    owner: owner,
    repo: repo,
    base: 'master',
    head: head,
  });
  return res;
}

async function createPR(repoName, branchName){
    res = await octokit.rest.pulls.create({
        owner: "TestWriter23",
        repo: repoName,
        head: branchName,
        base: "main",
    })
    return res;
}

async function getCreatedPR(){ // get all issues/PRs in created by user
    res = await octokit.rest.issues.list({
        filter: "created",
    })
    return res;
}

async function getAssignedPR(){ //get all issues/PRs that are assigned to user to review
    res = await octokit.rest.issues.list({
        filter: "assigned",
    });
    return res;
}

async function getAllComments(repoName){ // all comments in a repo
    res = await octokit.rest.issues.listCommentsForRepo({
        owner: "TestWriter23",
        repo: repoName,
    });
    return res;
}

async function getPrComments(repoName, PrNumber){ // comments for a specific pr
    res = await octokit.rest.issues.listCommentsForRepo({
        owner: "TestWriter23",
        repo: repoName,
        issue_number: PrNumber,
    });
    return res;
}

module.exports = {
    createRepo,
    getFile,
    updateFile,
    getReference,
    createBranch,
    mergeBranch,
    createPR,
    getCreatedPR,
    getAssignedPR,
    getAllComments,
    createRepo,
    getPrComments
}
        