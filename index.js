const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const path = require("path");

const db = process.env.MONGO_URI;

// Connection
mongoose.Promise = global.Promise;
mongoose
    .connect(db, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(res => console.log("connecté"))
    .catch(err => console.log(err))

// Parse application data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// const routes = require("./api/routes");
// app.use("/post", routes);
// app.use("/category", routes);
const postRoutes = require("./api/routes/PostRoutes");
const categoryRoutes = require("./api/routes/CategoryRoutes");

postRoutes(app);
categoryRoutes(app);

// Server
app.listen(port);
console.debug(`Server is listening on port ${port}`);
