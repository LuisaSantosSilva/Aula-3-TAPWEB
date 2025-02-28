const Sequelize = require('sequelize')
const sequelize = new Sequelize('exemplo','root','',{ //"exemplo" nome do banco
    host: 'localhost',
    dialect: 'mysql' //qual o banco
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log('Falha ao se conectar')
})

const Agendamentos = sequelize.define('agendamentos',{
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.STRING
    },
    data: {
        type: Sequelize.STRING
    },
    hora: {
        type: Sequelize.STRING
    }
})

//Criação da entidade no banco
//Agendamentos.sync({force: true})


//Fazendo inserção nos campos
Agendamentos.create({
    nome: 'Luisa Santos',
    email: 'luisasantos@gmail.com',
    telefone: '91234-1234',
    cpf: '56789012344',
    data:'2025-02-27',
    hora: '20:41'
})