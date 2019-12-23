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

    if (state === -1) {
      console.error('reached error state; command did not match syntax');
      error = true;
      break;
    }

    if (position === input.length) {
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
      lookahead = lookaheadIndexOf(currentSlice);
      scanPos++;
    }
    position = scanPos - 1;
    console.log(currentSlice);

    // did we find anything? if not, it's invalid.
    if (scanPos === input.length + 1 && lookahead < 0) {
      console.error('lexical lookup failed, invalid command!');
      error = true;
      break;
    }

    // push slice and next state to stack, doing the "actual" parsing work here
    stack.push(currentSlice);
    stack.push(types[lookahead]);
    console.log('was in state', state);
    state = lookaheadTable[state][lookahead];
    console.log('state:', state, 'lookahead:', lookahead);
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
