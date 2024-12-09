import at from './at.js'

test('Returning integer values from object of integers',() => {
    const ints = {1: [{ 2: { 3: 5 } }, 8] }

    expect(at(ints, ['1[0].2.3', '1[1]'])).toEqual([5, 8]);
});

test('Returning string values from object of strings',() => {
    const strings = {first: [{ second: { third: 'testvalueone' } }, 'testvaluetwo'] }

    expect(at(strings, ['first[0].second.third', 'first[1]'])).toEqual(['testvalueone', 'testvaluetwo']);
});


