# Gulp for UI
#### Gulp for creating an initial working environment for UI developers/designers

##### First, remember you need to have node.js, npm istalled. Here the link: https://nodejs.org/en/

All you have to do is:

```
Git clone git@github.com:cyntss/gulp-for-UI.git
```
We clone the repository locally in your computer
```
cd gulp-for-ui
```
We locate ourselves in the directory just created
```
npm install -g bower
```
We need Bower installed in our computer, and so we do.

```
npm install -g gulp
```
We install now Gulp, globally.

```
gulp
```
Run Gulp to start all the tasks

### The magic of this script is:
- Just cloning the repo and running GULP you will have a directory ready to start designing a UI in bootstrap with fontawesome included.
- You will work on .less files but then Gulp, automatically, will compile everything into CSS...and minify it!. Your UI will be much lighter.
- You only run GULP once, and leave it running, so gulp will take care of watching for every change you make in JS or LESS files, and compile them and minify them.
- When you need a 3rd party js library, you wont need to add a new .JS file into the index.html anymore. All you need to do is paste the new .js file into the "vendors" file, and gulp will take it and add it to the minified main.min.js. Just remember for be clean, and create a folder for the new library you use ;).. follow the current setup.
- When you add new images in "assets/images/" you wont need to worry about optimization. Gulp will compress the files and optimize them for websites and export them in "build/img/", so, when you need to use them again in your HTML or CSS, remember you dont have to use a source "assets/images/" but "build/img/"


**This will serve the website under localhost:8000, so just open a new browser and go to** [localhost:8000](http://localhost:8000)

Found a problem? please open an issue :)
