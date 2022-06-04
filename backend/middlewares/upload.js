const multer = require('multer')
const fs = require('fs')
const mime = require('mime-types')
const {
  IMAGE_FOLDER,
  MEGABYTE,
  ACCEPTED_IMAGE_FORMATS,
} = require('../constants/file')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, IMAGE_FOLDER)
  },
  filename: (req, file, cb) => {
    const type = mime.extension(file.mimetype) || ''

    cb(null, `${new Date().getTime()}.${type}`)
  },
})

const imageUpload = multer({
  storage,
  fileFilter: function (req, file, callback) {
    const type = mime.extension(file.mimetype) || ''

    if (ACCEPTED_IMAGE_FORMATS.includes(type)) {
      callback(null, true)
    }
    callback(null, false)
  },
  limits: {
    fileSize: MEGABYTE * 5,
  },
})

module.exports = {
  imageUpload,
}
