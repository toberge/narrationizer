export class Tree {
  parent: Tree | null = null;
  children: Tree[] = [];
  word: string;

  constructor(word: string) {
    this.word = word;
  }
}

export class SingularAction extends Tree {}
export class DirectionalAction extends Tree {}
export class Direction extends Tree {}
export class ObjectAction extends Tree {}
export class SomeObject extends Tree {}
