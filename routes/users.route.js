const express = require('express');
const { getUsers, getUsersForm, createUsers, updateUser, deleteUser, getEditForm, getOneUser } = require('../controller/users.controller');
const router = express.Router()

router.get("/", getUsersForm);
router.get("/users", getUsers);
router.get("/users/:id", getOneUser);
router.post("/users", createUsers);
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

module.exports = router