const {Message} = require('../../models')

module.exports = async (req, res) => {
    try{
        const {page} = req.params

        const messages = await Message.find({}, {}, {skip: (page-1)*10, limit: 10}).populate('user', 'name email')

        res.status(200).send(messages)
    } catch (e) {
        console.log(e)
        res.status(200).send({error: true, message: e.message})
    }
}