import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

import { Socket,Server } from "socket.io";
@WebSocketGateway(3002,{})
export class ChatGateway {
@WebSocketServer() server:Server


// this is similar to socket.on()
    @SubscribeMessage('connection')
handlergetMessage(client:Socket, mesasge:any){
console.log(client.id)
console.log(mesasge);

client.emit('reply','One to ony reply from server')

this.server.emit('reply','brodcastig.... to all the user ')

}

// now make socket.emmit()  



}


