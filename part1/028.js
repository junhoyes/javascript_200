/*
원시 자료형은 하나의 값을 저장하기 때문에 여러 개의 값을  한번에 접근할수 있도록 자바스크립트는 객체를 제공하고 있다.
객체(object)는 값들은 그릅으로 묶은 데이터 모음이다. 객체를 만드는 방법은  표현식으로는 {}를 사용하면 된다. 중갈호 안에 값을 넣을 수있는데 키(key)dhk 값(value)을
한쌍으로 정의하며 이를 속성(Property)라고 한다.
{key:value}
하나의 키(key)에는 하나의 값이 매핑된다.
객체 안에 중복 된 키이름은 허용되지 않으며 두줄이상의 속성을 정의 할떄는 콤마,를 사용하서 구분한다.
*/
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

/*
    JSON은 자바스크립트 객체와 매우 유사한 구조를 지닌 데이터 교환 형식이다.
    JSON 형태는 객체와 비슷하게 키:값 쌍의 모음들로 이루어져 있다. 그러나 반드시 속성키 이름은 큰따옴표로 표시한 문자열이고 값은 오직 문자열 숫자 배열,true,false,null 또는 JSON객체만 가능하다.
    {"key":value}
    

*/