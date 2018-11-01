let http = require('http');
let fs = require('fs');

const PORT=8000; 

fs.readFile('./index.html', (err, html) => {

    if (err) throw err;    

    http.createServer((request, response) => {  
        response.writeHeader(200, {'Content-Type': 'text/html'});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});