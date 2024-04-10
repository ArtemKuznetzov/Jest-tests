import {renderHook, act} from "@testing-library/react";
import {useCreateUser} from "hooks/useCreateUser";
import {expect} from "@jest/globals";
import {passwordValidateErrors} from "__mocks__/passwordValidateErrors";

describe('useCreateUser', () => {
    it('should return object with correct properties', () => {
        const {result} = renderHook(useCreateUser)

        // current - текущая версия хука
        expect(result.current).toHaveProperty('errorMessage')
        expect(result.current).toHaveProperty('onError')
        expect(result.current).toHaveProperty('onSubmit')
        expect(result.current).toHaveProperty('onSuccess')
        expect(result.current).toHaveProperty('successMessage')

        expect(typeof result.current.errorMessage).toBe('string')
        expect(typeof result.current.onError).toBe('function')
        expect(typeof result.current.onSubmit).toBe('function')
        expect(typeof result.current.onSuccess).toBe('function')
        expect(typeof result.current.successMessage).toBe('string')
    })

    it('should set success message', () => {
        const {result} = renderHook(useCreateUser)
        expect(result.current.successMessage).toBe('')

        // act необходим для тестирования обновления стейта
        act(() => {
            result.current.onSuccess({name: 'John', password: 'JohnTheCoolest!123'})
        })
        expect(result.current.successMessage).toBe(`User John created with password JohnTheCoolest!123`)
    })

    it('should set error message', () => {
        const {result} = renderHook(useCreateUser)
        expect(result.current.errorMessage).toBe('')

        act(() => {
            result.current.onError(new Error('Invalid password'))
        })
        expect(result.current.errorMessage).toBe('Invalid password')
    })

    it('onSubmit with error', async () => {
        const {result} = renderHook(useCreateUser)
        await expect(result.current.onSubmit({password: '123'}))
            .rejects.toThrow(passwordValidateErrors.length)
    })

    it('onSubmit without error', async () => {
        const {result} = renderHook(useCreateUser)
        await expect(result.current.onSubmit({password: 'StrongPassword123!'}))
            .resolves.toBe(undefined)
    })
})