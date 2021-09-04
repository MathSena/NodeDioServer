const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage.js'); // Importando outro módulo

http.createServer((req, res) =>{
    let url = req.url;

    if(url === '/stats'){
        res.end(JSON.stringify(stats, null, 2));
    }else{
        res.end('<h1>Welcome to the family</h1>')
    }

}).listen(port, ()=> console.log((`Server is running ${host}:${port}`))); // Criando servidor