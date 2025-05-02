import { Rover } from '../src/Rover';
import { describe, test, expect } from 'vitest';

describe('MarsRoverShould', () => {
    test.each([
        ['1 2 N', '', '1 2 N'],
        ['1 2 N', 'L', '1 2 W'],
        ['1 2 W', 'L', '1 2 S'],
        ['1 2 S', 'L', '1 2 E'],
        ['1 2 E', 'L', '1 2 N'],
        ['1 2 N', 'R', '1 2 E'],
        ['1 2 E', 'R', '1 2 S'],
        ['1 2 S', 'R', '1 2 W'],
        ['1 2 W', 'R', '1 2 N'],
        ['1 2 N', 'M', '1 3 N'],
        ['1 2 E', 'M', '2 2 E'],
        ['1 2 S', 'M', '1 1 S'],
        ['1 2 W', 'M', '0 2 W'],
        ['1 2 N', 'LMLMLMLMM', '1 3 N'],
        ['3 3 E', 'MMRMMRMRRM', '5 1 E'],
    ])("start at '%s', with instructions '%s' => '%s'", (startingPosition, instructions, expectedOutput) => {
        const rover = new Rover(startingPosition);

        rover.go(instructions);

        expect(rover.pos()).toBe(expectedOutput);
    });

    test('should throw error when invalid starting position due to invalid length', () => {
        expect(() => new Rover('1 2 E E')).toThrowError('Invalid starting position');
    });

    test('should throw error when invalid starting position due to incorrect direction', () => {
        expect(() => new Rover('1 2 Q')).toThrowError('Invalid value: Q');
    });

    test('should throw error when giving invalid instructions', () => {
        const rover = new Rover('1 2 N');

        expect(() => rover.go('LMLMPOLMM')).toThrowError('Invalid value: P');
    });
});
