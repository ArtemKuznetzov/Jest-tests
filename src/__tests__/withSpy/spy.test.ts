import { filterArray } from '../../functions/someFunctions';
import { basketWithNoQuantity, filterBasketWithQuantityOnly } from '../../__mocks__/basket.mock';

const cb = jest.fn();
const logSpy = jest.spyOn(console, 'log');

describe('test spy feature', () => {
    it('shout not invoke callback when an array is empty', () => {
        filterArray([], cb);

        expect(cb).not.toHaveBeenCalled();
        expect(logSpy).not.toHaveBeenCalled();
    });

    it('should filter an array using provided predicate', () => {
        const hasQuantity = (order: {qty: number}) => order.qty > 0;
        const filteredArray = filterArray(basketWithNoQuantity, hasQuantity);

        expect(filteredArray).toEqual(filterBasketWithQuantityOnly);
        expect(logSpy).toHaveBeenCalledTimes(basketWithNoQuantity.length);
    });
});
