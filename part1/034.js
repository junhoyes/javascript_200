/*


function 함수이름 (메게변수 목록){
    함수 실행문
}
함수 형태
  
첫번쨰 키워드 function이다. 함수 자료형은 function을 앞에 붙여 함수로 정의한다.
  es6 부터는 function 없어도 함수를 정의할수 있다.

두번쨰는 함수이름이다. function과 소괄호()사이에 이름을 정의하며 이를 통해 함수를 식별할수 있다.  더아나아가 함수내에서 재귀로 자기 자신을 참조할수도 있다.
이름을 정하지 않은 함수도 존재하는데 이를 익명함수라고 한다.

세번째는 매개변수 목록이다 함수이름 옆에 소괄호()로 둘러싸인 부분이 있다. 선언시에 매개목록을 정의하면 함수를 호출 인자값을 전달 할수 있다.
함수 안에서 전역 변수를 가져와 처리할수도 있지만 대도록 매개변수로 통해 값을 추천 하는걸 권장한다.

네번째는 함수 실행부이다 함수가 호출하며 실행되는몸통부 중괄호{}안에 다발의 코드를 작성

자바스크립트에서 함수를 만드는데 두가지방식이 있다.
함수표현식과 함수 선언문이다.
*/

const greeting_expression = function(name){ //함수 표현식으로 함수 만들어준다. 함수를 정의 하면서 동시에  greeting_expression에 바로 할당해준다 greeting_expression변수에 함수를 리터럴 할당
    console.log('hi'+name);   
}

const greeting_expression_declaration(name){ // 함순 선언문을 다른 개발언어와 비슷한 함수 선언 방식으로 greeting_declaration이라 함수이름으로 선언
    console.log('hi,'+name);   
} 
//함수를 호출 할때는 함수 리터럴이 할당된 변수 이름 또는 함수 선언문의 함수 이름입니다. 주의할점은 함수 표현식에서 정의한 함수 이름은 해당함수안에서만 호출이 가능하다.
greeting_expression('chole') //'chole' 인자를 전달하여 호출
greeting_expression_declaration('chloe') //'chole' 인자를 전달하여 호출
    
}

