import axios from 'axios';
import { getTodos } from 'api/getTodos';

const axiosSpy = jest.spyOn(axios, 'get');
const errorSpy = jest.spyOn(console, 'error');

// DO NOT WORK!!! Only for examples
describe('getTodos', () => {
    it.skip('should return an empty array in case of error and print error to console', async () => {
        const errMessage = 'Network error';

        // axiosSpy.mockRejectedValue()
        // Нужен once, т.к. будут проблемы  других тесткейсах.
        axiosSpy.mockImplementationOnce(() => Promise.reject(errMessage));
        const result = await getTodos();
        expect(errorSpy).toHaveBeenCalledWith(errMessage);
        expect(result).toEqual([]);
    });

    it('should return 200 todos using axios get', async () => {
        const result = await getTodos();

        expect(axiosSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos');
        expect(result).toHaveLength(200);
    });
});
