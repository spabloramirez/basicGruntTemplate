'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
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
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
};
