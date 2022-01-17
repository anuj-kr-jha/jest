const { sum } = require('./index');

// * toBe -> tests for exact equality
// - the message can be anything
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
});
test('adds 2 + 4 to equal 6', () => {
    expect(sum(2, 4)).toBe(6);
});
test('2 + 5 = 7', () => {
    expect(sum(2, 5)).toBe(7);
});
// - expect() returns an "expectation" object
// - we call matchers on expectation object
