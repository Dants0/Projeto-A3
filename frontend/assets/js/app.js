

axios({
    method: 'post',
    url: 'http://localhost:3000/alugar',
    data: {
        "nome": "test",
        "sobrenome": "test",
        "cpf": "test",
        "rg": "test",
        "alugado": "2002-07-15",
        "entregue": "2002-08-28",
        "status": "Entregue",
        "observacoes":"é ele",
    },
    headers: {
        'Content-Type': 'application/json',
    },
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});