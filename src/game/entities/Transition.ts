import Room from './Room';

export default class Transition {
  readonly from: Room;
  readonly to: Room;
  _blocked: boolean;
  readonly description?: string;
  readonly aliases: string[];
  readonly actions: string[];

  constructor({
    from,
    to,
    actions,
    aliases,
    description,
    blocked
  }: {
    from: Room;
    to: Room;
    actions: string[]
    aliases: string[]
    description?: string;
    blocked?: boolean;
  }) {
    this.from = from;
    this.to = to;
    this.aliases = aliases;
    this.description = description;
    this._blocked = blocked || false;
    this.actions = actions;
  }

  set blocked(blocked: boolean) {
    this._blocked = blocked;
  }

  get blocked() {
    return this._blocked;
  }
}
