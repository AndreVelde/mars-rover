import { RoverState } from './RoverState';

export class Rover {
    private readonly rs: RoverState;

    constructor(p: string = '') {
        const s = p.split(' ');
        if (s.length >= 3) {
            this.rs = new RoverState(parseInt(s[0], 10), parseInt(s[1], 10), s[2][0]);
        }
    }

    public go(cms: string): void {
        for (let i = 0; i < cms.length; i++) {
            const c = cms[i];
            this.rs.changeDirection(c);

            this.rs.moveForward(c);
        }
    }

    public pos(): string {
        return this.rs.XYD;
    }
}
