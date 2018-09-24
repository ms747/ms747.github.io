const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("What");
});

const port = process.env.PRODUCTION || 8080;
app.listen(port, () => {
  console.log("Listenting");
});
