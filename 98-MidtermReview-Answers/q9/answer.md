1. Give at least 2 reasons why git/github are useful for a solo developer.

1. Give at least 2 reasons why git/github are useful to a team of developers.

1. What is the difference between `git pull` and `git fetch`?

### Solutions here please ...

1. Following benefits are available to solo developers ...
    - Allows easy access to old versions of code, using `git checkout SHA`
    - You may switch between tasks without losing the partial work done on the earlier task, using branches.
    - You alwasy have access to pushed code no matter which computer you are working on.
    - Doesn't require an internet connection, as you have the entire project code on your computer.

1. In addition to the above benefits ...

    - Allows obtaining the latest stable and tested code for the entire project.
    - Integrating your changes with those of others, using merge and merge conflict resolution.
    - Requesting and obtaining permission to change the master copy, using pull requests.
    - Proving comments on each line of code.
    - Finding out the history of changes at file level, using git log
    - Finding out the history of changes at each line level using git blame.

1. 
   `git pull` does a fetch then merges the code.  If there are files where both the remote and the local copy had changes, it creates a merge conflict which the
   developer should resolve, commit and push.

   `git fetch` gets commits from other branches without merging and is useful to keep your repo up to date with the remote, without changing your code.
