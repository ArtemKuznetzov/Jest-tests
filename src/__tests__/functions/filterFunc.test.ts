import {
    divideNums, filterArray, multiplyNums, sumNums,
} from '../../functions/someFunctions';
import { basketWithNoQuantity, filterBasketWithQuantityOnly } from '../../__mocks__/basket.mock';

// У describe и it есть методы:
// 1) есть метод only, который позволяет тестировать только его. Несмотря на это их может быть много
// 2) есть метод skip (пропуск теста)
// 2) есть метод todo, который означает, что тест только планируется делать. ВАЖНО! В таком случае тест принимает только
// один параметр - строку. описание того, что тут нужно сделать
// 3) есть эксперементальный метод concurrent, который позволяет запускать тесты в параллельном режиме. Третьим аргументом
// можно пробросить таймаут (как долго эта функция будет выполняться. конкурентный режим???)

// Есть алиасы xip('', () =>) то же самое что и it.skip('', () =>)
// Есть fit. То же самое что и it.only
describe('Func tests', () => {
    it('sumNus', () => {
        expect(sumNums(5, 2)).toBe(7);
    });

    // Параметризованный тест
    describe('divide', () => {
        it.each([{ inputA: 6, inputB: 2, expected: 3 }, { inputA: 10, inputB: 0, expected: Infinity }])('should $inputA divided to $inputB equals $expected', ({ inputA, inputB, expected }) => {
            expect(divideNums(inputA, inputB)).toBe(expected);
        });
    });
});

// Создание фейковое функции. Функционал не важен
const cb = jest.fn();

describe('filter func', () => {
    afterEach(() => {
        jest.clearAllMocks();
        // jest.restoreAllMocks так же сбрасывает все изменения. Если он будет, то
    });

    it('should invoke provided function as many time as the length of an array', () => {
        const arr = [1, 2, 3];
        filterArray(arr, cb);

        expect(cb).toHaveBeenCalledTimes(arr.length);
    });

    it('shout not invoke callback when an array is empty', () => {
        filterArray([], cb);
        // Проверка на то вызывалась функция хотя бы раз или нет
        expect(cb).not.toHaveBeenCalled();
    });

    it('should filter an array using provided predicate', () => {
        const hasQuantity = (order: {qty: number}) => order.qty > 0;
        const filteredArray = filterArray(basketWithNoQuantity, hasQuantity);

        expect(filteredArray).toEqual(filterBasketWithQuantityOnly);
    });
});
