/*
비구조화 할당oiy    s

*/
const obj= {a:1, b:2, c:33, d:44, e:5;}; //obj에 변수대입

const {a,c} =obj;  //obj 객체여 a,b,c,d속성 정의 되있는데   a와c를 가져와 변수를 할당한다. 변수 
console.log(obj); //중괄호 안에 속성 명을 넣으면 obj 객체를 비구조화 하여 할당
console.log('a >>> &{a}'); //중괄호 안에 변수 1 할당
console.log('a >>> &{c}'); //중괄호 안에 변수 30 할당

const profile ='chloe:30'; //기존 속성명에 새로운 변수명으로 할당하여  왼쪽은 속성명 오른쪽은 새로운 변수명
const {a:newA=10, f:newF=5} =obj; //a:newA=10은 객체 a의 속성값을 새로운 변수 newA로 할당하되 undefind로 값이 없는경우에 기본값 10을 할당한다. f속성은 없는 속성이기 때문에  newF변수에는 기본값 5가할당
};
console.log('newA >>> &{:newA}'); //
console.log('newF >>> &{:newF}'); //
