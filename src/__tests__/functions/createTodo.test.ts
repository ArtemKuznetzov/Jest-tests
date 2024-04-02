import { createTodo } from '../../functions/someFunctions';

// хоть jest.fn это ф-ия пустышка, мы можем в нее передать определенную реализацию
const mockedV4 = jest.fn(() => 'abcd');

jest.mock('uuid', () => ({
    // v4: () => 'abcd'
    // имитируется весь актуальный функционал библиотеки, кроме v4, которую задали самостоятельно
    // ...jest.requireActual('uuid')
    v4: () => mockedV4(),
}));

describe('createTodo', () => {
    it('should return todo object with provided title, completed and id', () => {
        const title = 'learn jest';
        const expectedResult = {
            title, completed: false, id: 'abcd',
        };

        const result = createTodo(title);

        expect(result).toEqual(expectedResult);
    });

    it.todo('should create todo on server');

    it.todo('should throw and error if fetch response is not ok');
});
