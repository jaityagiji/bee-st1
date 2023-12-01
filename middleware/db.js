const mongoose = require('mongoose')

const uri = "mongodb+srv://<username>:<password>@atlascluster.0psd8as.mongodb.net/?retryWrites=true&w=majority";

exports.connectToDb = () => {
    mongoose.connect(uri)
    .then(() => {(console.log("DB connected"))})
    .catch((err) => {(console.log("Not connected", err))});
}
