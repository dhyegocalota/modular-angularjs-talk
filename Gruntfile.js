module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'index.html',
          'slides/{,*/}*.{md,html}',
          'css/*.css',
          'js/*.js'
        ]
      },

      index: {
        files: [
          'templates/_index.html',
          'templates/_section.html',
          'slides/list.json'
        ],
        tasks: ['build']
      },

      jshint: {
        files: ['js/*.js'],
        tasks: ['jshint']
      }
    },

    connect: {
      livereload: {
        options: {
          port: 9000,
          hostname: 'localhost',
          base: '.',
          open: true,
          livereload: true
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },

      all: ['js/*.js']
    },

    copy: {
      dist: {
        files: [
          {
            expand: true,
            src: [
              'slides/**',
              'bower_components/**',
              'js/**'
            ],
            dest: 'dist/'
          }, {
            expand: true,
            src: ['index.html'],
            dest: 'dist/',
            filter: 'isFile'
          }
        ]
      }
    },

    buildcontrol: {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built from %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:dhyegofernando/modular-angularjs-talk.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask(
    'build',
    'Build index.html from templates/_index.html and slides/list.json.',
    function() {
      var indexTemplate = grunt.file.read('templates/_index.html');
      var sectionTemplate = grunt.file.read('templates/_section.html');
      var slides = grunt.file.readJSON('slides/list.json');
      var html = grunt.template.process(indexTemplate, {
        data: {
          slides: slides,
          section: function(slide) {
            return grunt.template.process(sectionTemplate, {
              data: {
                slide: slide
              }
            });
          }
        }
      });

      return grunt.file.write('index.html', html);
    }
  );

  grunt.registerTask(
    'test',
    '*Lint* javascript files.',
    [
      'jshint'
    ]
  );

  grunt.registerTask(
    'serve',
    'Run presentation locally and start watch process (living document).',
    [
      'build',
      'connect:livereload',
      'watch'
    ]
  );

  grunt.registerTask(
    'dist',
    'Save presentation files to *dist* directory.',
    [
      'test',
      'build',
      'copy'
    ]
  );

  grunt.registerTask(
    'deploy',
    'Deploy to Github pages',
    [
      'dist',
      'buildcontrol'
    ]
  );

  grunt.registerTask(
    'default',
    [
      'test',
      'serve'
    ]
  );
};
