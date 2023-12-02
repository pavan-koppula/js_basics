//Destructuring(Array)
values=[2,22,32,33,52];
[a, ,c,d,e]=values;
console.log(a,d,c)

//Destructruring(object)
values={
  email:"mail@gmail.com",
  name:"pavan",
  age:20
}
const {email,name,age}=values;
console.log(name,age)