const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

const server = require('http').Server(app);
const io = require('socket.io')(server);

// // WARNING: app.listen(80) will NOT work here!

io.on("add book", (bookname) => {
  socket.bookname = bookname
  socket.broadcast.emit("book added", {bookname: socket.bookname})
})



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

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

