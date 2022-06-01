const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Custom endpoints

const healthRoute = require("./routes/health");
const authRouter = require("./routes/authRouter");

app.get("/", (req, res) => {
  console.log("Root endpoint has been hit");
  res.send("Its Alive");
});

// Custom Middleware Functions
app.use("/health", healthRoute);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
