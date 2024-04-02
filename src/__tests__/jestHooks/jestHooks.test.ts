import { getLength } from '../../functions/someFunctions';

describe('test', () => {
    it.todo('test')
})

// describe.skip('jest hooks', () => {
//     beforeAll(() => {
//         console.log('beforeAll');
//     });
//     beforeEach(() => {
//         console.log('beforeEach');
//     });
//     afterAll(() => {
//         console.log('afterAll');
//         jest.clearAllMocks();
        // jest.restoreAllMocks так же сбрасывает все изменения. Если будет, например,
        // mockRejected без once, то данные очищаться не будут даже с clearAllMocks.
        // с restoreAllMocks будут
//     });
//     afterEach(() => {
//         console.log('afterEach');
//     });
// });
