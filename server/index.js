const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require("./routes/users")
const authRouter = require("./routes/auth")
const postRouter = require("./routes/post")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
  console.log("Connected to MongoDB");
});
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRouter)
app.use("/api/auth",authRouter)
app.use("/api/posts",postRouter)

app.use("/", (req, res, next) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("backend server is running on 3000");
});
