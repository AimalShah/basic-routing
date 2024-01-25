const http = require('http')
const fs = require('fs')

const server = http.createServer((req , res ) => {

        let path = './pages/'
        res.setHeader('Contetn-Type' , 'text/html');
        switch (req.url){
            case '/' :
                path += 'index.html'
                res.statusCode = 200;
                break;
            case  '/about' :
                path += 'about.html'
                res.statusCode = 200;
                break;
            case '/about-me' :
                res.statusCode = 301;
                res.setHeader('location' , '/about')
                res.end() 
            case '/contact' :
                path += '/contact.html'
                res.statusCode = 200;
                break;
            case '/contact-me' : 
            res.statusCode = 301;
            res.setHeader('location' , '/contact') 
            res.end();   
            default : 
                path += '404.html'
                res.statusCode = 404;   
                break;    
        }

        fs.readFile(path , (err , data) => {
            if(err){
                console.log(err)
            }
            res.end(data);
        })        
})

server.listen(8080 , 'localhost' , () => {
    console.log(' server is running at port 8080')
})