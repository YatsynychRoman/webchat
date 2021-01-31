const router = require('express').Router()

const {messagesController} = require('../../controllers')
const {checkAuthorizedUser} = require('../../middlewares')

router.post('/create', checkAuthorizedUser, messagesController.create)
router.get('/list/:page', messagesController.getList)
router.get('/single/:id', messagesController.getSingle)

module.exports = router