const express=require('express');
const http=require('http');
const {Server}=require('socket.io');

const app = express(); // Initialize the Express app
const server = http.createServer(app); // Create an HTTP server
const io = new Server(server); // Attach Socket.IO to the server
app.use(express.static('public'));
io.on('connection',(socket)=>{
    console.log('A user connected');
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
    });
    socket.on('disconnect',()=>{
        console.log('A user disconnected');
    })
});
server.listen(8880,()=>{
    console.log(`Server running `);

})