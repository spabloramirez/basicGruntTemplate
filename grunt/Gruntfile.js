'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        //compilar sass
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '../sass',
                    src: ['main.scss'],
                    dest: '../dist/css',
                    ext: '.css'
                }]
            }
        },
        //monitorizar cambios en sass
        watch: {
            css: {
                files: '../sass/**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
        },
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
