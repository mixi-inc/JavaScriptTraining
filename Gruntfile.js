module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      all: {
        options: {
          port: 8081,
          hostname: 'localhost',
          base: ".",
          keepalive: true,
        }
      }
    },

    open: {
      all: {
        path: 'http://localhost:<%= connect.all.options.port%>/helloworld/helloworld.html'
      }
    },
  });

  grunt.registerTask('server',[
    'open',
    'connect',
  ]);
}
