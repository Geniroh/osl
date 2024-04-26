const Auth = require('../models/auth.model');
const bcrypt = require('bcrypt');
const { createError } = require('../utils');
const jwt = require('jsonwebtoken');

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new Auth({
      ...req.body,
      password: hash,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};


const login = async (req, res, next) => {
  try {
    const user = await Auth.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET
    );

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ user, token});
  } catch (err) {
    next(err);
  }
};

const logout = async (req,res,next) => {
    try {
      res.clearCookie("access_token");

      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      next(error)
    }
}

const getUserInfo = async (req, res, next) => {
    let token = req.headers.authorization;
    
    if (!token) {
        return next(createError(401, 'Unauthorized: Access token not provided'));
    }

    try {
        if (token && token.startsWith("Bearer ")) {
            token = token.slice(7);
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const user = await Auth.findById(userId)

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = { login, register, logout, getUserInfo }

