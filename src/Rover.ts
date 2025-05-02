import { RoverState } from './RoverState';

export class Rover {
    constructor(p: string = '') {
        const s = p.split(' ');
        if (s.length >= 3) {
            this.rs.xx = parseInt(s[0], 10);
            this.rs.yy = parseInt(s[1], 10);
            this.rs.dd = s[2][0];
        }
    }

    public go(cms: string): void {
        for (let i = 0; i < cms.length; i++) {
            const c = cms[i];
            this.rs.changeDirection(c);

            this.rs.moveForward(c);
        }
    }

    public G(z: string): void {
        this.go(z[0]);
    }

    public get XYD(): string {
        return `${this.rs.xx} ${this.rs.yy} ${this.rs.dd}`;
    }

    public pos(): string {
        return this.XYD;
    }

    private rs: RoverState = new RoverState();
}
