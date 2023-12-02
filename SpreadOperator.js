//Spread Operator in Array 
set1=[1,2,3,4]
set2=[5,6,7,8,9]
set3=[...set1,...set2]
console.log(set3);

//Spread Operator in Object
set1={
  name:"pavan",
  age:20,
  Pno:8886004810
}
set2={
  email:"pavankumarkoppula2002@gmail.com",
  ...set1
}
console.log(set2);