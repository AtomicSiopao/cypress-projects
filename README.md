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
