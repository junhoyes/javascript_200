/* 

switch(표현식){
    case 값1:
        명령문
        break;
    case 값2:
        명령문
        break;
        default;
        명령문3    
}
 switch  표현식 값 확인
 switch cash 문이 있는데 switch 표현식은 cash 값과 일치여부 확인하고 === 일치 연산자 사용한다.

 ===일치 연산자는 값과 자료형을 모두 비교하고 결과값을 true 또는 false로 변환한다.

 cash문이 여러 개 있는경우 위에서 일치한 값이 나올때까지 cash값을 확인해서 내려간다.
 cash 값이 일치하면 해당 명령문을 실행하고 break는 그다음의 코드가 실행하지 않고 swich조건문을 끝내는 역활을 한다.
 만약에 일치하는 값이 없는 경우에 default로 선언한 명령문이 실행된다.
*/
let Value = "자바스크립트"; //변수 Value 에 자바스크립트 문자값을 대입
switch (Value){  //swich에 Value값 넣는다. 
    case 'c언어': //첫번쨰 case문 확인한다. Value값이 cast문의 값이랑 일치하지 않기때문에 실행되지않고 넘어간다.
        console.log('c언어가 작동되었습니다.');
        break;
        case '자바스크립트': //두번쨰 case문 확인한다. Value값이 cast문의 값이랑 일치하기 때문에 명령문이 실행된다. 
        console.log('자바스크립트가 실행되었습니다.');
        break;//명령문이 실행된후에 break문으로 통해 swich문으로 빠져나온다.
        case '리액트':
        console.log('리엑트가 실행되었습니다.'); //명령문이 실행됬기때문에 실행되지않고 종료
        break;
        default:
            console.log('해당 프로그램이 없습니다.'); //명령문이 실행됬기때문에 실행되지않고 종료
            break;
}