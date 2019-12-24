import Item from './Item';

export default class Room {
  name: string;
  description: string;
  items: Item[];
  // TODO pathways to other rooms
  // TODO various event-based messages somehow

  constructor({
    name,
    description,
    items = []
  }: {
    name: string;
    description: string;
    items: Item[];
  }) {
    this.name = name;
    this.description = description;
    this.items = items;
  }

  find = (name: string) => {
    return this.items.find(item => item.name === name || item.aliases.indexOf(name) > -1);
  };

  enter = () => {
    // return [this.description, this.items.reduce<string>((acc: string, item: Item): string => `${acc}, ${item.description}`, 'It holds')];
    return [this.description, 'It holds:', ...this.items.map<string>(item => item.description)];
  };
}
