// IMPORT MODULES under test here:
import { addExclamationPoints, 
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should add exclamation marks to a string argument', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit', '!!!');

    expect.equal(actual, expected);

    const expected2 = 'blueberries!!!';
    const actual2 = addExclamationPoints('blueberries', '!!!');

    expect.equal(actual2, expected2);

    const expected3 = '3!!!';
    const actual3 = addExclamationPoints(3, '!!!');
    
    expect.equal(actual3, expected3, 'add exclamation points to first value');
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});



// IMPORT MODULES under test here:
/*

test('', (expect) => {
    const expected = ;

    const actual = ;

    expect.equal(actual, expected);

    const expected2 = ;
    const actual2 = ;

    expect.equal(actual2, expected2);

    const expected3 = ;
    const actual3 = ;
    
    expect.equal(actual3, expected3, '_________');
});

*/
