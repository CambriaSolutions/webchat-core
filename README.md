# webchat-core

### Deployment Process

1. Create an .npmrc file inside of the `chatframe` folder :

```
//registry.npmjs.org/:_authToken=xxx-xxx-xxx-xxx-xxx
```

2. Build the chatframe module from the chatframe folder with `yarn build`
3. Bump version number for chatframe in `package.json`
4. Publish module with `npm publish`

### Function Deployment Process

This project's functions directory is associated with two separate firebase
projects:

1. "webchat-core" serves as the production firebase project
2. "webchat-core-dev" serves as the dev firebase project

Each firebase project is defined as a project aliases with the corresponding project id
in the `.firebaserc` file.

```
{
  "projects": {
    "prod": "webchat-core",
    "dev": "webchat-45a9c"
  }
}
```

To manually define which project to deploy to, run `firebase use *alias_or_project-id* followed by`firebase deploy --only functions`to deploy the whole functions folder, or use the script`deploy-dev`or`deploy-prod`.
