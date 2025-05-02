import { RoverCommand } from './RoverCommand';
import { RoverDirection } from './RoverDirection';

export class RoverState {
    xx: number = 0;
    yy: number = 0;
    dd: string = RoverDirection.NORTH; // 'char' in C# is effectively a one-character string in TypeScript

    constructor(xx: number, yy: number, dd: string) {
        this.xx = xx;
        this.yy = yy;
        this.dd = dd;
    }

    public changeDirection(command: string) {
        if (command === RoverCommand.LEFT) {
            if (this.dd === RoverDirection.EAST) {
                this.dd = RoverDirection.NORTH;
            } else if (this.dd === RoverDirection.NORTH) {
                this.dd = RoverDirection.WEST;
            } else if (this.dd === RoverDirection.WEST) {
                this.dd = RoverDirection.SOUTH;
            } else if (this.dd === RoverDirection.SOUTH) {
                this.dd = RoverDirection.EAST;
            }
        }

        if (command === RoverCommand.RIGHT) {
            if (this.dd === RoverDirection.EAST) {
                this.dd = RoverDirection.SOUTH;
            } else if (this.dd === RoverDirection.SOUTH) {
                this.dd = RoverDirection.WEST;
            } else if (this.dd === RoverDirection.WEST) {
                this.dd = RoverDirection.NORTH;
            } else if (this.dd === RoverDirection.NORTH) {
                this.dd = RoverDirection.EAST;
            }
        }
    }

    public moveForward(command: string) {
        if (command === RoverCommand.MOVE) {
            if (this.dd === RoverDirection.EAST) {
                this.xx++;
            }
            if (this.dd === RoverDirection.SOUTH) {
                this.yy--;
            }
            if (this.dd === RoverDirection.WEST) {
                this.xx--;
            }
            if (this.dd === RoverDirection.NORTH) {
                this.yy++;
            }
        }
    }

    public get XYD(): string {
        return `${this.xx} ${this.yy} ${this.dd}`;
    }
}
