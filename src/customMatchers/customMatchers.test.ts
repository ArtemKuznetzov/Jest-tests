describe('customMatchers', () => {
    it('toBeWithInRange, range is correct', () => {
        expect(100).toBeWithInRange(90, 110)
    })

    it ('toBeWithInRange, range is incorrect', () => {
        expect(120).not.toBeWithInRange(90, 110)
    })
})