/*
삼항 연산자는 if와 swich처럼 조건문을 처리하는 연산자이다.
조건 (삼항) 연산자는 JavaScript에서 세 개의 피연산자를 받는 유일한 연산자입니다.
  조건문 ? 표현문1: 표현문2
  조건문은 반드신 결과가 참(true)또는 거짓(false)로 변환하고 실행한다.
*/
const  = 5> 10; //5보다 10이 작기 떄문에 5> 10 false로 반환
condition ? console.log('left') :console.log('right');  //condition 변수가 false이기 때문에 삼항연산자는 콘솔로그 right실행
const result = condition ? ( //변수에 result에 삼항연산자를 대입
                        //result 값이 false로 인해 "삼항연산식은 두번쨰 표현이다." 콘솔로그가 출력되고 마지막값인 result가 할당
     console.log("삼항 연산식의 첫 번쨰 표현이다."), 
     "표현식1"
) : (
    console.log("삼항 연산식의 두 번쨰 표현이다."),
    "표현식2"
);
console.log(result);// 표현식2 값출력
