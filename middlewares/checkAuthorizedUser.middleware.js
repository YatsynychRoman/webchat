const { tokens } = require('../utils')
const {User} = require('../models')

module.exports = async (req, res, next) => {
    try {
        if(!req.headers.authorization) {
            if(!req.body.temporaryName) throw new Error('Author must be provided')
            req.body.author = req.body.temporaryName
            return next()
        }

        const accessToken = req.headers.authorization

        const decoded = await tokens.verify(accessToken, process.env.ACCESS_TOKEN_KEY)

        const user = await User.findOne({_id: decoded._id}, {password: 0, refreshToken: 0})

        req.body.userId = user._id

        next()
    } catch (e) {
        console.log(e)
        return res.status(200).send({error: true, message: e.message})
    }
}