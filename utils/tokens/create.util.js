const jwt = require('jsonwebtoken')
const {User} = require('../../models')

module.exports = async (userId) => {
    try {
        const accessToken = await jwt.sign({_id: userId}, process.env.ACCESS_TOKEN_KEY, {expiresIn: 12000000000000})
        const refreshToken = await jwt.sign({_id: userId}, process.env.REFRESH_TOKEN_KEY)

        await User.updateOne({_id: userId}, {refreshToken})

        return {accessToken, refreshToken}
    } catch (e) {
        console.log(e)
        throw new Error(e.message)
    }
}