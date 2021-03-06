# react-site-front

### Setup project:
```
  npm i
  npm run dev
  npm run server (in another terminal)
```

### This project represents the SSR (and PWA alongside in future) made with the help of the following technologies:
+ React
+ Redux
+ Redux-saga
+ Typescript
+ Sass
+ Atomic structure
+ Storybook
+ Jest

### Commit rules:
| Commit type   | Description |
| ------------- |:-------------:|
| build         | Build a project or change external dependencies |
| ci            | CI configuration and scripting |
| docs          | Documentation update |
| feat          | Adding new functionality |
| fix           | Error fixes |
| perf          | Changes which are aimed at improving performance |
| refactor      | Editing code without fixing bugs or adding new features |
| revert        | Rollback to previous commits |
| style         | Code style edits (tabs, indents, periods, commas, etc.) |
| test          | Adding Tests |
| upd           | Updates in the code without adding new functionality |

### Commit example
```
git commit -m 'build(integration): add public API'
```

### Branch example
A branch`s name begins with the type of changes(see commit types) and then the changes description is written:
```
git checkout -b feat_themes
```

### Linting
Linting is set on the precommit script.

Eslint errors and warnings: `npm run eslint`

Eslint config: `npm run eslint:dump`

VSCode Eslint config:
`
"editor.codeActionsOnSave": {
  "source.fixAll": true
}
`
