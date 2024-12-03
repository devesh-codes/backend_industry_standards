const mongoose = require('mongoose');







const userSchema = mongoose.Schema({
    

    fullname: String,
    email: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    image: String


})

module.exports = mongoose.model("user", userSchema)