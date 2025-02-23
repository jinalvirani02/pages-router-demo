const axios = require('axios');
export const getById = async (id) =>{
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    data.timestamp = new Date().toISOString();
    return data
}