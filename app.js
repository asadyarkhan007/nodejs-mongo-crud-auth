const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const protectedRoutes = require("./route/protected.js");
const publicRoutes = require("./route/public.js");
const authMiddleware = require("./middleware/authMiddleware.js")

const config = require("./config/config.js")

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.end("Home Page");
});

const {verifyToken} = authMiddleware;

app.use("/api/v1/", verifyToken, protectedRoutes);
app.use("/auth/", publicRoutes);

app.listen(config.port, () => {
  console.log("started");
});
mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


