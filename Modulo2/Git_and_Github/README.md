# Git and Github

## Git

- Git is an app to creat version of an algorithn first you have to download git
  from https://git-scm.com/downloads make sure to download de uploaded version.

### Basic comands

- Change Directory -> cd "path"
- List of directorys-> ls
- Create folder -> mkdir "name"
- Delete -> rm or rf

tips: to clean de scream just type clear, or you can use the shortcut ctrl + L

### how to use Git

first you need to unlock de security of Git, and you can do this by two ways:

- Sha1 Permanent
- Token temporary

#### Sha1

On Git Bash: you have to create an Sha1_key, than you just submit your sha_key following de documantation(https://git-scm.com/docs/hash-function-transition/).

- ssh-keygen -t ed25519 -C + "your-email"
- Chande directory to the key's directory
- cat id_ed25519.pub
- copy the key tha was generate and paste it on github (SSHkeys config)

###create an agent

- eval$(ssh-agent -s)
  -ssh-add id-ed25519

## starting Git-version

open git bash on the folder thats you want to version.

- initiate the git (git init)
- git add
- git commit -m "msg"

## Github

- create a new repository
- copy the url path

on git bash:
git remote add origin "path"
git push origin master.

tips:
to see you stage on git you can tap at any moment (git status)
after added the path you can tap (git remote -v)

_if everything goes correctly now your repostory should be on GitHub_
