/* 자바스크립트 코드를 실행하다 에러가 발생할때 그 즉시 중단이 된다.
이를 대비해서 예외 처리는 반드시 필요하다. 
자바스크립트에서 사용할 수 있는 예외 처리 방법에는 thow문과 try-catch-finally문이 있다.

예외 처리 시 예러 종류는 크게 두가지로 나눈다. 하나는 예상치 못한 에러 다른 하나는 개발자가 의도한 에러가 있다.
여기서 개발자가 의도한 에란  코드에서 잘못될 가능성을 예상하고 발생시키는 에러를 의미란다.
먼저 후자의 경우 thow문을 사용한다. thorw문은 고의로 에러를 발생 시켜 예외상황을 알리는 역활을 한다 
thow문이 실행되고 있던 블록을 빠져나간다.
*/
function checkNumber(val){  //숫자형 값을 확인하는 함수선언
    if(Typeof val !== 'number')throw'유효하지않은값'; // Typeof val 통해 숫자형 값이 아닌 경우에 thow문을 통해 블록을 빠져나간다.
    console.log('숫자형으로 확인되 있습니다.') //숫자형이 출력되면 나오는 로그
} 
checkNumber(100); //숫자형 값이 출력되는 문장
checkNumber('wrong type') //문자형 값 wrong type을 넣으면  type val 결과 값은 string을 반환한다.
console.log('완료')
/*
 thow문은 예외의 상황을 미리 파악하고 에러를 발생시켜 이후 코드가 실행 되지않도록 한다. 결국 예러를 발생시킨것으로 프로그렘이 중단되는거를 막을 수 없다. 
 이 에러 발생에 대한  대응책이 바로 try-catch-finally문이다.
 try-catch-finally은 설명한 예상치 못한 에러와 개발자가 의도한 에러가 모두 대응가능하다.

 try-catch-finally문은 try 블록 안에서 발생된 에러를 찾아내고 catch 블록으로 제어권을 넘긴다.
 try블록에서 발생된 에러 정보는 catch문의 변수로 전달되기 때문에 개발자는 프로그렘 종료없이 어떤에러가 발생됬는지 확인이 가능하다.
 finally 블록은 에러 발생의 여부와 상관 없이 실행되는 블록이다.
*/

function checkNumbers(val){ //숫자형 값을 확인하는 함수선언
    if (typeof val !== 'number')throw '유효하지 않은 값이다.'; //오류 발생
    console.log('숫자형 값으로 발견')
}
try{// try문의 블록안에 있기 때문에 빠져나간다.
    checkNumbers(100); 
    checkNumbers('wrong type');
} catch(e){//변수에 e의 에러 정보를 전달후  throw유효하지않은 값 <-콘솔출력
    console.log('에러발생 >>> ${e}');
}finally{ // 코드가 다실행된후 마지막에 실행(에러여부 상관없이 실행 되서 )완료 문자열 출력 
    console.log('완료');
}