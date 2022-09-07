const { Router } = require('express')
const { uploadImage } = require('../controller/upload.controller')
const { upload } = require('../service/upload.service')

const router = Router()

router.post('/', upload.single('image'), uploadImage)

module.exports = router