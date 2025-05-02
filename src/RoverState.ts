import { RoverAction } from './RoverAction';
import { RoverCommand } from './RoverCommand';
import { RoverDirection } from './RoverDirection';

export class RoverState {
    private readonly roverAction = new RoverAction();
    xx: number = 0;
    yy: number = 0;
    dd: RoverDirection = RoverDirection.NORTH; // 'char' in C# is effectively a one-character string in TypeScript

    constructor(xx: number, yy: number, dd: RoverDirection) {
        this.xx = xx;
        this.yy = yy;
        this.dd = dd;
    }

    public changeState(command: RoverCommand) {
        if (command === RoverCommand.RIGHT || command === RoverCommand.LEFT) {
            this.dd = this.roverAction.retrieveDirectionAction(command, this.dd);
        }

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
