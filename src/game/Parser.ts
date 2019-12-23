import { hashMaps, lookaheadIndexOf, types } from './words';

/**
 * Kind of an LR parser, used https://en.wikipedia.org/wiki/LR_parser as reference
 * - but this grammar is so simple I do not need the left hand side goto part of
 */

// used to determine next state while parsing
export const lookaheadTable: number[][] = [
  [
    // state 0
    1, // singular action
    2, // dirverb
    -1, // direction
    3, // object action
    -1, // object
    -1 // eof
  ],
  [
    // state 1
    -1, // singular action
    -1, // dirverb
    -1, // direction
    -1, // object action
    -1, // object
    -2 // eof -> done
  ],
  [
    // state 2
    -1, // singular action
    -1, // dirverb
    1, // direction
    -1, // object action
    -1, // object
    -1 // eof
  ],
  [
    // state 3
    -1, // singular action
    -1, // dirverb
    -1, // direction
    -1, // object action
    1, // object
    -1 // eof
  ]
];

export const parse = (command: string): null | (string|number)[] => {
  const stack : (string|number)[] = [];
  stack.push(0);
  const input: string[] = command.split(' ');
  let position = 0;

  let error: boolean = false,
    done: boolean = false;
  //let state : number = 0;

  let state: number = 0;

  while (!error && !done) {
    // const state  : number | string = stack[stack.length - 1];
    // if (typeof state !== 'number') {
    //   error = true;
    //   break;
    // }

    if (state === -1) {
      console.error('reached error state');
      error = true;
      break;
    }

    if (position === input.length) {
      console.log('reached eof with state', state);
      if (lookaheadTable[state][lookaheadTable[0].length - 1] === -2) {
        // we reached EOF in valid state
        done = true;
      } else {
        error = true;
      }
      break;
    }

    let lookahead = -1;
    let scanPos = position + 1;
    let currentSlice = '';
    // do the lexical parsing
    while (lookahead < 0 && scanPos <= input.length) {
      currentSlice = input.slice(position, scanPos).reduce((acc, val) => `${acc} ${val}`);
      console.log(currentSlice);
      lookahead = lookaheadIndexOf(currentSlice);
      scanPos++;
    }
    position = scanPos - 1;

    // did we find anything? if not, it's invalid.
    if (scanPos === input.length + 1 && lookahead < 0) {
      console.error('invalid command yo', lookahead);
      error = true;
      break;
    }

    // push slice and next state to stack, doing the "actual" parsing work here
    stack.push(currentSlice);
    stack.push(types[lookahead]);
    console.log('was in state', state);
    state = lookaheadTable[state][lookahead];
    console.error('thing is the', state, lookahead);
    stack.push(state);
  }

  if (error) {
    console.log('damn invalid stuff...');
    return null;
  } else {
    console.log('is valid');
    console.log(stack);
    return stack;
  }
};
