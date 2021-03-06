import { hashMaps, lookaheadIndexOf, types } from './words';
import { createParseAction, ParsedPhrase } from './actions';

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

export const parse = (command: string): null | ParsedPhrase[] => {
  const debugStack : (string|number)[] = [];
  debugStack.push(0);

  // shearing away whitespace and ignoring case differences
  const input: string[] = command.trim().toLowerCase().split(' ');
  const stack: ParsedPhrase[] = [];
  let position = 0;

  let error: boolean = false,
    done: boolean = false;
  //let state : number = 0;

  let state: number = 0;

  // TODO get rid of those two booleans & have pure returns!
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
    let phrase = '';
    // do the lexical parsing
    while (lookahead < 0 && scanPos <= input.length) {
      phrase = input.slice(position, scanPos).reduce((acc, val) => `${acc} ${val}`);
      lookahead = lookaheadIndexOf(phrase);
      scanPos++;
    }
    position = scanPos - 1;
    console.log(phrase);

    // did we find anything? if not, it's invalid.
    if (scanPos === input.length + 1 && lookahead < 0) {
      console.error('lexical lookup failed, invalid command!');
      error = true;
      break;
    }

    // push slice and next state to stack, doing the "actual" parsing work here
    debugStack.push(phrase);
    debugStack.push(types[lookahead]);
    stack.push(createParseAction(phrase, lookahead));
    console.log('was in state', state);
    state = lookaheadTable[state][lookahead];
    console.log('state:', state, 'lookahead:', lookahead);
    debugStack.push(state);
  }

  if (error) {
    console.log('damn invalid stuff...');
    return null;
  } else {
    console.log('is valid');
    console.log(debugStack);
    return stack;
  }
};
