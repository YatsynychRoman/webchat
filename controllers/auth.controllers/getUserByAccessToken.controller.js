const {User} = require('../../models')

const {tokens} = require('../../utils')

module.exports = async (req, res) => {
    try{
        const accessToken = req.headers.authorization

        const decoded = await tokens.verify(accessToken, process.env.ACCESS_TOKEN_KEY)

        const user = await User.findOne({_id: decoded._id}, {password: 0, refreshToken: 0})

        res.status(200).send({user, error: false})
    } catch (e) {
        console.log(e)
        res.status(200).send({message: e.message, error: true})
    }
}