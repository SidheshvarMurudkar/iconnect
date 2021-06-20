const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./db");

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Expose-Headers", "x-token");
  next();
});
app.use(bodyParser.json());

app.use("/api/v1/user", require("./user.route"));

app.listen(port, () => {
  console.log("Server is listening at port " + port);
});
