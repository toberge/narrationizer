export default class Item {
  readonly name: string;
  readonly aliases: string[];
  description: string;
  quantity: number = 1;
  actions: Map<string, () => string> = new Map<string, () => string>([
    // maybe put these in the constructor.
    ['inspect', () => this.description],
    ['look at', () => this.description]
  ]);

  constructor({
    name,
    aliases = [],
    description,
    actions
  }: {
    name: string,
    aliases: string[],
    description: string,
    actions: { aliases: string[], action: () => string }[]
  }) {
    this.name = name;
    this.aliases = [];
    this.description = description;
    // assign applicable actions
    for (const {aliases, action} of actions) {
      action.bind(this); // just in case
      for (const alias of aliases) {
        this.actions.set(alias, action);
      }
    }
  }

  perform = (action: string) => {
    const func = this.actions.get(action);
    if (func) return func();
    else return `Cannot ${action} this ${this.name}`;
  }

}
