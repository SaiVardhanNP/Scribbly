import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { JWT_SECRET_KEY } from "@repo/backend-common/config";
import {
  CreateUserSchema,
  SignInSchema,
  CreateRoomSchema,
} from "@repo/common/types";

const app = express();

app.post("/signup", (req, res) => {
  const data = CreateUserSchema.safeParse(req.body);

  if (!data.success) {
    res.json({
      msg: "Incorrect inputs!",
    });
    return;
  }
});

app.post("/signin", (req, res) => {
  const data = SignInSchema.safeParse(req.body);

  if (!data.success) { 
    res.json({
      msg: "Incorrect inputs!",
    });
    return;
  }
  const userId = 123;

  const token = jwt.sign(
    {
      userId: userId,
    },
    JWT_SECRET_KEY
  );

  res.json({ token });
});

app.post("/room", middleware, (req, res) => {
  const data=CreateRoomSchema.safeParse(req.body);

  if(!data.success){
    res.json({
      msg:"Incorrect inputs!"
    })
    return;
  }
});

app.listen(3002, () => {
  console.log("Running on port 3002");
});
