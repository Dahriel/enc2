module.exports= {
    main: {
        files: [
            // makes all src relative to cwd
            {expand: true, cwd: './client', src: ['**'], dest: './dist/public'}
        ]
    }
};