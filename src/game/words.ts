const singularActions = ['sleep', 'wait', 'die'];
const directions = ['up', 'down', 'left', 'right', 'north', 'south', 'east', 'west', 'door', 'back'];
const directionalActions = ['go', 'walk', 'run'];
const objects = ['door', 'key', 'exit', 'two furry dice'];
const objectActions = ['eat', 'open', 'pick up', 'take', 'inspect', 'look at', 'throw', 'stroke'];
// TODO write dynamic loading of valid phrases

const createHashMap = (array: string[]): Map<string, boolean> => {
  const map: Map<string, boolean> = new Map();
  array.forEach(word => map.set(word, true));
  return map;
};

// used to get lookahead ID.
export const hashMaps: Map<string, boolean>[] = [
  createHashMap(singularActions),
  createHashMap(directionalActions),
  createHashMap(directions),
  createHashMap(objectActions),
  createHashMap(objects)
];

export const types: string[] = [
  'singular action',
  'directional action',
  'direction',
  'object action',
  'object'
];

export const lookaheadIndexOf = (word: string): number => {
  for (let i = 0; i < hashMaps.length; i++) {
    if (hashMaps[i].get(word)) {
      return i;
    }
  }
  return -1; // not found
};
