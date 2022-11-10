/*

arguments 객체 이해하기
자바스크립트 함수는 매개변수를 가진다 여기서 매개변수와 같이 사용되는 용어가 있는데 바로 전달인자(argument)이다.
매개변수가 함수 선언시 작성되는 변수라면  전달인수는 함수가 호출될 때 전달되는 값이다.

자바스크립트는 전달 인자의 개수와 매개변수의 개수가 달라도 에러를 발생하지 않습니다.
그래서 매개변수와 무관하게 함수 호출시 더 많은 인자를 전달할 수 있다.
매개변수외에 함수에서 사용가능한 특별한 객체를 제공하는게 arguments 객체이다.
*/

function sum(){ //sum함수를 정의 하면서
    const total =0;
    for (var  i = 0; i< arguments.length; i++){   //arguments객체를 통해 전달된 인자의 값을 반환한다 arguments객체는 배열과 유사하게 인덱스를 통해 접근이 가능하지만 lengh속성 외에는 배열의 어떠한 속성과 매소드를 갖지 않는다.
        total += arguments[i]; //객체를 통해 전달된 인자의 합을 반환
    }
    console.log(arguments instanceof Array);//instanceof 연산자를 이용하여 arguments 객체가 배열인지 확인가능하다.
    return total;
}
function sumOf1to3 = sum(1,2,3); //sum함수는 매개변수로 정의하지않지만 전달인자로 1,2 그리고 3을 전달하고 있다.
console.log(sumOf1to3); 

function testArg(){
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(arguments instanceof Array);
    return total;
}
var sumOf1to3 =sum(1,2,3);
console.log(sumOf1to3);

function testArg(){
    var newArr = Array.prototype.slice.call(arguments);//arguments객체를 배열로 바꾸귀 위해 배열의 프로드 타입에 정의된 silce 매소드 호출 arguments객체 요소를 복사하는 새로운 배열이 만들어진다.
    console.log(newArr);  
    console.log(newArr,indexOf('b'));    //indexOf()매소드를 사용하여 문자열b인덱스 반환
    console.log(arguments,indexOf('b')); //arguments객체가 배열이 아니기떄문에 오류
    TextArg('a','b')

}