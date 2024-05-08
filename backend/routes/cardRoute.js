const express = require('express')

const router = express.Router()

const {newCard, getCard, getAcard, updateCard, deletecard} = require('../controllers/cardController')

router.post("/",newCard)
router.get("/",getCard)
router.get('/:id',getAcard)
router.patch('/:id',updateCard)
router.delete('/:id',deletecard)

module.exports = router