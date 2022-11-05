/*비트연산자
비트란 이진수의 줄임말로 0과 1을 구성된 숫자체계를 가진 이진수이 단일 값

바이트  컴퓨터 용량 기본단위로  파일크기를 측정하는 단위인데 바이트보다 작은 단위가 비트이다.

자바스크립트의 비트연산자는 크게 비트 논리 연산자 비트 이동 연산자로 나눈다
비트 논리 연산자는 and 연산자 & ,NOT 연산자 ~, 0R 연산자 |, XOR 연산자 ^가 있다.
비트 이동 연산자는 <<,>>,>>>가 있다.
*/
console.log(14 & 11);  //AND 연산자는 A & B로 작성한다. 이연산자는 곱하기 처럼 0이 하나라도 있으면 결과 값이 0 이된다.  반대로 대응되는 비트는 반환하고 모든값이 1일떄 1을 반환한다. 그렇기때문에 10이 출력된다.
console.log(~14);      //NOT 비트 연산자는 ~ ~A로 작성 된다. 비트의 값을 반대의 값( 1이면0 ,0이면1로)바꾸어 변환한다.  변환하여서 -15로 출력
console.log(14 | 11);  //OR연산자는 | A | B로 작성  비트값중 최소 하나라도 1 이여도 1로 변환한다. 15로출력
console.log(14 ^ 11);  // ^는 A^B로 작성되면 배타적으로 1인경우에 1로반환 따라서 5가출력된다.
console.log(14 << 11); //비트연산자는 A << B로 작성  연산은 A의 이진수 표현 B자리수 만큼 왼쪽으로 이동하고 오른쪽으로 채운다. 8이출력
console.log(14 >> 11); // 비트연산자는 A >> B로 작성  A의 이진수 표현을 B비트 자리수만틈 오른 쪽으로 이동하고 남은 비트는 버린다. 7이출력
console.log(14 >>> 11);// 비트연산자는 A >>> B로 작성 A의 이진수 표현을 B비트만큼 오릉ㄴ쪽으로 이동하고 오른쪽 남은 비트는 버리고 왼쪽빈자리는 0으로 채운다. 그러므로 3이출력된다.