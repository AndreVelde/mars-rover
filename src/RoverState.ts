import { RoverAction } from './RoverAction';
import { RoverCommand } from './RoverCommand';
import { RoverDirection } from './RoverDirection';

export class RoverState {
    private readonly roverAction = new RoverAction();
    private xx: number = 0;
    private yy: number = 0;
    private dd: RoverDirection = RoverDirection.NORTH;

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
            this.roverAction.retrieveMoveAction(this.dd)((mx, my) => {
                this.xx += mx;
                this.yy += my;
            });
        }
    }

    public get XYD(): string {
        return `${this.xx} ${this.yy} ${this.dd}`;
    }
}
