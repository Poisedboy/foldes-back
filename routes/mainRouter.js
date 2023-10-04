const express = require('express')
const expressFileUpload = require('express-fileupload')
const router = express.Router()

router.use(expressFileUpload())

const uploadController = require('../controllers/uploadPictures')

router.post('/pic', uploadController.uploadPicutre)
router.post('/pics', uploadController.uploadPicutres)

module.exports = router
