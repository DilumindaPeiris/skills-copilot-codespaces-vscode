const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	res.end('Hello, world!\n');
});

if (require.main === module) {
	const port = Number(process.env.PORT) || 3000;
	server.listen(port, () => {
		console.log(`Server listening on port ${port}`);
	});
}

module.exports = server;
