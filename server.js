const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path')

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_CONNECTION;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to DB");
});

const searchRouter = require("./routes/search");
const jobRouter = require("./routes/jobs");
const skillsRouter = require("./routes/skills")

app.use("/skills", skillsRouter)
app.use("/search", searchRouter);
app.use("/jobs", jobRouter);
app.use

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname), 'client', 'build', 'index.html');
  })
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});