import GameState from './GameState';
import Room from './entities/Room';
import Item from './entities/Item';

export default class Loader {
  static loadCampaign(name: string): GameState {
    // test implementation.
    const key = new Item({
      name: 'key',
      aliases: [],
      description: 'a rusted key',
      actions: [
        { aliases: ['eat'], action: () => 'You get a really bad feeling about this.' },
        { aliases: ['pick up'], action: () => 'It stows away nicely.' } // just temporarily.
      ]
    });
    const room = new Room({
      name: 'the room',
      description: 'Dry air, murky gray concrete walls, a flickering light bulb hanging from the ceiling... This place makes you feel uncomfortable.',
      items: [key]
    });
    return new GameState({ currentRoom: room, inventory: [] });
  }
}
