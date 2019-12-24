import {
  Direction,
  DirectionalAction,
  ObjectAction,
  ParsedPhrase,
  SingularAction,
  SomeObject
} from './actions';
import GameState from './GameState';

export const perform = (stack: ParsedPhrase[], gameState: GameState): string[] => {
  if (stack.length === 1) {
    const act = stack[0];

    // does require the action to be possible *right now*
    // (don't sleep with monster in room)
    if (act instanceof SingularAction) return [act.perform()];
    else return ['wtf'];
  } else if (stack.length === 2) {
    const action = stack[0],
      argument = stack[1];

    if (action instanceof ObjectAction && argument instanceof SomeObject) {
      // requires checking if there is such an object in the current room or inventory
      const item = gameState.currentRoom.find(argument.word);
      let message: string = `There is no ${argument.word} around you.`;
      if (item) message = item.perform(action.word);
      return [action.perform(argument), message];
    } else if (action instanceof DirectionalAction && argument instanceof Direction) {
      // requires there being a passage in that direction
      return [action.perform(argument)];
    } else {
      return ['no viable 2-phrase action'];
    }
  } else {
    return ['not an accepted command stack size'];
  }
};