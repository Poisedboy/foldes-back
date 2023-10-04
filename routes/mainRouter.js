const express = require('express')
const router = express.Router()
const expressUploader = require('express-fileupload')

router.use(expressUploader({
    useTempFiles: true,
    safeFileNames: true,
    preserveExtension: true,
    tempFileDir: `${__dirname}/public/files/temp`
  }))

const uploadController = require('../controllers/uploadPictures')

router.post('/pic', uploadController.uploadPicutre)

module.exports = router
