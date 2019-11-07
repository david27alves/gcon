var mongoose = require('mongoose');

var ConhecimentoSchema = new mongoose.Schema({
    descricao: String,
    solucao: String,
    categoria: String,
    imagem: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Conhecimento', ConhecimentoSchema);