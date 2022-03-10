// IMPORT MODULES under test here:
import { addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, getRandomNumber
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


//divideThenMultiply

 test('divide first two values, then multiply quotient by the third', (expect) => {
    const expected = 33;

    const actual = divideThenMultiply(33, 3, 3);

    expect.equal(actual, expected);

    const expected2 = 9;
    const actual2 = divideThenMultiply(12, 4, 3);

    expect.equal(actual2, expected2);

    const expected3 = 12;
    const actual3 = divideThenMultiply(18, 9, 6);
    
    expect.equal(actual3, expected3, 'divide two values, then multiply answer by third value');
});


// returnAsArray

test('return as array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected);

    const expected2 = [9, 3, -5];
    const actual2 = returnAsAnArray(9, 3, -5);

    expect.deepEqual(actual2, expected2);

    const expected3 = [42, 0, 1];
    const actual3 = returnAsAnArray(42, 0, 1);
    
    expect.deepEqual(actual3, expected3, 'return as an array');

});

// returnAsAString


test('return numbers as string', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.equal(actual, expected);

    const expected2 = '0325';
    const actual2 = returnAsAString(0, 32, 5);

    expect.equal(actual2, expected2);

    const expected3 = '45-3';
    const actual3 = returnAsAString(4, 5, -3);
    
    expect.equal(actual3, expected3, 'returning numbers in a string');

});



// makeLuckyGreeting

test('adds two numbers and returns value in a string announcing your lucky number ', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 6.';

    const actual = makeLuckyGreeting(4, 2);

    expect.equal(actual, expected);

    const expected2 = 'Hello! Your lucky number for the day is 42.';
    const actual2 = makeLuckyGreeting(40, 2);

    expect.equal(actual2, expected2);

    const expected3 = 'Hello! Your lucky number for the day is 99.';
    const actual3 = makeLuckyGreeting(100, -1);
    
    expect.equal(actual3, expected3, 'announcing sum of numbers as lucky number for the day');

});


// getSecondItem

test('get second item in an array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
/*
    const expected2 = ;
    const actual2 = ;

    expect.equal(actual2, expected2);

    const expected3 = ;
    const actual3 = ;
    
    expect.equal(actual3, expected3, '_______');
    */
});


//
/*
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