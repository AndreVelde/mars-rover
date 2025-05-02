import { RoverCommand } from './RoverCommand';
import { RoverDirection } from './RoverDirection';

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
        [RoverDirection.EAST]: (updateState: (mx: number, my: number) => void) => updateState(1, 0),
        [RoverDirection.SOUTH]: (updateState: (mx: number, my: number) => void) => updateState(0, -1),
        [RoverDirection.WEST]: (updateState: (mx: number, my: number) => void) => updateState(-1, 0),
        [RoverDirection.NORTH]: (updateState: (mx: number, my: number) => void) => updateState(0, 1),
    };

    retrieveDirectionAction(command: RoverCommand.LEFT | RoverCommand.RIGHT, currentDirection: RoverDirection): RoverDirection {
        return this.directionActions[command][currentDirection];
    }

    retrieveMoveAction(currentDirection: RoverDirection): (updateState: (mx: number, my: number) => void) => void {
        return this.moveActions[currentDirection];
    }
}
