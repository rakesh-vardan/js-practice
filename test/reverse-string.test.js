const assert = require('assert');
const reverseString = require('../arrays/reverseString');

const str = 'My name is Rakesh Vardan';
const reversedStr = 'nadraV hsekaR si eman yM';

describe('String reverse test', () => {
    it('should reverse the given string - reverseUsingNewArray', () => {
        assert.strictEqual(reverseString.reverseUsingNewArray(str), reversedStr);
    });
    it('should reverse the given string - reverseUsingInBuiltFunction', () => {
        assert.strictEqual(reverseString.reverseUsingInBuiltFunction(str), reversedStr);
    });
    it('should reverse the given string - reverseUsingArrowFunction', () => {
        assert.strictEqual(reverseString.reverseUsingArrowFunction(str), reversedStr);
    });
    it('should reverse the given string - reverseUsingArrowShorterVersion', () => {
        assert.strictEqual(reverseString.reverseUsingArrowShorterVersion(str), reversedStr);
    });
});
