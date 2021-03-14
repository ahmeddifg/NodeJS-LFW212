const http = require("http");
const {STATUS_CODES} =  http;
const data = require("./data");

const port = process.env.port | 3000;

const server = http.createServer(async(req,res)=>{
    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end(STATUS_CODES[res.statusCode]);
        return;
    }else if (req.url !== '/') {
        res.statusCode = 404;
        res.end(STATUS_CODES[res.statusCode]);
        return;
    }
    console.log("hello from server");
    res.setHeader("content-type", "text/html");
    res.end(await data());
});

server.listen(port);