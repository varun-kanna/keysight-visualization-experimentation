const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// Serve static files with correct MIME types
app.use(
  express.static(path.join(__dirname, "../dist/influx-visualization"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.set("Content-Type", "application/javascript");
      }
      if (path.endsWith(".mjs")) {
        res.set("Content-Type", "application/javascript");
      }
    },
  })
);

// Root route should come before the catch-all route
app.get("/", (req, res) => {
  res.send("Hello World from Node.js server!");
});

// Catch-all route should be last
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../dist/influx-visualization/browser/index.html")
  );
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
