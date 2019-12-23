import { parse, lookaheadTable } from './Parser';
import { hashMaps } from './words';

it('does actually work', () => {
  expect(lookaheadTable.length).toBe(4);
  expect(hashMaps[4].get('key')).toBeTruthy();
  expect(parse('gwrgh gwuh gouwrhg hotuh')).toBeFalsy();
  expect(parse('pick up key')).toBeTruthy();
  expect(parse('go left')).toBeTruthy();
});
