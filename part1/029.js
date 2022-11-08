const family{ //family에 객체선언
    'adress':'seoul' //키 adress 값은 문자열seoul속성을 갹체에 추가 
    Members:{},//Members에 새로운 객체를 리터럴을 대입한다. 아직 새롭게 추가된 mebers는 없다.
    addfaily: function(age,name,role) { //addfaily로 리터럴을 대입한다. 함수의 표현식으로 변수에 대입했던 것처럼 키값을으로 함수를 할당한다.
        this.Members[role] ={//this키워드로 family객체 내부속성에 접근 할수있다. this 키워드를 통해 family meber속성으로 접근하고 값을 할당
            age:age,
            name:name
        };
        
    }
    
    getheadcount:function(){//getheadcount에 함수 리터럴을 할당한다.
        return Object.keys(this.Members).length;// 이 함수는 meber와 key를 모아서 배열로 반환하고 반환된 배열의 길이를 통해 사이즈를 알수있다.
    }
}

family.addfaily(30,'chloe','aunt')
family.addfaily(3,'lyn','niece')
family.addfaily(30,'mungmung','dog')
console.log(family.getheadcount());//family객체의 getheadcount함수를 호출하여 meber 개수 (인원수)를 출력

const printMembers = function{      //printMembers에 함수 표현식에 대입
    const mebers = family.Members;  //family변수 객체에 members에 접근후 별도 members변수를 선언하고 값을 할당
    for (role in Members) {         //for in으로  members객체를 순환  
        console.log('role =>'+ role +',name => '+mebers[role].name+',age =>' +mebers[role].age );  //members속성에 하나씩 접근할때마다 name age 속성값 변환하여출력
    }
    printMembers(); //선언한 printMembers함수로 호출하여 실행

    const members =family.Members; 
    members['nephew'] ={age:3, name:'hyen'}; //새로운 객체를 추가 키가 nephew이고 값은 {age:3, name:'hyen'}인속성을 members에 추가
    members.niece ={age:5, name:'lyn'};     //niece 키 속성은 member 객체변수안에 월래 값이다. 존재하는 값을 {age:5, name:'lyn'}으로 수정한다.
    delete.mebers.aunt; //객체의 속성을 삭제하는 방법 키워드 delete을 앞에두고 작성하면 mebers에 aunt속성이 제거된다.
    delete.mebers.[dog];//  mebers에 [dog]속성이 제거된다.
    printMembers(); //printMembers함수를 호출하여 값 출력

}
/*
객체의 속성에 접근하는 방법은 객체의 우측 콤마,를 두구 그다음에  객체 속성으로 정의 된 키 이름을 작성하면 된다.
또는 대괄호[]안에 키 값을 문자열로 작성하는 방법이 있으나  콤마로 접근하는게 선호하는 방식이다.
그외에 객체에 속성을 추가/수정/삭제하는 방법 또한 결국에는 속성에 접근하기 때문에 대부분 콤바 또는 대괄호를 사용한다.
*/