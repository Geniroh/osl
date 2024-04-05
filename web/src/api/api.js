import axios from "axios";

export const api = axios.create(
    {
        baseURL: 'https://spaces.orchidsprings.group/api',
        headers: { 
            'Content-Type': 'application/json',
        }
    }
)