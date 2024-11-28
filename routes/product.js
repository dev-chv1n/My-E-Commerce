const express = require('express')
const router = express.Router()
const { create,list } = require('../controllers/product')


router.post('/product',create)
router.get('/product/:id',list)
router.delete('/product')
router.post('/product')
router.post('/product')

module.exports = router