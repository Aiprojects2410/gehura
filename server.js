const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req, res) => {
    let reqUrl = decodeURIComponent(req.url.split('?')[0]);
    if (reqUrl === '/' || reqUrl === '/login') reqUrl = '/index.html';
    if (reqUrl === '/admin') reqUrl = '/admin.html';
    if (reqUrl === '/dashboard' || reqUrl === '/dashboard.php') reqUrl = '/dashboard.html';
    if (reqUrl === '/view_results' || reqUrl === '/view_results.php' || reqUrl === '/view results.php') reqUrl = '/view_results.html';
    if (reqUrl === '/grade_card' || reqUrl === '/grade_card.php' || reqUrl === '/grade_card.pdf') reqUrl = '/grade_card.html';
    if (reqUrl === '/fee_receipt' || reqUrl === '/fee_receipt.php' || reqUrl === '/fee_receipt.pdf') reqUrl = '/fee_receipt.html';
    if (reqUrl === '/admit_card' || reqUrl === '/admit_card.php' || reqUrl === '/admit_card.pdf') reqUrl = '/admit_card.html';
    if (reqUrl === '/verify' || reqUrl === '/verify.php') reqUrl = '/verify.html';

    let filePath = path.join(__dirname, reqUrl);
    const ext = path.extname(filePath);
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
    };
    const contentType = mimeTypes[ext] || 'text/html';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT} (Accessible locally and across Wi-Fi at http://172.20.10.8:${PORT})`);
});
