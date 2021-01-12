const assert = require('assert');
const mergeSortedArrays = require('../arrays/mergeSortedArrays');

const array1 = [1, 3, 4, 31];
const array2 = [4, 6, 30];

const result = [1, 3, 4, 4, 6, 30, 31];

describe('Merging sorted arrays test', () => {
    it('should merge the given valid arrays - reverseUsingNewArray', () => {
        assert.deepStrictEqual(mergeSortedArrays.mergeSortedArrays(array1, array2), result);
    });
    it('should merge the given arrays with second empty array - reverseUsingNewArray', () => {
        assert.deepStrictEqual(mergeSortedArrays.mergeSortedArrays(array1, []), array1);
    });
    it('should merge the given arrays with first empty array - reverseUsingNewArray', () => {
        assert.deepStrictEqual(mergeSortedArrays.mergeSortedArrays([], array2), array2);
    });
});
