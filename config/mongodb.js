const mongoose = require("mongoose");
const config = require("./config");

const uri = config.url.dburl;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Mongoose is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });


