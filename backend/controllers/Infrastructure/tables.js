class Tables{
    init(connection){
        this.connection = connection;

        this.createRental();
    }

    createRental(){
        const sql = 'CREATE TABLE IF NOT EXISTS Aluguel (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, sobrenome varchar(20), cpf varchar(20) NOT NULL, rg varchar(20) NOT NULL, alugado date not null, entregue date not null, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
    
            this.connection.query(sql, erro =>{
                if(erro){
                    console.log(erro)
                }else{
                    console.log("Tabela Aluguel Criada Com Sucesso")
                }
            })
    }
}

module.exports = new Tables

