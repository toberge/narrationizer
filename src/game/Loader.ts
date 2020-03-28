import GameState from './GameState';
import Room from './entities/Room';
import Item from './entities/Item';
import Transition from './entities/Transition';

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
    const start = new Room({
      name: 'the room',
      description:
        'Dry air, murky gray concrete walls, a flickering light bulb hanging from the ceiling... This place makes you feel uncomfortable.',
      items: [key]
    });
    const hallway = new Room({
      name: 'long hallway',
      description:
        'Speckles of dust dance in the light of a solitary lamp. The hallway extends far into the distance, leaving you unsure about your very being.',
      paths: []
    });
    start.paths.push(
      new Transition({
        from: start,
        to: hallway,
        description: 'You enter a long, murky hallway.',
        actions: ['enter', 'go through'],
        aliases: ['door']
      })
    );
    hallway.paths.push(
      new Transition({
        from: hallway,
        to: start,
        actions: ['enter', 'go through'],
        description: 'You leave the hallway and go back.',
        aliases: ['door', 'back']
      })
    );
    return new GameState({
      currentRoom: start,
      inventory: [
        new Item({
          name: 'long thread',
          aliases: ['thread'],
          description: 'A long, thin thread of white silk',
          actions: []
        })
      ]
    });
  }
}
