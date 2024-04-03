import {expect} from '@jest/globals'

function toBeWithInRange(actual: number, floor: number, celling: number) {
    if (typeof actual !== 'number' || typeof floor !== 'number' || typeof celling !== 'number') {
        throw new Error('Type number is required')
    }

    const pass = actual >= floor && actual <= celling

    if (pass) {
        return {
            message: () => `expected ${this.utils.printReceived(actual)} not to be within ${this.utils.printExpected(`${floor} - ${celling}`)}`,
            pass: true
        }
    } else {
        return {
            message: () => 'range of numbers is not correct',
            pass: false
        }
    }
}

expect.extend({
    toBeWithInRange
})