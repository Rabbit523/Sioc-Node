const model = global.app.model;
const {hash} = global.app.security;
const sessionSecret = global.app.config.auth.sessionSecret;
const {split} = require('lodash');
const jwt = require('jsonwebtoken');

module.exports = router => {

    router.post('/', async (req, res, next) => {
        try {
            const count = await model.User.count({username: req.body.user.username}).exec();
            if (count) {
                return res.status(409).send({message: 'User Name or email is already taken'});
            }
            const user = new model.User(req.body.user);
            user.role = model.enums.roles.USUARIO;
            user.password = hash(user.password);
            await user.save();
            res.send({success: true});

        } catch (err) {
            next(err);
        }
    });

    router.get('/profile', (req, res, next) => {
        const header = req.get('Authorization');
        if (!header) {
            return res.sendStatus(401);
        }
        const token = split(header, /\s+/).pop();
        if (!token) {
            return res.sendStatus(401);
        }
        try {
            const decoded = jwt.verify(token, sessionSecret);
            model.User.findOne({username: decoded.sub}).exec().then(
                user => res.send({role: user.role})
            ).catch(next);
        } catch (err) {
            return res.send(false);
        }
    });

    return router;
};
