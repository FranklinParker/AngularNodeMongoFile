const gridFileStorage = require('../database/mongooseDb').gridFileStorage;

const getImage = (id ,res)=>{
  console.log('fileId:'+id);
  console.log('gridFileStorage', gridFileStorage);
  console.log('res', res);


  gridFileStorage.files.findOne({ _id: id }, (err, file) => {
    console.log('err', err);
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gridFileStorage.createReadStream(file.filename);
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

