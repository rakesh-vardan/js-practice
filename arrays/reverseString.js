function reverseUsingNewArray(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'enter a valid string';
    }

    const reversed = []
    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i])
    }
    return reversed.join('');
}
console.log(reverseUsingNewArray('My name is Rakesh Vardan'));

function reverseUsingInBuiltFunction(str) {
    return str.split('').reverse().join('');
}
console.log(reverseUsingInBuiltFunction('My name is Rakesh Vardan'));


const reverse2 = str => str.split('').reverse().join('');
console.log(reverse2('My name is Rakesh Vardan'));

const reverse3 = str => [...str].reverse().join('');
console.log(reverse3('My name is Rakesh Vardan'));
