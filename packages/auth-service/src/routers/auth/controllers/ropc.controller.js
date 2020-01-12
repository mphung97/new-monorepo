const jwt = require('jsonwebtoken');
const { PRIVATE_KEY, ISSUER, LIFE_SPAN } = require('config');

/* util */
function generate_access_token() {
    const payload = {
        "iss": ISSUER,
        "exp": Date.now() + LIFE_SPAN,
    }
    const access_token = jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256' });
    return access_token;
}

/* service */
function authenticate_user_credentials(username, password) {
    // check in db
    return true;
}

/* service */
function authenticate_client(client_id, client_secret) {
    // check in db
    return true;
}

function has_empty_value_in_array(array) {
    for (const value of array) {
        if (!value) {
            return true;
        }
    }
    return false;
}

exports.auth = function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const client_id = req.body.client_id;
    const client_secret = req.body.client_secret;

    if (has_empty_value_in_array([username, password, client_id, client_secret])) {
        return res.status(400).json({
            error: "invalid_request",
            error_description: 'Required parameters are missing in the request.'
        });
    }
    if (!authenticate_client(client_id, client_secret)) {
        return res.status(401).json({ error: "access_denied" });
    }
    if (!authenticate_user_credentials(username, password)) {
        return res.status(400).json({ error: "invalid_request" });
    }
    const token = generate_access_token();

    return res.json({ token });
}