import { RoverCommand } from './RoverCommand';
import { RoverDirection } from './RoverDirection';
import { RoverState } from './RoverState';

export class RoverAction {
    private readonly directionActions = {
        [RoverCommand.LEFT]: {
            [RoverDirection.EAST]: RoverDirection.NORTH,
            [RoverDirection.NORTH]: RoverDirection.WEST,
            [RoverDirection.WEST]: RoverDirection.SOUTH,
            [RoverDirection.SOUTH]: RoverDirection.EAST,
        },
        [RoverCommand.RIGHT]: {
            [RoverDirection.EAST]: RoverDirection.SOUTH,
            [RoverDirection.SOUTH]: RoverDirection.WEST,
            [RoverDirection.WEST]: RoverDirection.NORTH,
            [RoverDirection.NORTH]: RoverDirection.EAST,
        },
    };

    private readonly moveActions = {
        [RoverDirection.EAST]: (roverState: RoverState) => roverState.xx++,
        [RoverDirection.SOUTH]: (roverState: RoverState) => roverState.yy--,
        [RoverDirection.WEST]: (roverState: RoverState) => roverState.xx--,
        [RoverDirection.NORTH]: (roverState: RoverState) => roverState.yy++,
    };

    retrieveDirectionAction(command: RoverCommand.LEFT | RoverCommand.RIGHT, currentDirection: RoverDirection): RoverDirection {
        return this.directionActions[command][currentDirection];
    }

    retrieveMoveAction(currentDirection: RoverDirection): (roverState: RoverState) => void {
        return this.moveActions[currentDirection];
    }
}
