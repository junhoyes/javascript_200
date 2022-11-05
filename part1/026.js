/*
자바스크립트에서 자료형 간 변환을 지원한다.
ex) 숫자형 변수 값와 문자형으로 변환하거나 문자형 변수값을 숫자형으로 변환할 수 있다.
자바스크립트에서는 이를 자료형 변환 또는 형변환이라고 한다.

자료형 변환하기 위한 방법으로 2가지가 있다.
개발자가 명시적으로 자료형으로 변환하거나 자바스크립트 엔진에 의해 자동으로 자료형이 변환되는 방법이 있다.
주로 console값을 문자열로 출력할 때 내지는 내장 객체 함수나 연산자를 이용하여 자료형 변환이 가능하다.

엔진에 의해 자료형으로 변환되는 것은 자바스크립트가 동적인 자려형 언어이기때문에 정해진 규칙으로 자료형이 변환된다.
*/
console.log("5"+ 1);
console.log("5"- 1);
console.log("5"* 2);
console.log("there is"+5);
console.log("five" * 2);
//자동으로 자료형이 변환되는 경우  연산자에 따라 반환 결과 값이 다르다.+ 연산자는 대입 값에 따라 숫자형 또는 문자형 변환 나머지는 문자형으로 변환

console.log('- 연산자를 활용한 자료형 변환'); 

const str =5 + '1';
console.log(str);
console.log("typeof str"); 

const num = +str;
console.log(num);
console.log(typeof num);

console.log('- 함수를 활용한 자료형 변환'); 
str = String(num);
console.log(str);
console.log(typeof str);

num Number(str);
console.log(num);
console.log(typeof num);
