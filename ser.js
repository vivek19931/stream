
var express=require('express'),
app=express(),
http=require('http'),
socketIO=require('socket.io'),
fs=require('fs'),
path=require('path'),
server,io;
const publicPath = path.join(__dirname, '/../public');

server=http.Server(app);
server.Listen(8080);
io=socketIO(server);
io.on('connection', function(socket){
	
	
	
	
	
	
	
	
	
	
	
var readStream=fs.createReadStream(path.resolve('./woodchunck.jpg'),{
encoding:'binary'
}), chunks=[];
readStream.on('readable', function(){
console.log('Image loading');
});
readStream.on('data', function(chunk){
chunks.push(chunk);
socket.emit('img-chunk',chunk);
});
readStream.on('end', function(){
console.log('image loaded');
})
});



