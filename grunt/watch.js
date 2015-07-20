module.exports = {
    options: {
        livereload: true
    },
    server: {
        files: ['server/**/*.js'],
        tasks: ['babel', 'express:dev'],
        options: {
            spawn: false
        }
    },
    client: {
        files: ['client/**/*.html', 'client/**/*.js'],
        tasks: ['clean:html', "copy", 'sass', "wiredep", "injector"]
    },
    sass: {
        files: ['client/style/**/*.scss'],
        tasks: ['sass']
    }
};