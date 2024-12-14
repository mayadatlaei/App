const Print=(number)=>{
    console.log(number)
}
Print(20)
const Printsum=(num1,num2)=>{
    console.log(num1+num2)
} 
Printsum(10,15)
 const darb=(number2,name)=>{
    console.log(number2*name)
 }
 darb(22,30)
 const print2=(family)=>{
    console.log(family)
 }
 print2("tllawi")
 const print5=(name,age)=>{
    return name+age
 }
 const x = print5("mayada",13)
 console.log(x);
 const start=(obj)=>{
    console.log(obj)
    return obj
 }
 start({
    name:"mayada",
    age:13,
 })
 const print55=(name,family)=>{
    console.log (name+family)
 }
   const yyy =(number)=>{
      if(number>10){
         console.log("true")
      }
      else {
         console.log("false")
      }

   }
   yyy(2)
   const gggg=(num1,num3)=>{
      if(num1>num3){
         return num1
      }else{
         return num3
      }
   }
    console.log(gggg(44,34))
    const print22=(number)=>{
     return number*1.1
    }
    console.log(print22(10))
    const akbar=(num4,num5,num6)=>{
var sum=num4+num5+num6
var avg=sum/3
return(avg)
    }
    
    console.log(akbar(100,90,95))
    const print33=(obj)=>{
      obj.name = "mayada"
      obj.age =15
    }
    print33({})