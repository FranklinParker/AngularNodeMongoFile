const mongoose = require('mongoose');
const config = require("../config/config");
const _ = require('lodash');
const mongooseUniqueValidator = require('mongoose-unique-validator');


const Schema = mongoose.Schema;


const PersonSchema = new Schema({
  name: {type: String, required: true,unique: true},
  imageFileId: {type: String}

});

PersonSchema.pre('save',async function () {
  const person = this;
  const personObject = person.toObject();
  personObject.__v = person.__v++;

} );


PersonSchema.methods.toJSON = function () {
  const person = this;
  const personObject = person.toObject();
  personObject.id = personObject._id;
  personObject.version = personObject.__v;
  return _.pick(personObject, ['id', 'name','version', 'imageFileId']);

};

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
