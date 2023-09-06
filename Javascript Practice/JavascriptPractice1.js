/* 
function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const squares = []
    for (const number of numbers) {
        // console.log(`number=${number} and square=${number**2}`)
        const square = number ** 2
        squares.push(square)


    }

    console.log(numbers)
    console.log(squares)
}
function1()
//square using foreach loop
function function2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    numbers.forEach((value) => {
        console.log(`${value}=${value ** 2}`)
    })

}
function2()
//square using map
function function3() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const squares = numbers.map((value) => {
        return value ** 2
    })
    console.log(numbers)
    console.log(squares)
}
function3()
//cubes using a for loop
function function4() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const cubes = []
    for (number of numbers) {
        cubes.push(number ** 3)
    }
    console.log(numbers)
    console.log(cubes)
}
function4()
//cube using map function
function function5() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const cubes = numbers.map((value) => {
        return value ** 3
    })
    console.log(numbers)
    console.log(cubes)
}
function5()

//object array
function function6() {
    const cars = [
        { model: 'i10', company: 'hyndai', price: '7.4', color: 'red' },
        { model: 'i20', company: 'neon', price: '6.4', color: 'black' },
        { model: 'u30', company: 'tata', price: '5.4', color: 'white' },
        { model: 'l40', company: 'skodA', price: '7.9', color: 'gray' },

    ]
    //select car on basis of model and price
    const new_cars = cars.map((cars) => {
        return { model: cars.model, price: cars.price }


    })
    console.log(new_cars)
    }
    function6()

    



    // Practice 2

    //finding even no in given array

function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
const evenNumbers=[]
for(const number of numbers){
if(number % 2 == 0) {
    evenNumbers.push(number)
}
}
console.log(numbers)
console.log(evenNumbers)
}
function1()


//adding only evenno from squares array into array
function function2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    const squares=numbers.map((number)=>{
     return number
    })
    const evenNumbers=[]
    for(const number of squares){
        if((number**2) % 2 == 0){
        evenNumbers.push(number**2)
    }
}
console.log ('in function 2')
console.log(numbers)
console.log(squares)
console.log(evenNumbers)
}
function2()


//finding evenumbers from array using map will return booelan value i.e true false

function function3() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
     const evenNumbers=numbers.map((number)=>{
        return (number%2==0)
       })
       console.log(numbers)
       console.log(evenNumbers)
    }
    function3()


    //finding evenumbers from array using filter will return evennumbers

function function4() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    //if the value of number%2==0 is true only then push no in array 
    //do nothing if condition is false
     const evenNumbers=numbers.filter((number)=>{
        return (number%2==0)
       })
       console.log(numbers)
       console.log(evenNumbers)
    }
    function4()


  function  function5() {

        const cars = [
            { model: 'i10', company: 'hyndai', price: '7.4', color: 'red' },
            { model: 'i20', company: 'neon', price: '6.4', color: 'black' },
            { model: 'u30', company: 'tata', price: '5.4', color: 'white' },
            { model: 'l40', company: 'skodA', price: '7.9', color: 'red' },
            { model: 'l50', company: 'hyndai', price: '9.0', color: 'red' },
    
        ]
        //select * from car where car color is red
        const new_cars = cars.filter((cars) => {
            return (cars.color ==='red')
        })
        console.log(new_cars)
    }

        function5()



        //Practice 3


        function function1(){
            const numbers=[1,2,3,4,5,6,7,8,9,10]
        
            const evenNumbers=numbers.filter((number)=>number % 2== 0)
            const squares=evenNumbers.map((number)=>number**2)
        
        console.log(numbers)
        console.log(evenNumbers)
        console.log(squares)
        }
        function1()

*/


//Practice 4

/*Object is created by three types
1.oject literal(JSON)
2.using object root function
3.using constructor function 
*/

/*
function function1(){
    //object created using object literal
    const p1={
        person_name:'Ashwini',
        age:27,
        address:'Ahilyanahgar',
        mobile:'+91 9921188037'
    };
console.log(p1);
}
function1()


function function2(){
    const persons=[
        {persons_name:'Ashwini', age:27,address:'Ahilyanahgar', mobile:'+91 9921188037'},
        {persons_name:'Dakshayanee', age:25,address:'Latur', mobile:'+91 9921188034'},
        {persons_name:'Vishal', age:26,address:'Chandrapur', mobile:'+91 9921188037'},
        {persons_name:'Sakshi', age:24,address:'Parbhani', mobile:'+91 9921184037'}
    ]
   for( const person of persons) {
    console.log(person);
}


   /*for(let person=0;person<=persons.length-1;person++){
  //  console.log(persons);
  // }
}
function2() 
*/
  
