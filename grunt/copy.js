module.exports = {
    client: {
        files: [
            // makes all src relative to cwd
            {
                expand: true,
                cwd: './client',
                src: ['**/*.html', '**/*.js', '**/*.css'],
                dest: './dist/public'
            }
        ]
    }
};