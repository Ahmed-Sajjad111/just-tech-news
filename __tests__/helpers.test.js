const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-11-18 14:23:01');

    expect(format_date(date)).toBe('11/18/2021');
});

test('format_plural() returns a pluralized word', () => {
    // const wordArray = ['Tiger', 'Lion']
    // const word = Math.floor(Math.random()* wordArray.length)

    // const amountArray = [1,2]
    // const amount = Math.floor(Math.random()* amountArray.length)

    expect(format_plural(word, amount).toBe(''))
});