/******IMP NOTE ***/
//interpolation means getting values from different variables and adding them to a string.
/*
function function3(){
    const persons=[
        {persons_name:'Ashwini', age:27,address:'Ahilyanahgar', mobile:'+91 9921188037'},
        {persons_name:'Dakshayanee', age:25,address:'Latur', mobile:'+91 9921188034'},
        {persons_name:'Vishal', age:26,address:'Chandrapur', mobile:'+91 9921188037'},
        {persons_name:'Sakshi', age:24,address:'Parbhani', mobile:'+91 9921184037'}
    ]
 for( let person of persons){
//     console.log(`persons_name=${person.persons_name}`)
//     console.log(`age= ${person.age}`)
//     console.log(`address=${person.address}`)
//     console.log(`mobile=${person.mobile}`)

// }
//****NOTE:***
//In JS we can access properties valuefrom object by above way which is interpolation in javascript by using ${} as well as 
//by taking properties as an array element shown as follows
console.log(`persons_name=${person['persons_name']}`)
    console.log(`age= ${person['age']}`)
    console.log(`address=${person['address']}`)
    console.log(`mobile=${person['mobile']}`)
}
}

function3()
/**OUTPUT:persons_name=Ashwini
age= 27
address=Ahilyanahgar
mobile=+91 9921188037
persons_name=Dakshayanee
age= 25
address=Latur
mobile=+91 9921188034
persons_name=Vishal
age= 26
address=Chandrapur
mobile=+91 9921188037
persons_name=Sakshi
age= 24
address=Parbhani
mobile=+91 9921184037 */

//----------------------------------------------------------
/*
function function4(){
    const persons=[
        {persons_name:'Ashwini', age:27,address:'Ahilyanahgar', mobile:'+91 9921188037'},
        {persons_name:'Dakshayanee', age:25,address:'Latur', mobile:'+91 9921188034'},
        {persons_name:'Vishal', age:26,address:'Chandrapur', mobile:'+91 9921188037'},
        {persons_name:'Sakshi', age:24,address:'Parbhani', mobile:'+91 9921184037'}
    ]
    //to get an new array from persons array with only persons_name and mobile,address
//     const persons1=[];
//  for( let person of persons){
// persons1.push({persons_name:person.persons_name,
//                        mobile:person.mobile,
//                        address:person.address
// })
// //Push:Appends new elements to the end of an array, and returns the new length of the array.

//  }
//  console.log(persons1);
//  console.log('-------------------');
//}
//other way
////to get an new array from persons array with only persons_name and mobile,address
persons1=persons.map((person)=>{
return{persons_name:person.persons_name,
    mobile:person.mobile,
    address:person.address
}
})
console.log(persons1);
 console.log('-------------------');
}
function4()
/*OUTPUT:
[
  {
    persons_name: 'Ashwini',
    mobile: '+91 9921188037',
    address: 'Ahilyanahgar'
  },
  {
    persons_name: 'Dakshayanee',
    mobile: '+91 9921188034',
    address: 'Latur'
  },
  {
    persons_name: 'Vishal',
    mobile: '+91 9921188037',
    address: 'Chandrapur'
  },
  {
    persons_name: 'Sakshi',
    mobile: '+91 9921184037',
    address: 'Parbhani'
  }
]*/ 

//----------------------------------------------------------------

