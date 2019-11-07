var multer = require('multer');
var path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, callback) {
            var ext = path.extname(file.originalname);
            var name = path.basename(file.originalname, ext);

            callback(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};