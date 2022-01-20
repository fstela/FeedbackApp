const express = require("express");
const cors = require("cors");
const passport = require("passport");
const auth = require("./service/auth");
const config = require("./config.js");
const courseRouter = require("./routes/courseRouter");
const userRouter = require("./routes/userRouter");
const loginRouter = require("./routes/authRouter");
const app = express();

if (config.app.enableCors) {
  app.use(cors({ origin: config.app.allowCorsForUrl }));
}

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
passport.use(auth.strategy);

// Public Routes
app.use("/auth", loginRouter);
app.get("/", (_, res) => {
  res.json({ message: "hello from api" });
});

// Private Routes, only for logged users can access them
app.use(
  "/api/courses",
  passport.authenticate("jwt", { session: false }),
  courseRouter
);
app.use(
  "/api/users",
  passport.authenticate("jwt", { session: false }),
  userRouter
);

app.listen(config.app.port, () => {
  console.log(`Server is listening on port ${config.app.port} ...`);
});
