# webchat-core

### Deployment Process

1. Create an .npmrc file inside of the `chatframe` folder :

```
//registry.npmjs.org/:_authToken=xxx-xxx-xxx-xxx-xxx
```

2. Build the chatframe module from the chatframe folder with `yarn build`
3. Bump version number for chatframe in `package.json`
4. Publish module with `npm publish`
