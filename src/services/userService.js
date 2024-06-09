import { request } from "./apiServiceBase";

export async function createUser(userData) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://chat-front-henna.vercel.app',
        },
        body: JSON.stringify(userData),
    };
    try {
        const newItem = await request('user/create', options);
        return newItem;
    } catch (error) {
        throw error;
    }
}