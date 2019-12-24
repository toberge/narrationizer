import Room from './entities/Room';
import Item from './entities/Item';

export default class GameState {
  currentRoom: Room;
  inventory: Item[];

  constructor({ currentRoom, inventory = [] }: { currentRoom: Room, inventory: Item[] }) {
    this.currentRoom = currentRoom;
    this.inventory = inventory;
  }
}