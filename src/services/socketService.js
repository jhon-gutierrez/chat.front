import { io } from 'socket.io-client';

let socket;

export const connectSocket = () => {
  if (!socket) {
    socket = io(process.env.REACT_APP_WS_URL);
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const onEvent = (eventName, callback) => {
  if (socket) {
    socket.on(eventName, callback);
  }
};

export const emitEvent = (eventName, data, callback) => {
  if (socket) {
    socket.emit(eventName, data, callback);
  }
};