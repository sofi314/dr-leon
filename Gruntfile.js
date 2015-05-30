"use strict";

var path = require("path"),
    jsfiles = require("./files.json").javascript,
    folderMount = function folderMount(connect, point) {
        return connect.static(path.resolve(point));
    };

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        /*
            Automatically adds vendor prefixes for the all browsers and the Kiosk
        */
        autoprefixer: {
            options: {
                browsers: ["last 20 Chrome versions", "last 3 versions", "> 1%", "ie 8", "ie 7"]
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: "app/css/*.css",
                dest: "app/css/"
            },
        },
        /*
            Combine javascript files to one big file (taken form files.json)
        */
        concat: {
            dist: {
                files: {
                    "app/js/app.js": [
                        "components/angular/angular.js",
                        "components/angular-route/angular-route.js",
                        "./app/js/drLeon.js",
                        "./app/js/**/*.js",
                        "./app/js/**/**/*.js",
                        "./app/js/**/**/**/*.js",
                        "!/app/js/app.js"
                    ]
                }
            }
        },
        /*
            Grunt config values
        */
        config: {
            outputDir: "dist/",
            applicationFiles: [
                "app/js/*.js",
                "app/js/**/*.js",
                "app/js/**/**/*.js"
            ]
        },
        /*
            Connect server creates dev server at http://localhost:9001
        */
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: "",
                    hostname: "0.0.0.0"
                }
            },
            servertest: {
                options: {
                    keepalive: false,
                    port: 9001,
                    base: "",
                    hostname: "0.0.0.0"
                }
            }
        },
        /*
            JS Hint
        */
        jshint: {
            dist: "<%= config.applicationFiles %>"
        },
        /*
            Scrubadubdub
        */
        clean: {
            src: ["app/js/app.js"]
        },
        /*
            Copy asset files to distribution directory
        */
        copy: {
            css: {
                files: [{
                    expand: true,
                    cwd: "app/css",
                    src: ["*.css"],
                    dest: "<%= config.outputDir %>/css/"
                }]
            },
            images: {
                files: [{
                    expand: true,
                    cwd: "app/images/",
                    src: ["**"],
                    dest: "<%= config.outputDir %>/images/"
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    cwd: "app/fonts/",
                    src: ["**"],
                    dest: "<%= config.outputDir %>/fonts/"
                }]
            }
        },
        /*
            Test Javascript
        */
        jasmine: {
            src: [
                //"./dist/js/app.js"
                "./app/js/**/*.js",
                "./app/js/**/**/*.js",
                "./app/js/**/**/**/*.js"
            ],
            options: {
                keepRunner: true,
                specs: [
                    "./test/unit/**/*.js",
                    "./test/unit/**/**/*.js",
                    "./test/unit/**/**/**/*.js"
                ],
                vendor: [
                    "./app/components/angular/angular.js",
                    "./app/components/angular-mocks/angular-mocks.js",
                ],
                junit: {
                    path: "tests",
                    consolidate: false
                }
            }
        },
        /*
            Process sass to ./app/css/main.css
        */
        sass: {
            development: {
                options: {
                    imagePath: "../images",
                    paths: ["app/sass/"],
                    sourceMap: true
                },
                files: {
                    "app/css/main.css": "app/sass/main.scss"
                }
            },
            production: {
                options: {
                    imagePath: "../images",
                    outputStyle: "compressed",
                    paths: ["app/sass/"]
                },
                files: {
                    "app/css/main.css": "app/sass/main.scss"
                }
            }
        },
        /*
            Minify code
        */
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today('dd-mm-yyyy') %> */\n",
                compress: true
            },
            dist: {
                files: {
                    "app/js/app.js": ["app/js/app.js"]
                }
            }
        },
        /*
            On sass change event run sass:developer
        */
        watch: {
            options: {
              livereload: true,
            },
            css: {
              files: ["uikit/**/{,*/}*.html","app/sass/{,*/}*.scss", "app/*.html"],
              tasks: ["sass:development", "autoprefixer"]
            }
            ,javascript: {
                files: [
                    "./app/js/drLeon.js",
                    "./app/js/**/*.js",
                    "./app/js/**/**/*.js",
                    "./app/js/**/**/**/*.js"
                ],
                tasks: ["clean", "concat"]
            }
        },
        /*
            Generate documentation
            ./docs/css
            ./docs/js
         */
        yuidoc: {
            compile: {
                name:        "Javascript : <%= pkg.name %>",
                description: "<%= pkg.description %>",
                version:     "<%= pkg.version %>",
                options:     {
                    paths:       "./app/js/",
                    outdir:      "./docs/js",
                    themedir:      "./app/components/yuidoc-simple-theme"
                }
            }
        }
    });
    /*
        Load multiple grunt tasks from the package.json
    */
    require("load-grunt-tasks")(grunt);

    grunt.registerTask("server", [
        "concat",
        "sass:development",
        "autoprefixer",
        "connect:server",
        "watch"
    ]);

    grunt.registerTask("serverjs", [
        "jasmine",
        "sass:development",
        "autoprefixer",
        "connect:server",
        "watch:javascript"
    ]);

    grunt.registerTask("serverall", [
        "sass:development",
        "autoprefixer",
        "connect:server",
        "watch"
    ]);

    grunt.registerTask("build", [
        "sass:production",
        "autoprefixer",
        "yuidoc",
        "jasmine"
    ]);

    grunt.registerTask("minify", [
        "concat",
        "uglify"
    ]);

    grunt.registerTask("e2e", [
        "connect:servertest",
    ]);

    grunt.registerTask("default", ["build"]);
    grunt.registerTask("release", ["build"]);

};