# Imag App Example

This example application is a template app, containing the folder structure used in every IXP projects, and is ready to be integrated in Kiosk.

## Documentation

The documentation is here: https://imagination.jira.com/wiki/display/ITD/Setting+up+a+Digital+project#SettingupaDigitalproject-TheIXPExampleProject

## Setting up the environment

### Dependencies

Your webserver is running in exactly the same way as every other developer working on this project. To achieve this we are using node.

#### Installing node

Install node via the package on their website [http://nodejs.org](http://nodejs.org), download the installer and confirm its installed by opening your CLI and type.

        node -v

The node installation comes with the [node package manager](https://npmjs.org), which we will use to install our development dependencies.

The following may require super user privileges (if on a mac you may need to prepend the following with 'sudo'), as they are installing programs on your machine.

        npm install -g bower
        npm install -g grunt-cli

##### Bower

[Bower](http://bower.io/) is a JavaScript package manager its advantages and reason for using are the following:

        * removes need to create a vendor/ folder (which usually ends up being a dumping ground)
        * helps everyone have visibility over the plugins being used
        * encourages greater research over plugins being used, which in the long run creates better projects

The bower plugins are installed in **app/components/** you cannot edit these files as they are ignored by git, this is by design, as editing plugins removes transparency for other developers.  If you need to edit the plugin then we suggest finding a different one, or speaking to your technical lead.

##### Grunt (grunt-cli)

[Grunt](http://gruntjs.com/) is a task runner similar to [ANT](http://ant.apache.org/), [Maven](http://maven.apache.org/), and [Gradle](http://www.gradle.org/) and is used to do the following task:

        * run your development server
        * run your unit tests (generating junit xml output)
        * create sprite sheets
        * generate documentation
        * compile less (for development)
        * compile code (minify, lint) for distribution

We use a task runner as we need transparency of the project in our [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) environment, [Jenkins](https://ci.imagination.net/).


### Further installation

In your CLI run the following commands in the project root:

        bower install

This will install all front end project dependencies, any future additions to your bower.json will require the command to be run again

        npm install

This will install all development dependencies

###### Grunt commands

To run your server type the following and visit [http://localhost:9001/app/](http://localhost:9001/app/):

        grunt server

To run tests locally:

        grunt jasmine

To build less without the server running:

        grunt less

To build documentation:

        grunt yuidoc