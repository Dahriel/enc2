module.exports =
{
    style: {
        options: {
            style: 'expanded'
        },
        files: [
            {
                expand: true,
                cwd: 'client/style/',
                src: ['**/*.scss'],
                dest: 'dist/public/style/',
                ext: '.css'
            }
        ]
    }
};