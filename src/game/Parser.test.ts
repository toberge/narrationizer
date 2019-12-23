import { parse, lookaheadTable } from './Parser';
import { hashMaps } from './words';

describe('parser', () => {
  it('should be set up correctly', () => {
    expect(lookaheadTable.length).toBe(4);
    expect(hashMaps[4].get('key')).toBeTruthy();
  });

  it('should accept commands that fit the grammar', () => {
    expect(parse('gwrgh gwuh gouwrhg hotuh')).toBeFalsy();
    expect(parse('pick up key')).toBeTruthy();
    expect(parse('pick up red elephant and drop it to the ground')).toBeFalsy();
    expect(parse('go left')).toBeTruthy();
    expect(parse('there is a red herring to the left')).toBeFalsy();
  });
});
