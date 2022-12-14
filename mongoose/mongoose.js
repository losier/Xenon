const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/xenon";

async function connectToDB() {
  if (!MONGODB_URI) return console.error("Mongoose is not connected...");
  await mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongoose is connected...");
    })
    .catch((error) => {
      console.error(error);
    });
}

connectToDB();
const db = mongoose.connection;

db.on("error", () => {
  console.log("> error occurred from the database");
});

module.exports = db;

// module.exports = async (client) => {
//     if(!MongooseConectionString)
//         return console.log('Mongoose is not connected...');

//     await mongoose.connect(MongooseConectionString, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }).then(() => {
//         console.log('Mongoose is connected...');
//     }).catch((error) => {
//         console.error(error);
//     })

//     const db = mongoose.connection;

//     db.on('error', () => {
//         console.log('> error occurred from the database');
//     });
//     db.once('open', () => {
//         console.log('> successfully opened the database');
//     });
// }
