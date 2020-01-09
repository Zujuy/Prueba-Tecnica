const User = require('../models/User');

// Bcrypt to encrypt passwords

exports.signup = (req, res, next) => {
  const {
    name,
    lastName,
    email
  } = req.body;

  User.register(
    {
      name,
      lastName,
      email
    },
    req.body.password
  )
    .then(user => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
      res.status(200).json({ user });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err });
    });


};

exports.logout = (req, res) => {
  req.logout();
  res.clearCookie('connect.sid');
  res.status(200).json({ msg: 'Logged Out' });
};

exports.login = async (req, res, next) => {
  res.status(200).json({ user: req.user });
};

exports.getProfile = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({ user });
};