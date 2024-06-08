import { io } from 'socket.io-client';

let socket;

export const initiateSocket = (url) => {
  socket = io(url);
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};

export const sendMessage = (message) => {
  if (socket) socket.emit('message', message);
};

export const subscribeToResponses = (callback) => {
  if (!socket) return;
  socket.on('response', (data) => {
    callback(data);
  });
};