const gridFileStorage = require('../database/mongooseDb').gridFileStorage;

const getImage = (fileName ,res)=>{
  console.log('fileName:'+fileName);

  const gfs = gridFileStorage();
  gfs.files.findOne({filename: fileName}, (err, file) => {
    console.log('err', err);
    console.log('file', file);
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
}

module.exports ={
  getImage
}

