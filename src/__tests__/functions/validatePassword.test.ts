import {validatePassword} from "../../functions/someFunctions";
import {passwordValidateErrors} from "../../__mocks__/passwordValidateErrors";

// Это рабочий тест хелпера validatePassword. Однако представим, что требования поменялись
// и тепер валидация выглядит иначе (иначе - код ниже закомментированного)
// describe('validatePassword', () => {
//     // есть вариант с it.each и набросать десяток вариантов
//     it('should return true after valid password', () => {
//         const validPassword = 'MyPassword123!'
//
//         expect(validatePassword(validPassword)).toBe(true)
//     });
//
//     it('should validate with 8 minimum characters', () => {
//         const invalidPassword = 'My123'
//
//         expect(validatePassword(invalidPassword)).toBe(false)
//
//     })
//
//     it('should validate with mixed case', () => {
//         const invalidPassword = 'mypassword123'
//         const invalidPassword2 = 'MYPASSWORD123'
//
//         expect(validatePassword(invalidPassword)).toBe(false)
//         expect(validatePassword(invalidPassword2)).toBe(false)
//
//     })
//
//     it('should validate with digits and characters', () => {
//         const invalidPassword = 'MyPassword!@'
//         const invalidPassword2 = 'MyPassword$#@!'
//
//         expect(validatePassword(invalidPassword)).toBe(false)
//         expect(validatePassword(invalidPassword2)).toBe(false)
//     })
//
//     it('should validate with special character', () => {
//         const invalidPassword = 'MyPassword123'
//
//         expect(validatePassword(invalidPassword)).toBe(false)
//     })
//
//     it.todo('should validate with dummy passwords')
// })

describe('validatePassword', () => {
    // есть вариант с it.each и набросать десяток вариантов
    it('should return { success: true, error: null } after valid password', () => {
        const validPassword = 'MyPassword123!'

        expect(validatePassword(validPassword)).toEqual({ success: true, error: null })
    });

    it('should validate with 8 minimum characters and return error msg', () => {
        const invalidPassword = 'My123'
        const expectedError = {
            success: false,
            error: passwordValidateErrors.length
        }

        expect(validatePassword(invalidPassword)).toEqual(expectedError)

    })

    it('should validate with mixed case and return error msg', () => {
        const invalidPassword = 'mypassword123'
        const invalidPassword2 = 'MYPASSWORD123'
        const expectedError = {
            success: false,
            error: passwordValidateErrors.case
        }

        expect(validatePassword(invalidPassword)).toEqual(expectedError)
        expect(validatePassword(invalidPassword2)).toEqual(expectedError)

    })

    it('should validate with digits and characters', () => {
        const invalidPassword = 'MyPassword!@'
        const invalidPassword2 = 'MyPassword$#@!'
        const expectedError = {
            success: false,
            error: passwordValidateErrors.number
        }

        expect(validatePassword(invalidPassword)).toEqual(expectedError)
        expect(validatePassword(invalidPassword2)).toEqual(expectedError)
    })

    it('should validate with special character', () => {
        const invalidPassword = 'MyPassword123'
        const expectedError = {
            success: false,
            error: passwordValidateErrors.special
        }

        expect(validatePassword(invalidPassword)).toEqual(expectedError)
    })

    it.todo('should validate with dummy passwords')
})