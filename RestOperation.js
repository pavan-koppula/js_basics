// const array=(...ar)=>console.log(ar);
// array(1,34,4,34,'po')

const car=(a,b,...soon)=>{
  console.log(a,b,soon);
  console.log(b,soon);
  console.log(soon);
  console.log(a,b);
}
car(1,2,34,234,45,4)