import { IConfig } from './config'
import * as SocketIOClient from 'socket.io-client';

export const newSocketClient = (config: IConfig) => {
  const socket = SocketIOClient(config.socketEndpoint);
  return socket
}
