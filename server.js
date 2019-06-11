const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// const server = require('http').Server(app);
// const io = require('socket.io')(server);

// server.listen(80);
// // WARNING: app.listen(80) will NOT work here!

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });


// const getApiAndEmit = async socket => {
//   try {
//     const res = await axios.get(
//       `${PORT}/api/books`
//       ); // Getting the data from DarkSky
//     socket.emit("FromAPI", res.data); // Emitting a new message. It will be consumed by the client
//   } catch (error) {
//     console.error(`Error: ${error.code}`);
//   }
// };

// io.on("connection", socket => {
//   console.log("New client connected"), setInterval(
//     () => getApiAndEmit(socket),
//     10000
//   );
//   socket.on("disconnect", () => console.log("Client disconnected"));
// });


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)

// Define API routes here

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

