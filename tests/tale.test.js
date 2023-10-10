import { kolobok, newYear } from "./tale.js";

test('kolobok function test', () => {
    expect(kolobok('лиса')).toBe('Меня съели')
});

test('newYear function test', () => {
    expect(newYear('Снегурочка')).toBe('Снегурочка! Снегурочка! Снегурочка! ')
});