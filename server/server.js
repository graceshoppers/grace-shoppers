const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

//static middleware
app.use(express.static(path.join(__dirname, "public")));

//data logging middleware
app.use("/", express.json());
app.use(express.urlencoded({ extended: true }));

//api middleware
app.use("/api", require("./api"));

//routes
app.get("/", (req, res, next) => res.sendFile("index.html"));
app.get("/app.js", (req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "dist", "main.js"))
);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
