const express = require('express')
const router = express.Router();

const {getPeople, 
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson} = require('../controllers/people')


// 2 ways of setting up routes 
// Seperate

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman/', createPersonPostman) 
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson) 

// Chained
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router