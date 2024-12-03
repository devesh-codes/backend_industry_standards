const mongoose = require('mongoose');





const productSchema = mongoose.Schema({
    

    name: String,
    image: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    pandelColor: String,
    textColor:String


})

module.exports = mongoose.model("product", productSchema)