const customExpress = require('./config/customExpress');
const connection = require('./controllers/Infrastructure/connection');
const Tables = require('./controllers/Infrastructure/tables');

connection.connect(erro=>{
    if(erro){
        console.log(erro);
    }else{
        console.log("BD Conectado");

        Tables.init(connection);
        const app = customExpress();

        app.listen(3000, () => console.log('servidor rodando na porta 3000'));
    }
})