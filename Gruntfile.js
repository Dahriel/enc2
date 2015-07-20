module.exports = function (grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    var config = require('load-grunt-config')(grunt);
    grunt.initConfig(config);

    grunt.registerTask('default', ['clean',
        'babel',
        'copy',
        'sass',
        'wiredep',
        'injector',
        'express:dev',
        'open:dev',
        'watch']);
};