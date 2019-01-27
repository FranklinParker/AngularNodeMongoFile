const extend = Object.assign;
const upload = require('../database/mongooseDb').upload;

const userController = require('../controller/userController');
const personController = require('../controller/personController');
const imageFileController = require('../controller/imageFileController');


const checkAuth = require('../auth/checkAuth');
/**
 * method to parse all request objects and send to a method
 * that does not deal with request but a paramaterized request object
 *
 *
 * @param businessMethod
 * @param message
 * @returns {Function}
 */
const apiHandler = (businessMethod, message) => {
  return async function (req, res) {
    try {
      const result = await businessMethod({
        actionData: req.body || {},
        query: extend(extend({
            $method: req.method
          }, req.query || {}),
          req.params || {}),
        user: req.userData
      });
      res.status(201).json(result);
    } catch (e) {
      res.status(401).json({message: e.message});
    }
  }

}

const apiHandlerFile = (businessMethod, file, message) => {
  return async function (req, res) {
    try {
      const result = await businessMethod({
        actionData: req.body || {},
        query: extend(extend({
            $method: req.method
          }, req.query || {}),
          req.params || {}),
        user: req.userData
      }, req.file);
      res.status(201).json(result);
    } catch (e) {
      res.status(401).json({message: e.message});
    }
  }

}

const apiHandlerFileContents = (businessMethod) => {
  return function(req, res){
    const fileName = req.params.fileName;
    businessMethod(fileName,res);

  }
}





module.exports.initRouter = (app) => {
  app.post('/api/register', apiHandler(userController.registerUser));
  app.post('/api/login', apiHandler(userController.login));
  //
  app.post('/api/person',upload.single('file'), apiHandlerFile(personController.savePerson));
  app.put('/api/person',  apiHandler(personController.updatePerson));
  app.get('/api/person', apiHandler(personController.getPeople));
  app.get('/api/fileContents/:fileName', apiHandlerFileContents(imageFileController.getImage));

}