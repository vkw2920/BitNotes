const http = require('http');

const PORT = process.env.PORT || 5147;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json; charset=utf8'
    });
    var url = req.url;
    var url_path = url.split('?')[0];
    if (req.method == "GET") {
        if (url.split("?").length < 2) {
            res.end("No data transfered");
            return;
        }
        var url_data = url.split('?')[1].split('&');
    } else {
        //
    }
    // res.end(req.url + " (" + req.method + ")");
});

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
