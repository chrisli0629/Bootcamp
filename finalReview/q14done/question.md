## Git Question A (40% credit):

You have committed and pushed a bad change to your git repo.  How can you fix it (give exact command), without destroying history, since others might have pulled your bad change and based their changes on yours?  What would this command do?

You can do a git-reset to the previous path or git-revert. you and the team need to make sure that yall do a git-pull again.


## Git Question B (30% credit):

How do you delete a local branch after completing work on it.  How would you delete a remote branch?

remote branch can be delete by --delete to git push.
local branch = you will do the same git branch -d 

## Git Question C (30% credit):

What is the difference between "cloning" and "forking" a repository?  Why would you use one or the other?
cloning- you are getting the most recent live copy of work. 
forking-you will get a copy of the repository to experiment without breaking anyone's code 