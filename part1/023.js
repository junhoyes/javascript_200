/*
논리 연산자(logical operator)는 어떠한 명제에 대한 논리적인 판단을 내리는 연산자
참 또는 거짓의 값을 받아 논리적 연산의 결과로 true,flase값을 변환한다.
연산자의 종류로는 
AND연산자  &&
OR연산자   ||
NOT연산자  !
결과값은 BOOLEAN으로 변환한다.
*/
//AND 논리연산자 &&
console.log(true && true);  //양쪽의 연산 결과는 모두 상등하여(참이 이여서) true 값 반환
console.log(true && false); // 양쪽의 연산 결과는 모두 상등하지 않아서(거짓 이여서) false 값 반환
console.log('문장' && '문장' && 5 == 5); //양쪽의 연산 모두 상등하여(참이 이여서) true 값 반환
console.log(5 == 5  && '다른문장' == '문장');


//OR 논리 연산자
console.log(true || false);
console.log(false || false);
console.log('문장' == '문장' || 5 == 5);


//NOT 논리 연산자
//NOT 논리 연산자의 문장은 ! 표현식으로 작성된다.   반대로 
console.log(!true);//True를 ! 부정(not)하면 false
console.log(!false);//false를 부정하면 ture
console.log(!5); //숫자형 5과 문장은 항상 true값  
console.log(!"문장");//!not 연산자 대입하면 false
console.log(!!5); //!!연산자는 한번더not연산자를 처리하는 방법 숫자형 5와   !! 를 통해 부정한 결과로true로 변환
console.log(!!"문장");// 문자는 항상 ture를 변환하는 값이고 !! 를 통해 부정한 결과로true로 변환

