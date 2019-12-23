export class ParsedPhrase {
  // parent: ParsedPhrase | null = null;
  // children: ParsedPhrase[] = [];
  public readonly word: string;
  //
  constructor(word: string) {
    this.word = word;
  }

  public toString(): string {
    return this.constructor.name + ' ' + this.word;
  }
}

export abstract class Action extends ParsedPhrase {
  abstract perform(argument: ParsedPhrase): string;
}

export class SingularAction extends ParsedPhrase {
  perform(): string {
    return `You will now ${this.word}`;
  }
}
export class DirectionalAction extends Action {
  perform(argument: Direction): string {
    return `You wanna ${this.word} to the ${argument.word} & it is fine.`;
  }
}
export class Direction extends ParsedPhrase {}
export class ObjectAction extends Action {
  perform(argument: SomeObject): string {
    return `You ${this.word} the ${argument.word} (somehow)`;
  }
}
export class SomeObject extends ParsedPhrase {}

export const createParseAction = (word: string, lookahead: number): ParsedPhrase => {
  // should avoid the switch sometime
  switch (lookahead) {
    case 0:
      return new SingularAction(word);
    case 1:
      return new DirectionalAction(word);
    case 2:
      return new Direction(word);
    case 3:
      return new ObjectAction(word);
    case 4:
      return new SomeObject(word);
    default:
      return new SingularAction('roflmao something went wrong');
  }
};
