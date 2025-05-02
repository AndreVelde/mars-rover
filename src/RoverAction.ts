import { RoverCommand } from './RoverCommand';
import { RoverDirection } from './RoverDirection';

export class RoverAction {
    private readonly directionActions = {
        [RoverCommand.LEFT] : {
            [RoverDirection.EAST]  : RoverDirection.NORTH,
            [RoverDirection.NORTH] : RoverDirection.WEST,
            [RoverDirection.WEST]  : RoverDirection.SOUTH,
            [RoverDirection.SOUTH] : RoverDirection.EAST,
        },
        [RoverCommand.RIGHT] : {
            [RoverDirection.EAST]  : RoverDirection.SOUTH,
            [RoverDirection.SOUTH] : RoverDirection.WEST,
            [RoverDirection.WEST]  : RoverDirection.NORTH,
            [RoverDirection.NORTH] : RoverDirection.EAST,
        },
    };

    retrieveDirectionAction(command: RoverCommand.LEFT | RoverCommand.RIGHT, currentDirection: RoverDirection): RoverDirection {
        return this.directionActions[command][currentDirection];
    }
}
