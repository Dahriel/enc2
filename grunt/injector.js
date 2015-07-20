util = require('util');

module.exports = {
    scripts: {
        options: {
            transform: function (filePath) {
                filePath = filePath.replace('/dist/public/', '');
                return util.format('<script src="%s"></script>', filePath);
            }
        },
        files: {
            './dist/public/index.html': [
                'dist/public/app/app.js',
                'dist/public/app/**/*.js',
            ]
        }
    },
    css: {
        options: {
            transform: function (filePath) {
                filePath = filePath.replace('/dist/public/', '');
                return util.format('<link rel="stylesheet" href="%s">', filePath);
            }
        },
        files: {
            './dist/public/index.html': [
                'dist/public/style/**/*.css'
            ]
        }
    }
}