/*
※조건문 이란?
어떤조건이 참인지 거짓인지 따라 실행 여부를 결정하는 구문이다.
자바스크립트에 조건문에는 대표적으로 if  swich가 있다.

if  조건문은 소괄호()로 둘러싼 형태를 가진다. 이떄 표현식에는 의사결정을 할 수 조건문을 작성하면된다.
*/

let result = true;  //변수값에 ture 대입
if (result){   
    console.log("result가 맞아용~~!"); //result가 true이므로 명령문이 실행되서 "result가 맞아용"이 출력
    if(!result)
    console.log("실행되지 않습니다. 다시시도해주세요.") //!인자값을 반대값으로 변경하여 true였던 result 변수의 값을 false로 바꿔서 변환한다. tue가 아닌 if조건물 실행하지 않아 결과 값이 없음
    if(result){
        console.log("result 결과 값"); //if 다음의 명령문이 한줄이상인경우 중괄호{}를 통해 블록을 잡을 수있다. result값이 참이므로 명령문 블록을 모두실행하여 출력
        console.log("참 입니다.") //콘솔값출력결과
    }
}