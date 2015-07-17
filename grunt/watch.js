module.exports = {
    options: {
        livereload: true
    },
    express: {
        files:  [ 'server/**/*.js' ],
        tasks:  [ 'babel', 'express:dev' ],
        options: {
            spawn: false
        }
    }
}