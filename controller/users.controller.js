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
  const userId = req.params.id
  const user = await User.findOne({ _id: userId });
  res.status(200).json({userId, user });
};

// post users or create new user
exports.createUsers = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      age: Number(req.body.age),
    });
    await newUser.save();
    // res.status(200).json(newUser);
    res.sendFile(path.join(__dirname, "/../views/index.html"));
    res.status(301).redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

// update user's data
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.id });
    user.name = req.body.name;
    user.email = req.body.email;
    user.age = Number(req.body.age);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message)
  }
};

// delete user
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.deleteOne({ _id: userId });
    // res.status(200).json({userId});
    res.sendFile(path.join(__dirname, "/../views/index.html"));
    res.status(301).redirect('/');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
