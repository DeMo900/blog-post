const express = require("express");
const app = express();
const path = require("path");

// set ejs as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// serve static files (CSS, JS, images)
app.use("/assets", express.static("assets"));

// home route
app.get("/", (req, res) => {
  res.render("tailwind_test");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
