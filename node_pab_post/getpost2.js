const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    if (req.method === "GET") {
        // Handle error if unable to read the file
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream("./public/form.html", { encoding: 'utf8' }).pipe(res);
    } else if (req.method === "POST") {            
        console.log("Calling via POST Method");
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
