const _ = require("lodash");
const { encrypt, compare } = require("./encryption");
const { createToken, verifyToken } = require("./token");
const User = require("./user.model");

class UserCtrl {
  static pickUser(user) {
    return _.pick(user, ["name", "_id", "userId", "email"]);
  }

  //   create user

  static createUser(req, res) {
    const u = req.body;
    if (u.password) {
      u.password = encrypt(u.password);

      const userObj = new User(u);

      userObj
        .save()
        .then((result) => {
          res
            .status(200)
            .send({ message: "User Created", data: UserCtrl.pickUser(result) });
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .send({ message: "Couldn't create the user", data: err });
        });
    }
  }

  //authenticate
  static authenticate(req, res) {
    const { email, password } = req.body;

    User.findOne({ email: email }, (err, result) => {
      if (err || !result) {
        res.status(404).send({ message: "Invalid Email", error: err });
      } else if (!result.password) {
        res.status(404).send({ message: "Invalid Password", error: err });
      } else if (compare(password, result.password)) {
        //generating token
        const token = createToken({ id: result._id });
        res.set("x-token", token);
        res.status(200).send({
          message: "Login Successful",
          data: UserCtrl.pickUser(result),
        });
      } else {
        res.status(404).send({ message: "Invalid Password", error: err });
      }
    });
  }
}

module.exports = UserCtrl;
