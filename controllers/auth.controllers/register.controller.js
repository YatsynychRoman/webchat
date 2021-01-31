const {User} = require('../../models')

module.exports = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        console.log(req.body)

        await User.create({
            name,
            email,
            password
        })

        res.status(200).send({message: 'Registration successful', error: false})
    } catch (e) {
        console.log(e)
        res.status(200).send({message: e.toJSON()._message, error: true})
    }

}