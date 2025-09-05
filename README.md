# SETUP
## Download dependencies
 - [NodeJS](https://nodejs.org/en)
 - pnpm
 
## Install pnpm using npm and PowerShell
 - `npm install -g pnpm`

## Git Config and Setup
 - Download [git](https://git-scm.com/downloads)
 - Run VSCode and open `git bash` terminal

### SSH Key
 - Generate SSH Key
```
ssh-keygen -t ed25519 -C "your@email.com"
cat ~/.ssh/id_ed25519.pub
```
 - Add the .pub SSH key to https://github.com/settings/keys

### Clone the repo
```
cd ~/Projects   # or wherever you want it
git config --global user.name "<USERNAME>"
git config --global user.email "<EMAIL>"
git clone git@github.com:<username>/<repo>.git
cd <repo>
```

### Link an Existing Local Folder
```
cd ~/Projects/my-project
git init # initialize git
git remote add origin git@github.com:<username>/<repo>.git # GitHub remote via SSH
git fetch origin #fetch the repo
git checkout -b main origin/main
```


## Install Cypress.io via pnpm
```
pnpm init
pnpm add --save-dev cypress
pnpm cypress open` # opens Cypress UI or check your packacge.json for shortcuts
```

## Commit and Push Commands
```
Open git bash terminal
git status # check all file changes in local
git add . # add every change in local or do it for specific files/folders
git commit -m "MESSAGE HERE"
git push
```