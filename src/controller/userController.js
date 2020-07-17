const User = require('@model/UserModel');

const userController = {
    test(req, res) {
        res.sendError('Erro no banco de dados', 500);
    },
    save(req, res) {
        const { name, email, password } = req.body;
        const person = new User({ name, email, password });

        person.save((err, person) => {
            if (err) {
                return res.status(500).send({ message: 'erro' });
            }
            res.send({ person });
        });
    },
}

module.exports = userController;