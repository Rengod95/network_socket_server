const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const router = require("./routes/router");
const { connect } = require("mongoose");
const app = express();

const MONGO_URL =
  "mongodb+srv://aorwn987:leein123@backend-roadmap.xiw82f1.mongodb.net/?retryWrites=true&w=majority";

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // replace with your client app's url
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected: ", socket.id);

  
  socket.on("chat", (message) => {
    console.log("Received chat message: ", message);

  
    socket.broadcast.emit("chat", message);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected: ", socket.id);

    const userExitMessage = {
      name: `${socket.id}님`,
      content: "퇴장하셨습니다.",
    };

    
    //socket.broadcast.emit("chat", userExitMessage);
  });
})
server.listen(8000, () => {
  console.log("listening on *:8000");
});

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));
