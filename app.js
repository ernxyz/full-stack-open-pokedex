/* eslint-disable no-constant-condition */
const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app
  .get("/version", (req, res) => {
    res.send("1");
  })
  .get("/health", (req, res) => {

    // if (true) throw("error...");
    res.send("ok");
  })
  .get("/info", (req, res) => {
    res.send("xyz");
  });

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
