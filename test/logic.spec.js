import {makeMove, newGame} from '../src/logic';

test('first move works ok', () => {
  const initial = newGame();
  const expected = { player: 'plr2', board: [0,1,0,0,0,0,0,0,0], line: [] };
  const result = makeMove(initial, 1);
  expect(result).toEqual(expected);
  expect(initial).toEqual(newGame()); // testing we didn't mutate entry state
});

// ...more tests to follow here! 
