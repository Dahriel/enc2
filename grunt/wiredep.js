module.exports = {
    task: {
        src: [
            './dist/public/index.html'
        ],
        ignorePath: '../../client',
        exclude: ['bower_components/material-design-icons']
    }
};