const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8000 });
console.log('WebSocket server is running on ws://localhost:8000');

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Server received: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.send('Welcome to the server');
});
