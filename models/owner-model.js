const mongoose = require('mongoose');






const ownerSchema = mongoose.Schema({
    

    fullname: {
        type:String,
        minlength: 3,
        trim: true
    },
    email: String,
    
    
    products: {
        type: Array,
        default: []
    },
    contact: Number,
    image: String,
    gst: String,

})

module.exports = mongoose.model("owner", ownerSchema)