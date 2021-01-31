const router = require('express').Router()
const authRouter = require('./auth.router')
const messagesRouter = require('./messages.router')

router.use('/auth', authRouter)
router.use('/messages', messagesRouter)

module.exports = router