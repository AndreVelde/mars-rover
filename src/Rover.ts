import { RoverCommand } from './RoverCommand';
import { RoverDirection } from './RoverDirection';
import { RoverState } from './RoverState';
import { isValidEnumAndReturn } from './utils';

export class Rover {
    private readonly rs: RoverState;

    constructor(p: string = '') {
        const s = p.split(' ');
        if (s.length >= 3) {
            const direction = isValidEnumAndReturn(RoverDirection, s[2][0]);
            this.rs = new RoverState(parseInt(s[0], 10), parseInt(s[1], 10), direction);
        }
    }

    public go(cms: string): void {
        const commands = cms.split('').map((command) => isValidEnumAndReturn(RoverCommand, command));

        for (const command of commands) {
            this.rs.changeState(command);
        }
    }

    public pos(): string {
        return this.rs.XYD;
    }
}
