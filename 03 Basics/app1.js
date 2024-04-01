const http = require("http");

//gives data about http or req (read data from request)
const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);

    //set header using send response method
    res.setHeader('Content-Type', 'text/html');
    //sending html data because we use content type html
    //here we send response in  Response Headers
    res.write('<html>');
    res.write('<h1> this is h1 </h1>');
    res.write('</html>');
    res.end(); // after this line we must not send data using write
});

server.listen(3000,()=>console.log("server is on"));