function map(a, ret) {
    const resultat = [];
    for (let i = 0; i < a.length; i++) {
        resultat.push(ret(a[i]));}
    return resultat;}
function isEven(number) {
    return number % 2 === 0;}
console.log(map([5, 8, 10], isEven));  