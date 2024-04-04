// import { mockTodo } from '../../__mocks__/todo.mock';
// import { createTodoOnSever } from '../../api/createTodoOnSever';
// import { convert } from '../../api/fetchConvert';

// const mockedV4 = jest.fn(() => 'abcd')
//
// jest.mock('uuid', () => ({
//     v4: () => mockedV4()
// }))

// Для глобальной переменной нельзя использовать jest.mock
// global.fetch= jest.fn(() => Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve(mockTodo)
// }))


// describe('create to do on server', () => {
//     it('create to do with fetch', async () => {
//         const result = await createTodoOnSever('my todo')
//         expect(result).toEqual(mockTodo)
//         expect(fetch).toHaveBeenCalledTimes(1)
//     })

    // it('create to do with fetch, error', async () => {
    //     // Так делать нежелательно. Только для демонстрации
    //     fetch.mockRejectedValueOnce('Network error')
    //
    //     await expect(createTodoOnSever('my todo')).rejects.toMatch('Network error')
    // })
// })

describe('empty fetch test', () => {
    it('empty it', () => {
        expect(10).toBe(10)
    })
})
