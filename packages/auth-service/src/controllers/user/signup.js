const services = require('../../services');

exports.signup = async (req, res) => {  
  const { username, password } = req.body;

  try {
    const isExistUser = await services.user.findByUsername(username);
    if (!isExistUser) {
      await services.user.create({ username, password });
      res.sendStatus(201);
    } else {
      res.status(400).json({ message: 'username already exist' });
    }
  } catch (error) {
    res.sendStatus(500);
  }
};