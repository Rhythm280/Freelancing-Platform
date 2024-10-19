
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const ws = new WebSocket('ws://localhost:3000');

ws.addEventListener('message', (event) => {
    const message = event.data;
    displayMessage(message);
});

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    ws.send(message);
    displayMessage(message, true);
    messageInput.value = '';
});

function displayMessage(message, isSender = false) {
    const messageContainer = document.createElement('div');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;

    messageContainer.classList.add('message-container');

    if (isSender) {
        messageContainer.classList.add('sender-message-container');
        messageElement.classList.add('message-bubble', 'sender-message-bubble');
    } else {
        messageElement.classList.add('message-bubble');
    }

    messageContainer.appendChild(messageElement);
    messagesDiv.appendChild(messageContainer);

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// client server conecton code
// const WebSocket = require('ws');
// const http = require('http');
// const express = require('express');
// const path = require('path');

// const app = express();
// const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

// app.use(express.static(path.join(__dirname, 'public')));

// wss.on('connection', (ws) => {
//     console.log('Client connected');

//     ws.on('message', (message) => {
//         wss.clients.forEach((client) => {
//             if (client !== ws && client.readyState === WebSocket.OPEN) {
//                 client.send(message.toString());
//             }
//         });
//     });

//     ws.on('close', () => {
//         console.log('Client disconnected');
//     });
// });

// server.listen(3000, () => {
//     console.log('Server started on http://localhost:3000');
// });
