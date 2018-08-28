const model = global.app.model;
const sessionSecret = global.app.config.auth.sessionSecret;
const hash = global.app.security.hash;
const jwt = require('jsonwebtoken');

const createJWT = user => jwt.sign({id: user._id}, sessionSecret, {subject: user.username, expiresIn: '14d'});

module.exports = router => {
    router.post('/login', (req, res, next) => {
        model.User.findOne({
            username: req.body.username,
            password: hash(req.body.password)
        }).lean().exec().then(
            user => {
                if (!user) {
                    return res.status(401).send({message: 'Invalid email and/or password'});
                }
                req.session.user = user;
                req.session.authorized = true;
                return res.send({token: createJWT(user)});
            }
        ).catch(next);
    });

    router.post('/signUp', (req, res, next) => {
        model.User.count({username: req.body.username}, {email: req.body.email}).exec().then(
            existingUser => {
                if (existingUser) {
                    return res.status(409).send({message: 'User Name or email is already taken'});
                }
                const user = new model.User({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash(req.body.password),
                    roles: req.body.roles
                });
                return user.save();
            }
        ).then(
            user => res.send({token: createJWT(user)})
        ).catch(next);
    });


    return router;
};
