const {User} = require('../models')

module.exports = async (req, res, next) => {
    const {email} = req.body

    if(await User.findOne({email})) return res.status(200).send({message: 'User already exists', error: true})

    next()
}
