import {WebSocketServer} from "ws";
import jwt, { decode } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
const wss=new WebSocketServer({port:8080});

wss.on("connection",(ws,req)=>{
    const url = req.url;
    if(!url){
        ws.close();
        return;
    }
    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token");    
    if(!token){
        ws.close();
        return;
    }
    const decoded = jwt.verify(token,JWT_SECRET);
    if(!decoded.userId){
        ws.close();
        return;
    }
    console.log("Client connected");
    ws.on("message",(data)=>{
        console.log(data);
    })
})