let x= 5; //숫자형(number)
let y= 'five'; //문자형(String)
let isture = true; //불린형( boolean)
let empty = null; // null
let nothing // 찾을수 없음
let sym = Symbol("me"); //심볼


let item ={
     price:5000,
     count=10
};//객체 오브젝트

let fruits =['apple','orange','kiwi','tomato','banana']
let addfruit =function(fruit){
    fruits.push(fruit);
}//함수(function)
addfruit('warermelon');
console(fruits);

/*
자바 스크립트는 2가지 타입(원시타입, 참조타임) 으로 구분된다.
원시타입은 값이 변수에 할당될때 메모리상에 고정된 크기로 저장 된다. 즉 해당변수가 직접 값을 보관한다.
원시 (데이터)타입에는  숫자형(Nuber),블린형(Boolean),문자형(symbol),null,undefined가 있습니다.
숫자형:숫자를 표현하는 자료형
문자형:큰따옴표 또는 작은 따옴표 안에 한글자 이상있는 문자 기호 또는 자료형
블린형:참(true) 또는 거짓(false) 두가지 값을 가지고 있다.
심볼형:(es6)부터 사용가능하며 추가된 원시자료형  다른원시형과 다르게 유일하게 변경이 불가는하고 참조형(key)로도 사용가능하다.

Symbol(1) != Symbol(1)

let A = Symbol(1);
A == Symbol(1) // false 
심볼을 쓰려면 A에 담아서 사용해야 한다.

예시
const F = (p1)=>{
    let A = Symbol(1);
    const O = {
        [A] : (p2)=>{
            console.log(p2);
        }
    }
    O[A](p1)
}

F('test'); // test출력


참조타입은 원시타입과 달리 변수에 고정된 크기를 저장하지 않고 값의 메모리 주소를 참조한다.
객체는 속성(Propetties)의 결합을 의미하고 내부에는 순서 및 크기도 고정되어 있지 않다.


참조 타입은 ES5에서 클래스가 없기 때문에 클래스와 가장 가까운 개념이다.참조 값은 참조 타입의 인스턴스이며 객체와 같은 말이다.
객체는 순서가 없는 프로퍼티로 이루어져 있으며 프로퍼티는 이름과 값의 구성이다.


*/