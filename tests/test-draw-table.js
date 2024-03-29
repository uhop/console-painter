import test from 'tape-six';

import {draw} from '../src/table.js';

test('Draw a table', async t => {
  await t.test('Single lines', t => {
    const box = draw([1, 1, 1, 0, 1], [1, 1, 1, 0, 1]);

    t.equal(box.length, 4);
    t.equal(box[0].length, 4);

    t.deepEqual(box, ['┌─┬┐', '│ ││', '├─┼┤', '└─┴┘']);
  });

  await t.test('Double lines outside, single lines inside', t => {
    const box = draw([2, 1, 1, 0, 2], [2, 1, 1, 0, 2]);

    t.equal(box.length, 4);
    t.equal(box[0].length, 4);

    t.deepEqual(box, ['╔═╤╗', '║ │║', '╟─┼╢', '╚═╧╝']);
  });

  await t.test('Single lines outside, double lines inside', t => {
    const box = draw([1, 1, 2, 0, 1], [1, 1, 2, 0, 1]);

    t.equal(box.length, 4);
    t.equal(box[0].length, 4);

    t.deepEqual(box, ['┌─╥┐', '│ ║│', '╞═╬╡', '└─╨┘']);
  });

  await t.test('Mix of single and double lines', t => {
    const box = draw([1, 1, 2, 0, 2], [1, 1, 2, 0, 2]);

    t.equal(box.length, 4);
    t.equal(box[0].length, 4);

    t.deepEqual(box, ['┌─╥╖', '│ ║║', '╞═╬╣', '╘═╩╝']);
  });
});
