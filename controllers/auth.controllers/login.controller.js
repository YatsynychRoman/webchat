const {User} = require('../../models')
const {tokens} = require('../../utils')

module.exports = async (req, res) => {
    try{
        const {email, password} = req.body

        let user = await User.findOne({email})

        if(await user.passCompare(password, user.password)) {
            user = user.toObject()
            const tokenPair = await tokens.create(user._id)

            return res.status(200).send({user: {email: user.email, name: user.name, tokenPair}, error: false})
        }
        res.status(200).send({message: 'Password does not match', error: true})
    } catch (e) {
        res.status(200).send({message: e.message, error: true})
    }
}