// IMPORT MODULES under test here:
import { addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should add exclamation marks to a string argument', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);

    const expected2 = 'blueberries!!!';
    const actual2 = addExclamationPoints('blueberries');

    expect.equal(actual2, expected2);

    const expected3 = '3!!!';
    const actual3 = addExclamationPoints(3);
    
    expect.equal(actual3, expected3, 'add exclamation points to first value');
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});


//   multiplyBySeven()

test('this test should multiply a value by 7', (expect) => {
    const expected = 49;

    const actual = multiplyBySeven(7);

    expect.equal(actual, expected);

    const expected2 = -49;
    const actual2 = multiplyBySeven(-7);

    expect.equal(actual2, expected2);

    const expected3 = 0;
    const actual3 = multiplyBySeven(0);
    
    expect.equal(actual3, expected3, 'multiplying a given argument by seven');
});




//   multiplyBy12ThenHalve()

test('this test should multiply a value by 12, then divide product by 2', (expect) => {
    const expected = 18;

    const actual = multiplyBy12ThenHalve(3);

    expect.equal(actual, expected);

    const expected2 = -12;
    const actual2 = multiplyBy12ThenHalve(-2);

    expect.equal(actual2, expected2);

    const expected3 = 24;
    const actual3 = multiplyBy12ThenHalve(4);
    
    expect.equal(actual3, expected3, 'multiply value by 12, then divide by 2');
});




/* test('______', (expect) => {
    const expected = ;

    const actual = ;

    expect.equal(actual, expected);

    const expected2 = ;
    const actual2 = ;

    expect.equal(actual2, expected2);

    const expected3 = ;
    const actual3 = ;
    
    expect.equal(actual3, expected3, '_______');
});


//

test('______', (expect) => {
    const expected = ;

    const actual = ;

    expect.equal(actual, expected);

    const expected2 = ;
    const actual2 = ;

    expect.equal(actual2, expected2);

    const expected3 = ;
    const actual3 = ;
    
    expect.equal(actual3, expected3, '_______');
});

//

test('______', (expect) => {
    const expected = ;

    const actual = ;

    expect.equal(actual, expected);

    const expected2 = ;
    const actual2 = ;

    expect.equal(actual2, expected2);

    const expected3 = ;
    const actual3 = ;
    
    expect.equal(actual3, expected3, '_______');
});

//

test('______', (expect) => {
    const expected = ;

    const actual = ;

    expect.equal(actual, expected);

    const expected2 = ;
    const actual2 = ;

    expect.equal(actual2, expected2);

    const expected3 = ;
    const actual3 = ;
    
    expect.equal(actual3, expected3, '_______');
});

//

test('______', (expect) => {
    const expected = ;

    const actual = ;

    expect.equal(actual, expected);

    const expected2 = ;
    const actual2 = ;

    expect.equal(actual2, expected2);

    const expected3 = ;
    const actual3 = ;
    
    expect.equal(actual3, expected3, '_______');
});


//

test('______', (expect) => {
    const expected = ;

    const actual = ;

    expect.equal(actual, expected);

    const expected2 = ;
    const actual2 = ;

    expect.equal(actual2, expected2);

    const expected3 = ;
    const actual3 = ;
    
    expect.equal(actual3, expected3, '_______');
});


//

test('______', (expect) => {
    const expected = ;

    const actual = ;

    expect.equal(actual, expected);

    const expected2 = ;
    const actual2 = ;

    expect.equal(actual2, expected2);

    const expected3 = ;
    const actual3 = ;
    
    expect.equal(actual3, expected3, '_______');
});

*/