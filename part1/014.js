/*
for in반복문은 앞에서 살펴본  for 반복문과 비슷하게 For키워드를 사용합니다.
단 순회 조건이 내부요소에 접근하는 방법의 차이가 있는데 for-in 반복문은 in키워드를 사용한다.
in 키워드 사이에두고 오른쪽은 반복할 대상을 변수 왼쪽에는 속성을 작성


for (속성명 in 반복할대상){

}
반복문을 통해 내부 요소를 하나식 순회할때마다 각요소의 키정보와  forin에서 정의 된 할당되고 반복된다. 
*/ 
let store ={snack:1000,icecram:700,coffee:1500};  //store 변수에 객체 값
for( let item in store){ // store 객체를 순환하는 for-in반복문 변수 item 은 store 객체의 요소를 접근하는 속성명 
    if(!store.hasOwnProperty(item)) continue;//매 반복마다 hasOwnProperty를 이용해서 store객체에 item키가 있는지 확인 없으면 continue를 통해 코드를 실행하지않고 다음으로 넘어감
    console.log(item+'는 가격이'+store[item]+'입니다.')//정상적으로 접근한 요소출력  
}

//자바스크립트는 객체 자료형 자체에 기본적으로 내장된 속성들이 있다. hasOwnProperty속성도 내장속성이다.
//for-in은 순회가능한 객체의 요소로 열거 한다 . 단 객체속성중에 hasOwnProperty와 같은 내장속성은 열거하지않고 사용자가 직접 정의한  속성값만 열거한다.