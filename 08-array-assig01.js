
const fruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`==================================Log the first and last element on the console=============================`);
console.log(`First Element is: ${fruits[0] }`);
console.log(`last element is: ${fruits[fruits.length-1]}`);


console.log(`=======================================Add element Papaya before the Banana=================================`);
fruits.unshift("Papaya");
console.log(`Adding Element 'Papaya' before Banana: ${fruits}`);

console.log(`=======================================Remove mango from the array==========================================`);
fruits.splice(4,1);
console.log(`after remove the mango element into the fruits array is: ${fruits}`);

console.log(`==================================Add element Pineapple at the last position=================================`);
fruits.push('Pineapple');
console.log(`insert 'Pineapple' at the last position array is: ${fruits} `);

console.log(`===================================insert element Dragon fruit before waterMelon=============================`);
fruits.splice(4,0,"Dragon Fruit");
console.log(`Adding 'Dragon Fruit' before Watermelon array is: ${fruits}`);

console.log(`==================================Replace an element Orange with kiwi========================================`);
fruits.splice(2,1,"Kiwi");
console.log(`After replacing 'Orange' with 'Kiwi' array is: ${fruits}`);

console.log(`====================================Log the element Starting from index 1 to 4===============================`);
const add=fruits.slice(1,5);
console.log(`Log the element starting index 1 to 4: ${add}`);

console.log(`===============================================last 3 elements===============================================`);
const lastThree = fruits.slice(fruits.length - 3);
console.log(`Last 3 elements: ${lastThree}`);







