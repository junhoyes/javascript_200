/*
산술 연산자에 표준산술 연산자(덧셈,뺄셈,곱셈,나누셈)이 있습니다.
자바스크립트 산술연산자는 덧셈(+) 연산자인 경우 문자형에 사용가능 하면 두개이상 문자열을 이어붙일수 있다.
단 나누셈 곱셉 뻴셈은 문자열사용이 불가능하다.

산술연산자에 =연산자를 함께 사용하는 산술 등호 연산도 가능하다.

*/
const x =10; //변수 x 에 10 값할당 
 x += 6; //변수x와  값5사이에 += 연산을 사용하면 x= x+6으로 처리되어 결과갑 16이 된다.
 x *= 2; //곱셈 등호 연산 *=는 x=x*2를 의미 결과값16에서 2를 곱하면 32값이 다시x변수에 할당
 console.log(x);//함수값 

 const y =20; //변수 x 에 20 값할당 
 y -= 7; //변수 y의 값에 -=연산을 사용하면 y= -7로 처리되어 13이할당
 y /= 2; ///=은 y/5로할당 되어서 y의 값 10이 할당
 console.log(y);

 
 console.log(15 % 4);//a%b는 15에서 4를 나누어서 3을 반환
 console.log(3 ** 3); // 제곱연산자 a**b거듭제곱수를 반환 33결과값27변환
 console.log(+10); // +10은 양의 숫자10을 반환
 console.log(-10); // -10은 음의 숫자10을 반환
 const value = 10; 
 ++value; //+++연산자는 value+1 로연산 결과값은 10+1=11로 반환
 --value; //---연산자는 value-1 로연산 결과값은 10-1=9로 반환
 console.log(value);
