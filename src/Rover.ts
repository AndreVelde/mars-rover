import { RoverCommand } from './RoverCommand';
import { RoverDirection } from './RoverDirection';
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

            if (c === RoverCommand.MOVE) {
                if (this.rs.dd === RoverDirection.EAST) {
                    this.rs.xx++;
                }
                if (this.rs.dd === RoverDirection.SOUTH) {
                    this.rs.yy--;
                }
                if (this.rs.dd === RoverDirection.WEST) {
                    this.rs.xx--;
                }
                if (this.rs.dd === RoverDirection.NORTH) {
                    this.rs.yy++;
                }
            }
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
