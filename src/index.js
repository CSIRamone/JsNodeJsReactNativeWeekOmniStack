const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://cidinei:csihox@cluster0-ucoh8.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex :  true ,
    useNewUrlParser: true,
    useUnifiedTopology: true,
} );

app.use(cors());
app.use(express.json());
app.use(routes);

//METODOS HTTP: GET, POST, PUT, DELETE

//TIPOS DE PARAMETROS:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção )
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB(Nao relacional)



app.listen(3333);

