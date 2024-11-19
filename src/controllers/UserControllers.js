const User = require("../models/UsersModel");
const jwt = require("jsonwebtoken");

const getUser = async (req, res) => {
  const { email, lastname, name } = req.user;

  try {
    const users = await User.find({ email: email });
    res.send(users);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving users",
    });
  }
};

module.exports = { getUser };
