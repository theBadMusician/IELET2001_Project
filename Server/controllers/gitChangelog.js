const gitlog = require('gitlog');
const fs = require('fs');

const options = {
    repo: __dirname,
    number: 100,
    fields: ["hash", "abbrevHash", "subject", "authorDate", "authorName"],
    execOptions: { maxBuffer: 1000 * 1024 }
};


// Git commit logs for serving commit history to website
var getcommits = () => {
    const commits = gitlog.default(options);

    const processedCommits = processCommits(commits);

    const mdCommits = commits2md(processedCommits);

    fs.writeFile('../Web/public/docs/Changelog.md', mdCommits, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Updated Gitlog!");
    }); 
    return mdCommits;
}

let processCommits = (commitArray) => {
    let allCommitsArray = [];
    let commitJSON = {
        date: '',
        msg: '',
        commitHTML: 'https://github.com/theBadMusician/MCUniversity/commit/',
        commitTreeHTML: 'https://github.com/theBadMusician/MCUniversity/tree/',
        hash: ''
    };
    commitArray.forEach(commit => {
        let newCommit = {
            ...commitJSON
        }
        newCommit.date = commit.authorDate;
        newCommit.msg = commit.subject;
        newCommit.hash = commit.hash;
        newCommit.commitHTML += commit.hash;
        newCommit.commitTreeHTML += commit.hash;

        allCommitsArray.push(newCommit);        
    });

    return allCommitsArray
}

let commits2md = (processedCommitArray) => {
    let commitArray = [];

    processedCommitArray.forEach(commit => {
        let mdMsg = "#### " + commit.msg + "\n\n";
        let mdDate = "> " + commit.date + "\n\n";
        let mdCommitHTML = '<p><a href="' + commit.commitHTML + ' "target="_blank" >Commit ' + commit.hash + ' on Github</a></p>\n\n';
        let mdCommitTreeHTML = '<p><a href="' + commit.commitTreeHTML + ' "target="_blank" >Repo at the time of commit</a></p>\n\n';
        commitArray.push(mdMsg);
        commitArray.push(mdDate);
        commitArray.push(mdCommitHTML);
        commitArray.push(mdCommitTreeHTML);
        commitArray.push('---\n\n\n');
    });
    commitArray = commitArray.join('');
    return commitArray;
    
}

module.exports = getcommits;