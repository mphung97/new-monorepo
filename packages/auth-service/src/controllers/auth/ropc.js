const utilities = require('utilities');
const bcrypt = require('bcryptjs');
const services = require('../../services');

exports.token = async (req, res) => {
  if (utilities.hasEmptyValueInArray(Object.values(req.body))) {
    return res.status(400).json({
      error: 'invalid_request',
      error_description: 'Required parameters are missing in the request.'
    });
  }

  try {
    // eslint-disable-next-line camelcase
    const { client_id, client_secret, username, password } = req.body;

    const client = await services.client.findByClientId(client_id);
    if (!client) {
      return res.status(401).json({ error: 'access_denied' });
    }

    const validClientPass = await bcrypt.compare(
      client_secret,
      client.clientSecret
    );
    if (!validClientPass) {
      return res.status(401).json({ error: 'access_denied' });
    }

    const user = await services.user.findByUsername(username);
    if (!user) {
      return res.status(400).json({ message: 'username or password is wrong' });
    }

    const validUserPass = await bcrypt.compare(password, user.password);
    if (!validUserPass) {
      return res.status(401).json({ error: 'username or password is wrong' });
    }

    const token = utilities.generateAccessToken();
    return res.json({ token });
  } catch (error) {
    return res.sendStatus(500);
  }
};
