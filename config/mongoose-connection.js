const mongoose = require('mongoose');
const debug = require("debug")("development:mongoose");
const config = require("./development.json");

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        debug("MongoDB Connected");
    })
    .catch((err) => {
        debug(`Error connecting to MongoDB: ${err.message}`);
        console.error(err.stack);
    });

module.exports = mongoose.connection;
