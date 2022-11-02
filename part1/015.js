/*
while반복문은 지시어 while로 시작합니다. 그다음 소괄호 ()안에 조건식이 들어는데 조건식의 결과값은 ture 또는 falese만 가능하다.
그리고 조건식이 ture 만족한경우에만 중괄호 안에 문장이 실행되고 false가되면 더이상 반복실행 하지않는다.
while반복문에도 break,countinue문을 사용가능하다.

while(조건식){
    반복하게될 문장
}

do-while반복문은 맨앞에 위치한 지시어 do의 사전적 의미 그대로 처음은 조건과 상관없이 무조건 문장을 실행(do)한다.


do{
    반복하게될 문장
} while(조건식)
*/
let hometown[ //변수 hometown에  변수 선언 배열 할당
    {name:'남준',place'일산',city:'고양'}
    {name:'정숙',place'수원',city:'망포'}
    {name:'흥민',place'강원',city:'철원'}
    {name:'아이유',place'서울',city:'강남'}
];
let ishometown = function(h.name){ //인자값 h와 name이 받는함수  ishometown선언
    // 객체h의 name과 인자로 받은 name이 다를경우 false로 반환하여 함수를 종료시킨다. 값이 같을 경우 consol.log 출력하고 ture로 반환
    console.log('함수가 실행 되었습니다. $(h..city} 도시에서 ($name)을 찾습니다.') 

    if (h.name === name){
        console.log({'$h.name'}의 고향은 ${h.city} ${h.place} 입니다.);
        return.ture;
    }
    return false;    
}

//shift()는 배열의 앞에서 부터 하나씩 배오는 함수 ex) [1,2]배열에  shift() 실행되어 1이 빠지면 해당배열은 2가된다.
//H변수에  shift()로 변환된 값이 할당하는 것과 동시에 활당된 값을 확인 한다. hometown요소는 객체로 채워져 있어 값이 유효하면 true 유효하지않으면 false로 반복문 실행
let h;
while (h=hometown.shift()){  
    if(!n.name || !h.place || h.city) continue; // 변수h에  할당된 객체  name place city가 있는지 확인  하나도 없는 경우에 continue문으로 넘어감 place속성이 없
    var result =ishometown(h,'흥민'); //ishometown에  변수h 와 흥민 값을 넣어반환
    if(result) break; //result값이 true면 break문을 통해 반복문 종료  반복문 배열3번쨰값까지 실행 
}

let i=0; //i 변수에 초기값을 할당하여 선언
let names = ['남준' , '정숙' , '흥민' , '아이유']
let city  = ['고양','망포','철원','강남']
do {//do 반복문의 지시자 작성
    hometown[i] =   {name:names[i],city:citys[i]}; //hometown에 배열 인덱스 0부터 객체 값을 할당 
    i++;    //i의 변수의 값에+1을 더함
}while (i< 4); //i 변수값이 4보다 작을 경우에만 반복문실행
console.log(hometown);