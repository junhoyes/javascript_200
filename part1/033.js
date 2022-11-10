/*

*/
const symbol = symbol(); //심볼 함수 호출 통해 사용이가능하다.
const hello  = symbol('hello');

console.log(Number(3) === Number(3));
console.log(symbol('symbol') === Number(3));
console.log(symbol === simbol());
console.log(typeof simbol());

const nationility = simbol('nationilty')
const user ={
    name:'jay'
};
user[nationility] ='koean';
console.log(user[nationility]);

for (let key in user){
    console.log(key);
}
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));


const symbolProperties= Object.getOwnPropertySymbols(user); // getOwnPropertySymbols메소드르르 통해 해당객체의  심볼을 가져온다.
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);




