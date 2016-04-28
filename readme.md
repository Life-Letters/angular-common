# Common Life Letters elements

This repo includes the Life Letters theme and other common Life Letter components,
including:

- modified bootstrap theme
- fonts
- mixins
- an example file

## Usage

Include the `_include.scss` file in your project. 

If you are using a Grunt build, add the following to the copy
task to handle the font files:

    {
      expand: true,
      cwd: '.',
      src: 'bower_components/theme/fonts/*',
      dest: '<%= yeoman.dist %>'
    }


You can also alter where the fonts are stored using the following 
SASS variables:

    $theme-font-path: "/foobar/";
    $icon-font-path: "/foobar/";


When using Compass in your grunt script, make sure `bower_components`
is included via the `importPath`:

    compass: {
      dev: {
        options: {
          importPath: './bower_components',
          ...

If you are using `wiredep` in your Grunt file, you should exclude your bootstrap sass files as
these are already imported via the web-common (they're imported in a specific order, so it's
easier to leave it to web-common). To exclude them, add the
following:

    wiredep: {
      ...
      sass: {
        ...
        exclude: ['bootstrap-sass'],
      }
    },


## Development

Install

    npm install
    bower install

Build the CSS

    grunt

Run server

    node server.js

Using local versions of bower modules:

    cd {...}/angular-users
    bower link
    cd {...}/web-common
    bower link angular-users

