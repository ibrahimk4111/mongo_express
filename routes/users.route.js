const express = require("express");
const multer = require("multer");
const {
  getUsers,
  getUsersForm,
  createUsers,
  updateUser,
  deleteUser,
  getOneUser,
} = require("../controller/users.controller");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.get("/", getUsersForm);
router.get("/users", getUsers);
router.get("/users/:id", getOneUser);
router.post("/users", upload.single('file'), createUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
