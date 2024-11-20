const express = require("express");
const app = express();
const indexRouter = require("./routers/router");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

const PORT = process.env.PORT || 4000;
app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
