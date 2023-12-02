class human{
  age=20;
  printage= () =>console.log(this.age);
}
class person extends human{
    name="pk";
    age=21;
    printname= () =>console.log(this.name);
}
const obj=new person();
obj.printage();
obj.printnae();
