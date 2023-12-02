//Insert into Array
let arr=[10,20,30,40]
arr.push(12)
console.log(arr)

//Remove Last element From Array
let lst=[10,20,30,40]
lst.pop();
console.log(lst);

//Delete 30 in Array
let num=[10,20,30,40]
let index=2;
num.splice(index,1);
console.log(num);

//delete 20 by using value
let nw=[10,20,30,40]
let inde=nw.indexOf(20);
arr.splice(inde,1);
console.log(nw);