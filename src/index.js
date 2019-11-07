var express = require('express');
var mongoose = require('mongoose');

var routes = require('./routes');

var app = express();

mongoose.connect('mongodb+srv://david:corinthians@gcon-89d4d.mongodb.net/gcon?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);



app.listen(3000, function() {
    console.log('Rodando');
});