/*
function function5(){
    const persons=[
        {persons_name:'Ashwini', age:27,address:'Ahilyanahgar', mobile:'+91 9921188037'},
        {persons_name:'Dakshayanee', age:25,address:'Latur', mobile:'+91 9921188034'},
        {persons_name:'Vishal', age:26,address:'Chandrapur', mobile:'+91 9921188037'},
        {persons_name:'Sakshi', age:24,address:'Parbhani', mobile:'+91 9921184037'}
    ]

  let persons1=persons[0]
        console.log(`persons_name:${persons1.persons_name}`),
        console.log(`age:${persons1.age}`),
        console.log(`address:${persons1.address}`),
        console.log(`mobile:${persons1.mobile}`)
    

   let persons2=persons.map((person)=>{
        return{persons_name:person.persons_name,
            mobile:person.mobile,
            address:person.address
        }
        })
        console.log(persons1);
        console.log(persons2);
         console.log('-------------------');
        }

function5()
/*OUTPUT:
{persons_name:Ashwini
    mobile:+91 9921188037
    address:Ahilyanahgar
    ----------------------------
    {
      persons_name: 'Ashwini',
      age: 27,
      address: 'Ahilyanahgar',
      mobile: '+91 9921188037'
    }
    [
      {
        persons_name: 'Ashwini',
        mobile: '+91 9921188037',
        address: 'Ahilyanahgar'
      },
      {
        persons_name: 'Dakshayanee',
        mobile: '+91 9921188034',
        address: 'Latur'
      },
      {
        persons_name: 'Vishal',
        mobile: '+91 9921188037',
        address: 'Chandrapur'
      },
      {
        persons_name: 'Sakshi',
        mobile: '+91 9921184037',
        address: 'Parbhani'
      }
    ]
    */

    //--------------------------------------------------
    /*
 function function6(){
    const persons=[
        {persons_name:'Ashwini', age:27,address:'Ahilyanahgar', mobile:'+91 9921188037'},
        {persons_name:'Dakshayanee', age:25,address:'Latur', mobile:'+91 9921188034'},
        {persons_name:'Vishal', age:26,address:'Chandrapur', mobile:'+91 9921188037'},
        {persons_name:'Sakshi', age:24,address:'Parbhani', mobile:'+91 9921184037'}
    ]

  let persons1=[]
  console.log( persons.filter((persons)=>(persons.age>=25)))
}
 
 function6()

 /*output:[
  {
    persons_name: 'Ashwini',
    age: 27,
    address: 'Ahilyanahgar',
    mobile: '+91 9921188037'
  },
  {
    persons_name: 'Dakshayanee',
    age: 25,
    address: 'Latur',
    mobile: '+91 9921188034'
  },
  {
    persons_name: 'Vishal',
    age: 26,
    address: 'Chandrapur',
    mobile: '+91 9921188037'
  }
]
*/




/********object using Object root function*******/
//Object is a root function given by Javascript
//In js we can create an object from Object root function we dont need to make an class to create an object
/*

function function1(){
    const persons1=new Object()
    persons1.name='Ashwini',
    persons1.address='A.Nagar',
    persons1.mobile='9876543210'

console.log(persons1)
}
function1()


*/

/********object using Constructor function*******/

//JS doesnt support class creation for the object creation so it provides construction function
//by convention an constructor function always start with upper case letter
/*
function Person(name,age,address){
    this.name= name,
    this.age=age,
    this.address=address
}
const p1=new Person('Neha',27,'Nagar')
console.log(p1)

const p2=new Person('Surabh',30,'Pune')
console.log(p2)

/*OUTPUT:
Person { name: 'Neha', age: 27, address: 'Nagar' }
Person { name: 'Surabh', age: 30, address: 'Pune' }
*/


//---------------------------
//object destructing
//extracting the properties from an object
//seprating the properties from an object into multiple prperties
/*
function function1(){
    const person={
        name:'person1',
        address:'Pune',
        mobile:'9876453210',
        email:'person1@gmail.com'
    }

    //insert into person(name,address,mobile,email)values(...)
    const query=`insert into person(name,address,mobile,email)values('${person.name}','${person.address}','${person.mobile}','${person.email}')`;
console.log(query)
console.log('-------------------------------------------')


//destructing an object
const {name,address,mobile,email}=person
}
function1()
/*
insert into person(name,address,mobile,email)values('person1','Pune','9876453210','person1@gmail.com')
-----------------------------------------------------
*/


//-----------------------REST Operator-------------------

//constructing an object person1 on top of existing object person with additional properties
///*
function function2(){
    const person={
        name:'Ashwini',
        address:'Pune',
       
    }
    console.log(person)
    console.log('-------------------------------------------')

    const peron1={
        name:person.name,
        address:person.address,
        mobile:'9876453210',
        email:'person1@gmail.com'
    }
    console.log(peron1)
    console.log('-------------------------------------------')

//by using rest operator
const person2={
       ...person,
        mobile:'9876453210',
        email:'Ashu@gmail.com'
    }
    console.log(person2)
    console.log('-------------------------------------------')

}
function2()    

