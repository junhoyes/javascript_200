/*
비교연산자는 두개의 값을 비교하여 ture와 false 결과값을 반환
비교연산자에는 값이 동등한 비교하는 일치연산자와 값의 관게를 비교하는 관계연산자가 있다.
*/
console.log(5 == 5);   //내용이 같은경우 true 변환
console.log("5" == 5); //내용이 같은경우 true 변환
console.log(5 == '5'); //내용이 같은경우 true 변환
console.log(5 =! 1);   //!=값이 다른경우 true 로변환
console.log(5 =! "1"); //!=값이 다른경우 true 로변환
console.log(5 =! "5"); //!=값이 달라서 flase 로변환
console.log(5 === 5);  //=== 같기떄문에 true 로변환
console.log(5 === "5"); //=== 자료형이떄문에 false로 변환
console.log(5 !== 10);  // 5와 10이 다르기떄문에 ture변환
console.log(5 !== "5"); // 숫자형 5 문자형 5여서 각가달라서 true변환

/*관계 연산자는 두값의 간의 크기 비교를 통해서 확인하는 연산자
관계 연산자는 <,>,>=,<=가 있다.
>와 <는 값이 큰경우 true로 변환하고 >=와 <=는 한쪽 값이 크거나 동일한경우에 true로 변환한다.
*/
console.log(5 > 3);
console.log(5 < 3);
console.log(5 <= 6);
console.log(5 >= 5);
