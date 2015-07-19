module.exports = {
    options: {
        livereload: true
    },
    server: {
        files:  [ 'server/**/*.js' ],
        tasks:  [ 'babel', 'express:dev' ],
        options: {
            spawn: false
        }
    },
    html:{
        files:  [ 'client/**/*.html' ],
        tasks:  [ 'clean:html', "copy:html", "wiredep", "injector" ]
    },
    js:{
    files:  [ 'client/**/*.js' ],
        tasks:  [ 'clean:js', "copy:js", "wiredep", "injector" ]
}
};