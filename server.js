const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        fs.readFile("index.html", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<html><body>Error reading file</body></html>");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.end(`<html><body>There is some issue</body></html>`);
    }
});

server.listen(8080);
