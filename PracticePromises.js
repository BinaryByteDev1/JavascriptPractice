
// let promis = new Promise(function(resolve , reject) {

//     alert("HELLO"); 
//     resolve(100);
 
   
// });


// console.log("Hello one");
// console.log("Hello three");
// console.log(promis);


// let p = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log("Promise is FullFilled... ");
//         resolve();
//     }, 4000);
// });


// let p1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log("Promise is FullFilled... ");
//         resolve();
//     }, 4000)
// });

// p1.then(() => {
//     console.log("Hello");
// }).then(()=>{
//     console.log("Hii");
// })

// let p2 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         return reject("Error");
//         console.log("Promise is FullFilled... ");
        
//     }, 4000)
// });

// p2.catch((err) => {
//     console.log(err);
// })


// let p3 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         return reject();
//         console.log("Promise is FullFilled... ");
        
//     }, 6000)
// }).catch((err) => {
//     console.log("Server Error 404...");
// });




                    // EXAMPLE 2
                    // EXAMPLE 2

// function goodMorning() {
//     return new Promise((resolve  , reject ) => {
//             setTimeout(() => {
//                 console.log("Good Morning...")  
//                 resolve();
//         }, 3000);
//     })
        
// }

// function goodAfterNoon() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("Good Afternoon...");
//             resolve();
//         }, 1000);
//     })
       
// }

// function goodEvening() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("Good Evening...");
//             resolve();
//         }, 200);
//     })

// }
// goodMorning().then(goodAfterNoon).then(goodEvening);









        // EXAMPLE 1
        // EXAMPLE 1

// const p1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log("Hii i am resolve 1...");
//         resolve();
//     } ,2000)
// })

// p1.then(() => {
//     const p2 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve("Hii i am resolve p2...");
//         }, 3000);
//     })
//     return p2;
// }).then((val) => {
//     console.log(val)
// }).then(() => {
    
//     const p3 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("I am done...");
//         }, 1000);
//     })
// })







        // EXAMPLE 2
        // EXAMPLE 2

// const p1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log("Hii i am p1 i am done ...");
//         resolve();
//     } ,2000)
// })

// p1.then(() => {
//     const p2 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve("Hii i am p2 i am done ...");  
//         }, 3000);
//     })
//     return p2;
// }).then((val ) => {
//     console.log(val);
// }).then(() => {

//     const p3 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve("Hii i am p3 i am done ...");
//         }, 3000);
//     })
//     return p3;
// }).then((val ) => {
//     console.log(val);
// }).then(() => {
//     setTimeout(() => {
//         document.body.style.background = "red";
//     }, 2000)
// })





        // EXAMPLE 3
        // EXAMPLE 3

// const p1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log("Hii i am p1 i am done ...");
//         resolve();
//     } ,2000)
// })

// p1.then(() => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve("Hii i am p2 i am done ...");  
//         }, 3000);
//     })
// }).then((val ) => {
//     console.log(val);
// }).then(() => {

//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve("Hii i am p3 i am done ...");
//         }, 3000);
//     })
// }).then((val ) => {
//     console.log(val);
// }).then(() => {
//     setTimeout(() => {
//         document.body.style.background = "red";
//         console.log("Body background changed...")
//     }, 2000)
// })





// Promise handling
// Promise handling
// Promise handling





// const p1 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve(100);
//         }, 3000);
// }).then((value) => {
//         console.log(value);
// }).then(() => {
//         return new Promise((resolve , reject) => {
//                 setTimeout(() => {
//                         resolve("Hello i am Done");     
//                 }, 4000);
//         })
       
// }).then((value) => {
//         console.log(value);
// }).then(() => {
        
//         document.body.style.background = "orange";
//         setTimeout(() => {
//                 console.log("background color change");
//         }, 2000);
// }).then(() => {
//         console.log("HII")
// })    


// const p1 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Hello i am done ")
//         }, 2000);
// }).then((value) => {
//         console.log(value);
// })
// p1.then(() => {
//         console.log("HILAL")
//         return new Promise((resolve  , reject) => {
//                 setTimeout(() => {
//                         resolve(100);   
//                 }, 3000);   
//         })
// }).then((value) => {
//         console.log(value);
// }).then(() => {
//         setTimeout(() => {
//                 document.body.style.background = "royalblue";

