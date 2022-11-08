/*
es6에 새로 추가된 js기능인 단축 속성명 을 통해 객체의 속성을 좀 더 간단하게 정의가 가능하다.
{변수명}
*/
const adress ='seoul';
const members = {};
const addFamily = function(age,name,role){
    this.members[role] ={age,name};
}
const getheadcount = function(){
    return Object.keys(this.members).length;
}
    const family = {adress, members,addFamily,getheadcount};

    family.addFamily(30,'chole','aunt');
    family.addFamily(3,'lyn','niece');
    family.addFamily(30,'mun','dog');
    console.log(family.getheadcount());

}