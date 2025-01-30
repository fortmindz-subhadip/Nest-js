import {
  WebSocketGateway,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*', // Allow all origins (configure as needed)
  },
})
export class TardingGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  afterInit(server: Server) {
    console.log('Socket.io initialized');
  }

  handleConnection(client: Socket) {
    client.emit('connection', 'Successfully connected to the trading server');

    const roomName = 'trading';

    client.join(roomName);
    client.to('trading').emit('new-user', client.id);
    client.to('trading').emit('tradig-data', {
      message: 'Welcome to the trading room',
      user: client.id,
    });
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    client.join('trading');
  }

  @SubscribeMessage('start-trading')
  async handleStartTrading(client: Socket) {
    // const cars = await this.carsService.getCars();
    // const tradingCars = cars.map((car) => ({ ...car, isTrading: true }));
    // this.server.emit('trading-data', tradingCars);
  }

  // @SubscribeMessage('trade')
  // // async handleTrade(client: Socket, payload: { carId: string; price: number }) {
  // //   await this.carsService.updateCarStatus(payload.carId, true);
  // //   this.server.emit('trade-success', payload);
  // // }
}
