import {createTodoOnSever} from "../../api/createTodoOnSever";
import {mockTodo} from "../../__mocks__/todo.mock";
import {createTodo} from "../../functions/someFunctions";

global.fetch= jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockTodo)
}))

describe('errors example', () => {
    it('api error', async () => {
        fetch.mockResolvedValueOnce({ ok: false })
        const fnToThrow = () => createTodoOnSever('my todo')
        // когда используется асинхронный код используется rejects
        // просто так тестируемую функцию передать в expect нельзя. придется писать expect(() => createTodoOnServer('my todo'))
        expect(fnToThrow).rejects.toThrow('Cannot create todo')
    })

    it('func error with no valid title', () => {
        const fnToThrow = () => createTodo()

        expect(fnToThrow).toThrow('title is required')
    })

    // done - особый коллбэк
    // example IS NOT VALID
    it.skip('func error with no valid title', (done) => {
        try {
            createTodo('')
            // done говорит о том, что в ф-ии createTodo ошибка, потому что мы передаем в него аргумент
            done('create to do should throw an error')
        }
        catch (error) {
            expect(error).toBe('title is required')
            // done нужен для того, чтобы показать, что данный тесткейс завершен. done без переданного аргумента говорит
            // что тесткейс успешно завершился
            done()
        }
    })
})