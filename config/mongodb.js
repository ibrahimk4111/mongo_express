const mongoose = require("mongoose");
const config = require("./config");

const dburl = config.url.dburl;

mongoose
  .connect(dburl)
  .then(() => {
    console.log("Mongoose is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
