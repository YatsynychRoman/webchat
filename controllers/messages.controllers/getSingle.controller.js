const {Types} = require('mongoose')

const {Message} = require('../../models')

module.exports = async (req, res) => {
    try{
        const {id} = req.params

        let message = await Message.findOne({_id: Types.ObjectId(id)}).populate('user', 'name email')
        if(!message) return res.status(200).send({error: true, message: 'There is no message with that id'})
        res.send(message)
    } catch (e) {
        console.log(e)
        res.status(200).send({error: true, message: e.message})
    }
}