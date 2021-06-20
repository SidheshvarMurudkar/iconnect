const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/newtask";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn1 = mongoose.connection;

conn1.on("open", () => {
  console.log("Connected to the database");
});
conn1.on("error", () => {
  console.log("Couldn't connect to the database");
});
