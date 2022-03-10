// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    myFunction,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should add exclamation marks to a string argument', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit', '!!!');

    expect.equal(actual, expected);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

