const {Schema, model} = require('mongoose')

const bcrypt = require('bcrypt')

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: (password) => {
            if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/.test(password)){
                return bcrypt.hashSync(password, 10)
            } else {
                throw new Error()
            }
        },
    },
    refreshToken: {
        type: String,
        required: false
    },
})

schema.methods.passCompare = async (passwordFromClient, passwordFromDb) => await bcrypt.compare(passwordFromClient, passwordFromDb)



module.exports = model('User', schema)