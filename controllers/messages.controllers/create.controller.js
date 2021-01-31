const {Message} = require('../../models')

module.exports = async (req, res) => {
    try {
        const {userId, text, author} = req.body

        if(!text) return res.status(200).send({message: "Text of message must be provided", error: true})

        const newMessage = {text}

        if(userId) newMessage.user = userId
        else newMessage.author = author

        await Message.create(newMessage)

        res.status(200).send({message: 'Message created', error: false})
    } catch (e) {
        console.log(e)
        res.status(200).send({message: e.message, error: true})
    }
}