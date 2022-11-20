const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/users', userController.createUser)
router.get('/users', userController.getUsers)
router.get('/users/:email', userController.getUser)
router.put('/users', userController.updateUser)
router.delete('/users/:email', userController.deleteUser)


module.exports = router