 import { WebSocketServer } from "ws";
 import jwt, { JwtPayload } from 'jsonwebtoken';
 import { JWT_SECRET_KEY } from "@repo/backend-common/config";

 const ws=new WebSocketServer({port:3001});


ws.on('connection',(ws,request)=>{

    const url=request.url;
    if(!url)return;

    const queryParams=new URLSearchParams(url.split("?")[1]);

    const token=queryParams.get("token") || "";
    const decoded=jwt.verify(token,JWT_SECRET_KEY);

    if(!decoded || !(decoded as JwtPayload)?.user){
        ws.close(); 
        return;
    }

    ws.on('message',(data)=>{
        console.log("pong");
    }) 
})