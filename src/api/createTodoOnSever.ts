import { createTodo } from '../functions/someFunctions';

export async function createTodoOnSever(title: string) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createTodo(title)),
    });

    if (!response.ok) throw new Error('Cannot create todo');

    return response.json();
}