/*OUTPUT:{ name: 'Ashwini', address: 'Pune' }
-------------------------------------------
{
    name: 'Ashwini',
    address: 'Pune',
    mobile: '9876453210',
    email: 'person1@gmail.com'
  }
  -------------------------------------------
  {
  name: 'Ashwini',
  address: 'Pune',
  mobile: '9876453210',
  email: 'Ashu@gmail.com'
}
-------------------------------------------
*/


function function3(){

}


/*JavaScript Strict Mode
Being a scripting language, sometimes the JavaScript code displays the correct result 
even it has some errors. To overcome this problem we can use the JavaScript strict mode.

The JavaScript provides "use strict"; expression to enable the strict mode. If there 
is any silent error or mistake in the code, it throws an error.

Note - The "use strict"; expression can only be placed as the first statement in a 
script or in a function.

EXAMPLE
<script>  
"use strict";  
x=10;  
console.log(x);  
</script>  
which will throw an error

------------------------------------------------------------

JAVASCRIPT PROMISE

In javascript, a Promise is an object which ensures to produce a single value in the
 future (when required). Promise in javascript is used for managing and
 tackling asynchronous operations.
**********
NEED FOR JS PROMISE----->

 Till now, we learned about events and callback functions for handling the data. But, its scope is limited. It is because events were not able to manage and operate asynchronous operations. Thus, Promise is the simplest and better approach for handling
  asynchronous operations efficiently.

There are two possible differences between Promise and Event Handlers:

1.A Promise can never fail or succeed twice or more. This can happen only once.
2.A Promise can neither switch from success to failure, or failure to success. 
If a Promise has either succeeded or failed, and after sometime, if any success/failure 
callback is added, the correct callback will be invoked, no matter the event
 happened earlier.

 *******Terminology of Promise********
A promise can be present in one of the following states:

1.pending: The pending promise is neither rejected nor fulfilled yet.
2.fulfilled: The related promise action is fulfilled successfully.
3.rejected: The related promise action is failed to be fulfilled.
4.settled: Either the action is fulfilled or rejected.
Thus, a promise represents the completion of an asynchronous operation with its result. It can be either successful completion of the promise, or its failure, but eventually completed.
 Promise uses a then() which is executed only after the completion of the promise resolve.



 *******Promises of Promise*********
A JavaScript Promise promises that:

1)Unless the current execution of the js event loop is not completed (success or failure),
 callbacks will never be called before it.

2)Even if the callbacks with then() are present, but they will be called only after the 
execution of the asynchronous operations completely.
3)When multiple callbacks can be included by invoking then() many times, each of them
will be executed in a chain, i.e., one after the other, following the sequence in which they were inserted.

******Advantages of using Promises******
1.A better option to deal with asynchronous operations.
2.Provides easy error handling and better code readability.


EXAMPLE:

<html>  
<head>  
<h2> Javascript Promise</h2>  
</br> </head>  
<body>  
<script>  
var p=new Promise(function(resolve, reject){  
var x= 2+3;  
if(x==5)  
    resolve(" executed and resolved successfully");  
else  
    reject("rejected");  
});  
 p.then(function(fromResolve){  
 document.write("Promise is"+fromResolve);  
 }).catch(function(fromReject){  
 document.write("Promise is "+fromReject);  
 });  
</script>  
</body>  
</html>  

JAVASCRIPT alert():
The alert() method in JavaScript is used to display a virtual alert box. It is mostly used to give
 a warning message to the users. It displays an alert dialog box that consists of some specified 
 message (which is optional) and an OK button. When the dialog box pops up,
 we have to click "OK" to proceed.
 <html>  
   <head>     
      <script type = "text/javascript">  
            function fun() {  
  
  
               alert ("This is an alert dialog box");  
            }  
      </script>       
   </head>  
     
   <body>  
      <p> Click the following button to see the effect </p>        
      <form>  
         <input type = "button" value = "Click me" onclick = "fun();" />  
      </form>       
   </body>  
</html>  

*/
