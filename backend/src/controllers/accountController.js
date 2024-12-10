const User = require('../models/User');

exports.getAccountDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch account details.' });
  }
};
