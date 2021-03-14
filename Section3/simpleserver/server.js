const http = require("http");
const port = process.env.port | 3000;
const url = require("url");
const { STATUS_CODES } = http;

const hello = `
<html><body>
<h2>hello world</h2>
</body></html>
`;

const server = http.createServer((req, res) => {

    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end(STATUS_CODES[res.statusCode]);
        return;
    }
    else if (req.url !== '/') {
        res.statusCode = 404;
        res.end(STATUS_CODES[res.statusCode]);
        return;
    }
    console.log("hello from server");
    res.setHeader("content-type", "text/html");
    res.end(hello);;

});

server.listen(port);