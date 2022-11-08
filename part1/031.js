/*
esj 추가된 java script 기능인 단축속성명
*/

const obj = {}; //obj 변수에 대입
for(var i =0; i <4; i++){ //변수가 i 0~3까지 반복하는for문
    obj['key'+i ]= i;     //객체에 obj 속성추가 []를 활용하여 계산된 속성 명정의 속성명 key(),key1,key2,key3,으로 증가
}
console.log(obj); //객체 obj출력

let profile ='chloe:30';  //profile에 'chloe:30'대입
let person ={    
    [profile] : true,    // profile문자를 키값속성 정의   
    [profile.split(':')[0]]:profile.split(':')[1]  // [profile.split(':')[0]]은 문자중':'중심으로 profile을 나누고 나누어진 부분을 chloe를 가져온다. profile.split(':')[1]은 오른쪽 문자열 30을 의미하기떄문에 chloe:30이 된다.  
};
console.log(person);//person 콘솔출력
