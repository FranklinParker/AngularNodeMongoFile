const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const config = require("../config/config");
let connection = undefined;
let gridFileStorage = undefined;
let upload = undefined;
const promiseLib = global.Promise;
connection = mongoose.createConnection(config.dbUrl,  { useNewUrlParser: true } );
connection.once('open', () => {
  // Init stream
  gridFileStorage = Grid(connection, mongoose.mongo);
  gridFileStorage.collection('uploads');
  console.log(' Mongo connected');
});
const storage = new GridFsStorage({
  url: config.dbUrl,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
mongoose.connect(config.dbUrl);
upload = multer({ storage });

module.exports.upload = upload;


