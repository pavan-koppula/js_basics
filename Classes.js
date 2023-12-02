class pk{
  constructor(name,year){
    this.name="pavan";
    this.year=2002;
  }
  kop(){
    console.log(this.name)
    console.log(this.year)
  }
}
class kpk extends pk{
  constructor(age,gender){
    super();
    this.age=20;
    this.gender="M";
  }
  kpf(){
    console.log(this.age)
    console.log(this.gender)
  }
}
let obj=new kpk();
obj.kop();
obj.kpf();
