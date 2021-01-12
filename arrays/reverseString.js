function reverseUsingNewArray(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'enter a valid string';
    }

    const reversed = []
    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i])
    }
    return reversed.join('');
};

function reverseUsingInBuiltFunction(str) {
    return str.split('').reverse().join('');
}

const reverseUsingArrowFunction = str => str.split('').reverse().join('');

const reverseUsingArrowShorterVersion = str => [...str].reverse().join('');

module.exports = {
    reverseUsingInBuiltFunction,
    reverseUsingNewArray,
    reverseUsingArrowFunction,
    reverseUsingArrowShorterVersion
};