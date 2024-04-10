import { v4 } from 'uuid';
import {passwordValidateErrors} from "../__mocks__/passwordValidateErrors";

export const sumNums = (a: number, b: number) => a + b;

export const divideNums = (a: number, b: number) => a / b;

export const multiplyNums = (a: number, b: number) => a * b;

export const getLength = <T, >(a: Array<T>) => a.length;

export const filterArray = <T, F extends Function>(array: Array<T>, callback: F) => {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (callback(array[i])) newArray.push(array[i]);
    }

    return newArray;
};

export const createTodo = (title: string) => {
    if (!title) {
        throw new Error('title is required')
    }
    return {
        title,
        completed: false,
        id: v4(),
    }};

// Раньше функция возвращала только true или false. Допустим пришли изменения от заказчика, функционал изменился.
export const validatePassword = (password: string) => {
    if (password.length < 8) {
        return {
            success: false,
            error: passwordValidateErrors.length
        }
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        return {
            success: false,
            error: passwordValidateErrors.case
        }
    }

    if (!/[0-9]/.test(password)) {
        {
            return {
                success: false,
                error: passwordValidateErrors.number
            }
        }
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        return {
            success: false,
            error: passwordValidateErrors.special
        }
    }

    return { success: true, error: null }
}

export const createUser = ({
    firstName, lastName, phone = '', email = ''
}: {firstName: string, lastName: string, phone?: string, email?: string}) => ({
  type: 'USER',
  firstName,
  lastName,
  password: 'password',
  phone,
  email
})

export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

