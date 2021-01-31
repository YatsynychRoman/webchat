const router = require('express').Router()

const {authController} = require('../../controllers')
const {userExists} = require('../../middlewares')

router.post('/register', userExists, authController.register)
router.post('/login', authController.login)
router.get('/getByToken', authController.getUserByAccessToken)

module.exports = router