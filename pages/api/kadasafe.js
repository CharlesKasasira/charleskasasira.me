// import { Server } from 'Socket.IO'
const app = require("express")();
const http = require("http").createServer(app);
const PORT = process.env.PORT || 8080;

export default function handler(req, res) {
  // res.status(200).json({ name: "John Doe" });

  const socketio = require("socket.io")(http);
  console.log("hello");

  socketio.use((socket, next) => {
    const user_id = socket.handshake.auth.user_id;
    socket.join(user_id);

    if (!user_id) {
      console.log("invalid user");
      return next(new Error("Invalid user"));
    }
    socket.user_id = user_id;
    // console.log(socket.user_id);
    next();
  });

  socketio.on("connection", (userSocket) => {
    // console.log("something please ", userSocket.id);

    const users = [];

    for (let [id, user_id] of socketio.of("/").sockets) {
      users.push(user_id.user_id);
    }

    // console.log(users);

    socketio.of("/").emit("online_users", users);

    userSocket.on("check_online", (data) => {
      userSocket.to(data).emit("online_users", users);
    });

    userSocket.on("send_message", (data) => {
      console.log(data);
      userSocket.to(data.receiver_id).emit("receive_message", data);
    });

    userSocket.on("send_typing_status", (data) => {
      console.log(data);
      userSocket.to(data.receiver_id).emit("receive_typing_status", data);
    });

    userSocket.on("logout", (data) => {
      const index = users.indexOf(data);
      if (index > -1) users.splice(index, 1);
      io.of("/").in(data).local.disconnectSockets();
      userSocket.broadcast.emit("user_disconnected", users);
      console.log(`${data} is now offline`);
      console.log("current online users: ", users);
    });
  });

  res.send("Node Server is running. Yay!!");
}
