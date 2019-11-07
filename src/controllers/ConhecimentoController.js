var User = require('../models/User');
var Conhecimento = require('../models/Conhecimento');

module.exports = {
    async index(req, res) {
        var categoria = req.query.categoria;

        var conhecimentos = await Conhecimento.find({ categoria: categoria });

        return res.json(conhecimentos);
    },

    async store(req, res) {
        var filename = req.file.filename;
        var descricao = req.body.descricao;
        var solucao = req.body.solucao;
        var categoria = req.body.categoria;
        var user_id = req.headers.user_id;
        
        var user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'Usuario não informado' });
        }

        var conhecimento = await Conhecimento.create({
            user: user_id,
            imagem: filename,
            descricao: descricao,
            solucao: solucao,
            categoria: categoria,
        });

        return res.json({ conhecimento });
    }
}