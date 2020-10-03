const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

//mongoDB connection

mongoose.connect('mongodb://127.0.0.1/Phone',{ useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Mongodb Database connected");
}).catch((error) => {
    console.log(error)
});

//Server app connection

const app = express();

//morgan middleware
 
app.use(morgan("dev"));

//bodyParser

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Routing Links

const product = require("./routes/product.js");

app.use("/", product);

//listening Port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`nodejs started at port ${port}`);
});