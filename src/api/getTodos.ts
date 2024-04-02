import axios from 'axios';

// Incorrect request
// @ts-ignore
export async function getTodos() {
    try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
        // console.log(data);

        return data;
    } catch (err) {
        console.log(err);

        return [];
    }
}
