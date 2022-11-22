const Router = require('express')
const diseaseController = require('../controller/disease.controller')
const router = new Router()

router.get('/diseases', diseaseController.getDiseases)

module.exports = router