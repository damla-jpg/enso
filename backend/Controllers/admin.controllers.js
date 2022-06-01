// this file is dedicated to admin features such as register, login

/**
 * expect username, password
 * check if input legal, hash password, store into database, generate auth token
 * return the token
 */
const adminRegister = (req, res, next) => {
    const username = req.body.user;
    const password = req.body.password;
    console.log('Got body:', req.body);
    res.status(201).json(req.body);
    
    return;
};


/**
 * expect username, password
 * check logins, generate auth token
 * return the token
 */
 const adminLogin = (req, res, next) => {
    const username = req.body.user;
    const password = req.body.password;
    console.log('Got body:', req.body);
    res.status(201).json(req.body);

    return;
};

module.exports = {
    adminRegister,
    adminLogin
}
