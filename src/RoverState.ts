import { RoverCommand } from './RoverCommand';
import { RoverDirection } from './RoverDirection';

export class RoverState {
    xx: number = 0;
    yy: number = 0;
    dd: string = RoverDirection.NORTH; // 'char' in C# is effectively a one-character string in TypeScript

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
}
