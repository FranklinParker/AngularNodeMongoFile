const Person = require('../models/Person');

/**
 * save a person
 *
 *
 * @param params
 * @returns {Promise<*>}
 */
const savePerson = async (params) => {
	const personData = params.actionData;

	try {
		const personExisting = await Person.findOne({name: personData.name });
		console.log('personExisting', personExisting);
		if(personExisting){
			return {
				success: false,
				message: 'This Person name exists'
			};
		}
		const person = new Person(personData);
		const personRecord = await person.save();
		const numberRecords = await Person.count();
		return {
			success: true,
			record: personRecord,
      numberRecords: numberRecords
		};
	} catch (e) {
		return {
			success: false,
			message: e.message
		};
	}

};


/**
 * update a person
 *
 *
 * @param params
 * @returns {Promise<*>}
 */
const updatePerson = async (params) => {
  const personData = params.actionData;

  try {
    const updatePerson = await Person.findById(personData.id);
    updatePerson.name = personData.name;
    const result = await updatePerson.save();

    console.log('updated person', updatePerson);

    return {
      success: true,
      record: result
    };
  } catch (e) {
    return {
      success: false,
      message: e.message
    };
  }

};
/**
 * get a list of persons
 *
 * @param params
 * @returns {Promise<*>}
 */

const getPeople = async (params)=>{
	console.log('getPersons - params', params);
	const pageSize = params.query.pageSize;
	const currentPage = params.query.currentPage;
  const personQuery = Person.find();
  const count = await Person.count();
  if (pageSize && currentPage) {
    personQuery.skip(+pageSize * (+currentPage - 1))
      .limit(+pageSize);
  }
  try {
    const people = await personQuery;
    return {
      success: true,
      records: people,
      numberRecords: count
    };
  } catch (e) {
    return {
      success: false,
      message: e.message
    };
  }
}


module.exports ={
	savePerson,
  updatePerson,
	getPeople
}