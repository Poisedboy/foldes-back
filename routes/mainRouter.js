const express = require('express')
const router = express.Router()
const expressUploader = require('express-fileupload')

router.use(expressUploader({
    safeFileNames: true,
    preserveExtension: true,
    // tempFileDir: `${__dirname}/public/files/temp`
  }))

const uploadController = require('../controllers/uploadPictures')
const folderController = require('../controllers/folderController')

router.get('/pictures', uploadController.getPicutres)

router.post('/create', uploadController.uploadPicutre)

router.get('/folders', folderController.getFolders)
router.post('/create-folder', folderController.createFolder)
router.patch('/add-value', folderController.addData)

module.exports = router
