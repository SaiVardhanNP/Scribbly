import express from "express";
import jwt from 'jsonwebtoken';
import { middleware } from "./middleware";
import { JWT_SECRET_KEY } from "./config";

const app = express();

app.post("/signup", (req, res) => {});

app.post("/signin", (req, res) => {
    const userId=123;

    const token=jwt.sign({
        userId:userId
    },JWT_SECRET_KEY);

    res.json({token});
});

app.post("/room",middleware, (req, res) => {

});

app.listen(3002, () => {
  console.log("Running on port 3002");
});
