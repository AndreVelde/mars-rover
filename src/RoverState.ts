import { RoverDirection } from './RoverDirection';

export class RoverState {
    xx: number = 0;
    yy: number = 0;
    dd: string = RoverDirection.NORTH; // 'char' in C# is effectively a one-character string in TypeScript
}
