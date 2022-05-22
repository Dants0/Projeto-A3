

axios({
    method: 'post',
    url: 'http://localhost:3000/alugar',
    data: {
        "nome": "Testando",
        "sobrenome": "Walker",
        "cpf": "000000000220",
        "rg": "000330000",
        "alugado": "2022/05/22",
        "status": "Entregue",
        "observacoes":"é ele"
    },
    headers: {
        'Content-Type': 'application/json',
    },
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});