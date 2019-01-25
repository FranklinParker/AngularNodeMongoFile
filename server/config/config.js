const appConfig = require('./appConfig');

const config = {};
if(process.env.dbUrl){
  config.secret = process.env.JWT_SECRET;
  config.dbUrl = process.env.dbUrl;
  config.expireJwtSeconds = process.env.EXPIRE_JWT_SECONDS;
  config.authOverride= false;
} else{
  config.secret = appConfig.JWT_SECRET;
  config.dbUrl = appConfig.dbUrl;
  config.expireJwtSeconds = appConfig.EXPIRE_JWT_SECONDS;
  config.authOverride= appConfig.AUTH_OVERRIDE?appConfig.AUTH_OVERRIDE:false;

}


module.exports = config;