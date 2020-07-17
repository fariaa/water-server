const logger = require('@service/logger');

module.exports = (req, res, next) => {
    res.sendError = function (message, status = 500) {

        let user = null;
        if (req.user) {
            user = req.user;
        }
        logger.error({
            user,
            message,
            status,
        });

        return this
            .status(status)
            .send({ message });
    };
    next();
};