//                 setTimeout(() => {
//                        console.log("color changed") 
//                 }, 2000);

//         }, 3000);
// })


// Promise API methods
// Promise API methods


// let p1 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve(1);
//         }, 3000);
// })

// let p2 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve(2);
//         }, 1000);
// })

// let p3 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve(3);  
//         }, 4000);
// })



// p1.then((value) => {
//         console.log(value);

//         p2.then((value) => {
//                 console.log(value);

//                 p3.then((value) => {
//                         console.log(value);
//                 })
//         })
// })

// p3.then(() => {
//         setTimeout(() => {
//         document.body.style.background = "royalblue";

//         }, 2000);
// })




                // Promise.all
                // Promise.all
// let p1 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 1 is Done");
//         }, 3000);
// })
// let p2 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 2 is Done");
//         }, 1000);
// })
// let p3 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 3 is Done");  
//         }, 4000);
// })

// let promise_all = Promise.all([p1 , p2 , p3])

// promise_all.then((value) => {
//         value.forEach(e => {
//                 console.log(e)
//         });
// }).then(() => {
//         console.log("Background Changed")
//         document.body.style.background = "red";
// })





                // Promise.allSettled
                // Promise.allSettled
// let p1 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 1 is Done");
//         }, 3000);
// })
// let p2 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 2 is Done");
//         }, 1000);
// })
// let p3 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 reject(new Error("Resolve 3 is Done"));  
//         }, 4000);
// })

// let promise_all = Promise.allSettled([p1 , p2 , p3])

// promise_all.then((value) => {
//         console.log(value)
// });




                // Promise.race
                // Promise.race

// let p1 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 1 is Done");
//         }, 3000);
// })
// let p2 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 2 is Done");
//         }, 4000);
// })
// let p3 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 reject(new Error("Resolve 3 is Done"));  
//         }, 4000);
// })

// let promise_all = Promise.race([p1 , p2 , p3])

// promise_all.then((value) => {
//         console.log(value)
// });




  

                // Promise.any
                // Promise.any
// let p1 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 1 is Done");
//         }, 3000);
// })
// let p2 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 2 is Done");
//         }, 4000);
// })
// let p3 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 reject(new Error("Resolve 3 is Done"));  
//         }, 1000);
// })

// let promise_all = Promise.any([p1 , p2 , p3])

// promise_all.then((value) => {
//         console.log(value)
// });




                // Promise.resolve
                // Promise.resolve
// let p1 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 1 is Done");
//         }, 3000);
// })
// let p2 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 2 is Done");
//         }, 4000);
// })
// let p3 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 3 is Done");

//         }, 1000);
// })

// let promise_all = Promise.resolve("Hilal")

// promise_all.then((value) => {
//         console.log(value)
// });



                // Promise.reject
                // Promise.reject
// let p1 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 1 is Done");
//         }, 3000);
// })
// let p2 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 2 is Done");
//         }, 4000);
// })
// let p3 = new Promise((resolve , reject) => {
//         setTimeout(() => {
//                 resolve("Resolve 3 is Done");

//         }, 1000);
// })

// let promise_all = Promise.reject(new Error("OOPS Error !!!"));

// promise_all.then((value) => {
//         console.log(value)
// });





                // Async /  Await
                // Async /  Await

// const p1 = new  Promise((resolve , reject) => {
//         setTimeout(() => {
//                 console.log("P1 is Resolve...")
//                 resolve();
//         }, 3000);
// });

// const p2 = new  Promise((resolve , reject) => {
//         setTimeout(() => {
//                 console.log("P2 is Resolve...")
//                 resolve();
//         }, 1000);
// });

// const p3 = new  Promise((resolve , reject) => {
//         setTimeout(() => {
//                 console.log("P3 is Resolve...")
//                 resolve();
//         }, 2000);
// });


// async function accessing() {
//         await p1;
//         await p2;
//         await p3;

// }

// accessing().then(() => {
//         document.body.style.background = "red";
// }); 



                // Async /  Await
                // Async /  Await

