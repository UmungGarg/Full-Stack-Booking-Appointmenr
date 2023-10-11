const User = require('../models/user');

exports.getAddUser = async (req,res,next) => {
    try {
      const users = await User.findAll();
      console.log(users);
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };

exports.postAddUser = async(req,res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const data = await User.create( {name: name, email: email, phoneNumber:phoneNumber });
    console.log(data);
    res.status(201).json({newUserDetail:data});
    };

exports.postDeleteUser = async(req,res,next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
  .then(user => {
    return user.destroy();
  })
  .catch(err => console.log(err));
}
    