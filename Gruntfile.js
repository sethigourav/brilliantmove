!(function () {
    'use strict';
    module.exports = function (grunt) {
       const sass = require('node-sass');       
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            sass: { 
                options: {
                    implementation: sass,
                    sourceMap: true,
                    outputStyle: 'compressed',
                },
                dist: {
                    files: {
                        'css/custom.min.css': 'sass/main.scss' 
                    }
                }, 
                partner: {
                    files: {
                        'css/partner.min.css': 'sass/partner/main.scss'
                    }
                },
                admin: {
                    files: {
                        'css/admin.min.css': 'sass/admin/main.scss'
                    }
                } 
                          
            },            
            watch: {
                scripts: {
                    files: [
                        'sass/*/*.scss','sass/**/*.scss','sass/***/*.scss',
                        'sass/partner/*/*.scss',
                        'sass/admin/*/*.scss',
                        ['Gruntfile.js']],
                        tasks: ['sass'] 
                }
            }
        });
        // Load the plugin that provides the "uglify" task.
        grunt.loadNpmTasks('grunt-sass');      
        grunt.loadNpmTasks('grunt-contrib-watch');
        // Default task(s).
        grunt.registerTask('default', ['sass','watch']);
    };
})();