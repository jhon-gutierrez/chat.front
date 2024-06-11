import { request } from './apiServiceBase';

export async function sendMessage(message, senderId ) {
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, senderId }),
    };

    try {
        const response = await request('message/create', options);
        return response;
    } catch (error) {
        throw error;
    }
    
}
