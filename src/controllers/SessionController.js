var User = require('../models/User');

module.exports = {
    async store(req, res) {
        var nome = req.body.nome;
        var email = req.body.email;
        var senha = req.body.senha;


        var user = await User.findOne({ email: email });

        if (!user) {
            var user = await User.create({ nome, email, senha });
        }

        return res.json(user);
    }
};