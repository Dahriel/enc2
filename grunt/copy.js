module.exports = {
    main: {
        files: [
            // makes all src relative to cwd
            {
                expand: true,
                cwd: './client',
                src: ['**'],
                dest: './dist/public'
            }
        ]
    },
    html: {
        files: [
            // makes all src relative to cwd
            {
                expand: true,
                cwd: './client',
                src: ['**/*.html'],
                dest: './dist/public'
            }
        ]
    },
    js: {
        files: [
            // makes all src relative to cwd
            {
                expand: true,
                cwd: './client',
                src: ['**/*.js'],
                dest: './dist/public'
            }
        ]
    }
};