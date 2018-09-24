const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const contactmeRoute = require('./contactme');
require("dotenv").config();

const MONGO_URL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_COLLECTION}`;

mongoose.connect(MONGO_URL, {
	useNewUrlParser: true
}, (err) => {
	if (!err) {
		console.log("Connected To the Server");
	}
});
const app = express();

app.use(bodyParser.json({extended:true}))
app.use(cors());
app.use(morgan("combined"));
app.use('/contactme',contactmeRoute);
app.get("/", (req, res) => {
	res.send("What");
});

const port = process.env.PRODUCTION || 8080;
app.listen(port, () => {
	console.log("Listenting");
});