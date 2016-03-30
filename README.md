
#Front End Application
General user's view of the [Molecular Playground](https://github.com/molecular-playground). This piece is intended to render molecules; as well as act as an interface for user functions. Users should be able to create a profile, upload their molecules, view a selection of existing molecules, and set playlists to display molecules at their own URL.

##Current Code Structure
The framework for this application is using [AngularJS](https://docs.angularjs.org) for code structure and user interaction. The page styles, including the look and feel of the application are developed by utilizing [Material Design Lite](http://www.getmdl.io/) with CSS. For rending molecules, we are implementing [3DMolJS](http://3dmol.csb.pitt.edu/).

##Building the Application
For convenience of condensing code into one file at a time while still conserving the code cleanliness of multiple files; we are making use of the [watchify](https://github.com/substack/watchify) module. The package.json includes a pre-written command to bundle together scripts while developing. For one-and done compilation of the JS module, use the browserify build command.


Either the browserify or watchify module will automatically update the bundle.js script in public/javascipts.

## Installation and Running
1. Install all dependencies:
```
npm install
```
<br>
2. To build the application without automatic updates, use the command:
```
npm run build
```
<br>
3. To bundle while working, type the command:
```
npm run bundle &
```
<br>
4. To run the application
```
npm start
```
