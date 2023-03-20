const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
console.log(process.env.DATABASE);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));

const server = http.createServer(app);

server.listen(port);
