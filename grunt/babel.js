module.exports = {

    options: {
        sourceMap: true
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'server',
            src: ['**/*.js'],
            dest: 'dist/server',
            ext: '.js'
        }]
    }

};