import express from "express";
import { middleware } from "./middleware";
import { CreateUserSchema, SignInSchema, CreateRoomSchema } from "@repo/common/types";
const app = express(); 
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.post("/signup", (req, res) => {
    const data = CreateUserSchema.safeParse(req.body)
    if(!data.success){
        res.json({
            success:false,
            message:"Invalid request body",
            error:data.error
        })
        return;
    }
    res.json({ message: "Signup route" });
});

app.post("/signin", (req, res) => {
    const data = SignInSchema.safeParse(req.body)
    if(!data.success){
        res.json({
            success:false,
            message:"Invalid request body",
            error:data.error
        })
        return;
    }
    res.json({ message: "Signin route" });
});

app.post("/room", middleware, (req, res) => {
    const data = CreateRoomSchema.safeParse(req.body)
    if(!data.success){
        res.json({
            success:false,
            message:"Invalid request body",
            error:data.error
        })  
        return;
    }
    res.json({ message: "Protected Room Route" });
});
