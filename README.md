#frontend application
Client's view of the Molecular Playground

## Current Code Structure
The framework for this application is using [ReactJS](https://facebook.github.io/react/docs/top-level-api.html) and [Flux](https://github.com/facebook/flux/tree/master/examples/flux-todomvc).

For convenience of condensing code into one file at a time while still conserving the code clenliness of multiple files; we are making use of the [watchify](https://github.com/substack/watchify) module. The package.json includes a pre-written command to bundle together scripts while developing.

To bundle while working, type the command:
```
npm run bundle &
```

The watchify module will automatically update the bundle.js script in public/javascipts.
