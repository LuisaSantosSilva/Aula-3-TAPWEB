//mesmo material que a aula 3

const express = require('express')
const app = express()

app.get('/', function(re,res){
    res.send('Hello World')
})

app.listen(8081, function(){
    console.log('Server is runing on port 8081')
})