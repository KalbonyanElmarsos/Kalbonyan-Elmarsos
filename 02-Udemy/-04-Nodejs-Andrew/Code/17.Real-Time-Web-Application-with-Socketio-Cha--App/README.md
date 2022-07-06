# 😎Section Notes

1. socket.emit():  
   --> emit only for specific client connection

2. io.emit():  
   --> emit for all clients in the application(for all rooms) including the sender

3. socket.broadcast.emit():  
   --> emit for all clients in the application(for all rooms) except the sender

4. socket.broadcast.to('room1').emit():  
   --> emit for all clients in the application(only for room1) except the sender

5. io.to(room1).emit():  
   --> emit for all clients in the application(only for room1) including the sender
