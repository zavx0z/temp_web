import io from 'socket.io-client'
import BASE_URL from "./BASE_URL"

export const sio = io(BASE_URL)
