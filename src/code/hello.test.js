import { hello } from "./hello";
test('', () => {
    expect(hello('joey')).toBe('hello joey')
})