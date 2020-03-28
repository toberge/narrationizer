import Item from './Item';
import Transition from './Transition';

export default class Room {
  name: string;
  description: string;
  items: Item[];
  paths: Transition[];
  // TODO pathways to other rooms
  // TODO various event-based messages somehow

  constructor({
    name,
    description,
    items = [],
    paths = []
  }: {
    name: string;
    description: string;
    items?: Item[];
    paths?: Transition[];
  }) {
    this.name = name;
    this.description = description;
    this.items = items;
    this.paths = paths;
  }

  find = (name: string) => {
    return this.items.find(item => item.name === name || item.aliases.indexOf(name) > -1);
  };

  explore = (phrase: string) => {
    return this.paths.find(path => path.aliases.indexOf(phrase) > -1);
  };

  enter = () => {
    // return [this.description, this.items.reduce<string>((acc: string, item: Item): string => `${acc}, ${item.description}`, 'It holds')];
    return [this.description, 'It holds:', ...this.items.map<string>(item => item.description)];
  };
}
