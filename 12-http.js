
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('welcome to our homepage')
    }
    else if(req.url === '/about') {
        res.end('welcome to our about page')
    }else {
        res.end(`
    <h1>Oops!</h1>
    <p>Page not found</p>
    <a herf="/">Go to home page</a>
    `)
    }
    

})

server.listen(5000)


