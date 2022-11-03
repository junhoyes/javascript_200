//

const cart[
    {name: '옷',price:20000},
    {name: '가방',price:85000}
];
const nameofItem ="카트에 ${cart.lemgth}개의 아이탬이 있다.";
const cartTable =

    <ul>
        <li>품목: ${cart[0].name}, 가격: ${cart[0].price}</li>
        <li>품목: ${cart[1].name}, 가격: ${cart[1].price}</li>    
    </ul>
console.log(numofItem);
console.log(cartTable);

const personName ='harin';
const helloString="hello"+ personName;
const helloTempliateSting= "hello ${personName}";
console.log(helloString === helloTempliateSting);
console.log(typeof helloTempliateSting);