// function goodMorning(){
//         return new Promise((resolve , reject) => {
//                 setTimeout(() => {
//                         console.log("Good Morning...");
//                         resolve();
//                 }, 2000);
//         })
// }
// function goodAfterNoon(){
//         return new Promise((resolve , reject) => {
//                 setTimeout(() => {
//                         console.log("Good AfterNoon...");
//                         resolve();
//                 }, 1000);
//         })
// }
// function goodEvening(){
//         return new Promise((resolve , reject) => {
//                 setTimeout(() => {
//                         console.log("Good Evening...");
//                         resolve();
//                 }, 4000);
//         })
// }
// function goodNight(){

//         return new Promise((resolve , reject) => {
//                 setTimeout(() => {
//                         console.log("Good Night...");
//                         resolve();
//                 }, 2000);
//         })  
// }


// async function Accssing(){
//         try{
//                 await goodMorning();
//                 await goodAfterNoon();
//                 await goodEvening();
//                 await goodNight();

//         }catch(err){
//                 console.log(err)
//         }
// }
// Accssing().then(() => {
//         document.write("<h1>Application Working Properly....</h1>");

// }).then((value = "royalblue") => {
//         setTimeout(() => {
//                  document.body.style.background = value;       
//         }, 3000);

// });




                // Async /  Await example 2
                // Async /  Await example 2

// async function greeting() {
//         console.log("Hello");
// }
// greeting();


// async function greeting() {
//         return 10;
// }
// greeting().then((value) => {
//         alert(value);
// });




// async function accessWeather() {
//                 const KashmirWeather = new Promise((resolve , reject) => {
//                         setTimeout(() => {
//                                 resolve("27 Degree Celcius"); 
//                         }, 3000);
//                 })
//                 const DelhiWeather = new Promise((resolve , reject) => {
//                         setTimeout(() => {
//                                 // reject(new Error("Server 404 Error")); 
//                                 resolve("32 Degree Celcius"); 

//                         }, 5000);
//                 })
//                 const BagloreWeather = new Promise((resolve , reject) => {
//                         setTimeout(() => {
//                                 resolve("35 Degree Celcius"); 
//                         }, 9000);
//                  })
//                 console.log("Fetching Kashmir Weather please wait...")
//                 let KashmirW = await KashmirWeather
//                 console.log("Fetched Kashmir weather : "+KashmirW);
//                 console.log("Fetching Delhi Weather please wait...")
//                 let DelhiW = await DelhiWeather
//                 console.log("Fetched Delhi weather : "+DelhiW);
//                 console.log("Fetching Baglore Weather please wait...")                
//                 let BagloreW = await BagloreWeather
//                 console.log("Fetched Baglore weather : "+BagloreW);
//                 return [KashmirW , DelhiW , BagloreW]; 
// }   
// let access = accessWeather();
// access.then((value) => {
//         console.log(value);
// }).catch((err) => {
//         console.log(err);
// })


// try{
//         throw new Error("Server Error 404 is occurd");
// }
// catch(error) {
//         console.log(error.name);
//         console.log(error.message);


// }


// try{
//         let age = prompt("Enter your age :- ");
//         age = Number.parseInt(age);

//         if(age > 120){
//                 throw new Error("Age is probebly Wrong.")
//         }
// }
// catch(error) {
//         console.log(error)
//         console.log(error.name)
//         console.log(error.message)

// }
 

// try{
//         let a = 0;
//         console.log(program);
//         console.log("Program runs");
// }
// catch(err) {
//         console.log("This is an Error")
//         console.log(h);
// }
// finally{
//         console.log("i always runs")
// }


// function accessing() {
//         try{
//                 let a = 0;
//                 console.log(program);
//                 console.log("Program runs");
//                 // return
//         }
//         catch(err) {
//                 console.log("This is an Error")
//                 // console.log(h);
//         }
//         finally{
//                 console.log("i always runs")
//         }
// }
// accessing();

// try{
//         throw new Error("OOPS")
// }
// catch({name , message}) {
//         console.log(name);
//         console.log(message);
// }
// finally{
//         console.log("Execution and Program is End");
// }

(()=> {
        try{
                try{
                        throw new Error("OOPS");
                }
        
                catch(err) {
                        console.log("inner message :" , err.message);
                        throw new Error("this is outer Error");
                }
        
                finally{
                        console.log("Finally i will success")
                        return;
                }
        }
        catch(err) {
                console.log("OuterTry Error : " , err.message);
        }
})();