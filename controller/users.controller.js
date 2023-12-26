const path = require("path");
const User = require("../models/users.model");

// get users form
exports.getUsersForm = (req, res) => {
  res.sendFile(path.join(__dirname, "/../views/index.html"));
};


// get users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

// get One user
exports.getOneUser = async (req, res) => {
  const user = await User.findOne({_id: req.params.id});
  res.status(200).json(user);
};

// post users or create new user
exports.createUsers = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      age: Number(req.body.age)
    })
    await newUser.save();
    // res.status(201).json(newUser);
    res.status(301).redirect("/");
  } catch (error) {
    console.log(error.message)
  }
};

// update user's data
exports.updateUser = (req, res) => {
  res.status(200).json("update users");
};

// delete user
exports.deleteUser = (req, res) => {
  try {
    res.status(200).json("delete users");
    // res.status(301).redirect("/");
  } catch (error) {
    res.status(500).json("server error");
  }
};
