describe('custom matchers', () => {
    it('toBeWithInRange, range is correct', () => {
        expect(100).toBeWithInRange(90, 110)
    })

    it ('toBeWithInRange, range is incorrect', () => {
        expect(120).toBeWithInRange(90, 110)
    })
})