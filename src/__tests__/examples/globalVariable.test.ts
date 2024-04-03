import * as process from "process";

describe('globalVariable', () => {
    it('check global variable', () => {
        // переменная из setupTest
        expect(global.myGlobalVariable).toBe('Hello world')
        // переменная из jestConfig
        expect(global.__ISDEV__).toBeTruthy()
        expect(process.env.SECRET_TOKEN).toBeTruthy()
    })
})