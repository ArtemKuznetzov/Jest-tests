const arr = [1, 2, 3];
const obj = { a: 1 };
let undefinedValue: undefined;
let nulLValue: null = null;
const trueValue = true;

describe('examples', () => {
    it('is object equal', () => {
        expect(obj).toEqual({ a: 1 });
    });

    it('is array have length', () => {
        expect(arr).toHaveLength(3);
    });

    it('is array have specific value', () => {
        expect(arr).toContain(3);
    });

    it('is array dont have specific value', () => {
        expect(arr).not.toContain(54);
    });

    it('is value undefined', () => {
        expect(undefinedValue).toBeUndefined();
    });

    it('is value null', () => {
        expect(nulLValue).toBeNull();
    });

    it('is value true', () => {
        expect(trueValue).toBeTruthy();
        // expect(trueValue).toBeFalsy()
    });
});
