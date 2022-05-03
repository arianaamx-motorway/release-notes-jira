const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  const tagName = core.getInput('tag_name');
  const releaseName= core.getInput('release_name')
  const githubToken = core.getInput('github_token')

  const octokit = github.getOctokit(githubToken)

  let bodyFileContent = null;
  try {
     bodyFileContent = fs.readFileSync(bodyPath, { encoding: 'utf8' });
  } catch (error) {
      core.setFailed(error.message);
  }
  
  console.log(bodyFileContent)
  console.log(`Tag name: ${tagName}`);
  console.log(`Release name: ${releaseName}`)
  console.log(`Github token:  ${githubToken}`)



  // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}