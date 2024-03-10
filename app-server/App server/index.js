import express from "express";
import "./mongo.js";
import signUpRouter from "./routes/signup.js";
import signInRouter from "./routes/signin.js";
import usersRouter from "./routes/users.js";
import userRouter from "./routes/user.js";
import exploreRouter from "./routes/explore.js";
import countryRouter from "./routes/countries.js";
import cors from "cors";
import morgan from "morgan";
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"), "-",
    tokens["response-time"](req, res), "ms"
  ].join(" ");
}));

//Routes
app.use("/api/_v1/signup", signUpRouter);
app.use("/api/_v1/signin", signInRouter);
app.use("/api/_v1/users", usersRouter);
app.use("/api/_v1/me", userRouter);
app.use("/api/_v1/countries", countryRouter);
app.use("/api/_v1/explore", exploreRouter);

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});