[![starline](https://starlines.qoo.monster/assets/USER)](https://github.com/AtomicSiopao/cypress-projects)

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


---

## BrowserStack Integration

[Setup Guide](https://automate.browserstack.com/qig/integrate-test-suite-step)

1. Run: `npm install -g browserstack-cypress-cli`
2. Generate browserstack.json file on root folder using `browserstack-cypress init`
3. Update the following config
```
 "auth": {
        "username": "${BROWSERSTACK_USERNAME}",
        "access_key": "${BROWSERSTACK_ACCESS_KEY}"
      },
...
...
...
"run_settings": {
        "cypress_config_file": "./cypress.config.js",
        // For Cypress v9 or lower using the following configuration
        // "cypress_config_file": "./cypress.json",
        "cypress_version": "12.3",
        "project_name": "Cypress sample build",
        "build_name": "Build no. 1",
        "parallels": "5"
      }
```
4. Create .env file (no spaces, no quotes)
```
BROWSERSTACK_USERNAME=username
BROWSERSTACK_ACCESS_KEY=access_key 
```

5. You can now run Cypress on BrowserStack using: `browserstack-cypress run --sync`

NOTE: If you get a UNAUTHORIZED 401 with your .env file, use the following:
`pnpm install --save-dev dotenv-cli`
`npx dotenv -e .env -- npx browserstack-cypress run` (requires doten-cli)
