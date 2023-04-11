//          Assignment-02

// Question-01
// function closure(fistNum) {
//     return function (secondNum) {
//         console.log(fistNum + secondNum);
//     }
// }
// let myClosure = closure(5)
// myClosure(3);


// Question-02

// function searchNum(myArr, num) {
//     if (myArr[0] !== num) {
//         // debugger
//         if (myArr.length === 0){
//             console.log(false);
//         }
//          else if (myArr.length !== 0){
//         searchNum(myArr.slice(1), num);
//          }
//     }
//     else {
//         console.log (true);
//         }
//     }
// let myArr = [ 20, 2, 23, 45, 78, 88, 4, 3, 1237 ];

// searchNum(myArr, 1237);


// Question-03

// function myParaFun(text) {
//     let newPara = document.createElement("p");
//     text = document.createTextNode(text);
//     newPara.appendChild(text);
//     let myContainer = document.getElementById("container");
//     myContainer.appendChild(newPara);
// }
// myParaFun("This is my new paragraph.");


// Question-04

// function myListFunc(text) {
//     let parentList = document.getElementById("unorderList");
//     let childList = document.createElement("li");
//     childList.appendChild(document.createTextNode(text));
//     parentList.appendChild(childList);
//   }
//   myListFunc("asslamualikum to evey one");


// Question-05

// function myColorFunc(myId, color) {
//     let newPara = "This is my  new paragraph";
//      document.getElementById(myId).innerText = newPara;
//      document.getElementById(myId).style.backgroundColor = color;
// }
// myColorFunc("myPara2", "#f00");


// Question-06

// function myUsersFunc(user, obj) {
//     let previousUsers = localStorage.getItem("user1");
//     let users = previousUsers ? JSON.parse(previousUsers) : [];
//     users.push(obj);
//     let stringyfiy = JSON.stringify(users);//convert it to string
//     localStorage.setItem(user, stringyfiy);//save it to Localstorage
// }
// myUsersFunc("user1", {
//     name: "Ashraf",
//     rollNO: 90818,
//     teacher: "Sir Nadir",
//     className: "Javascript"
// });
// myUsersFunc("user1", {
//     name: "Ali",
//     rollNO: 42821,
//     teacher: "Sir Ishaq",
//     className: "Typescript"
// });


// Question-07

// The following function Sets  Objects in  LocalSorage.

// function myUsersFunc(user, obj) {
//     let previousUsers = localStorage.getItem("user1");
//     let users = previousUsers ? JSON.parse(previousUsers) : [];
//     users.push(obj);
//     let stringyfiy = JSON.stringify(users);//convert it to string
//     localStorage.setItem(user, stringyfiy);//save it to Localstorage
// }
// myUsersFunc("user1", {
//     name: "Ashraf",
//     rollNO: 90818,
//     teacher: "Sir Nadir",
//     className: "Javascript"
// });

// The following function retrive  Objects from LocalSorage whith the help of Key.

// function myUsersFunc(user) {
//     let previousUsers = localStorage.getItem("user1");
//      user = previousUsers ? JSON.parse(previousUsers) : [];
//      console.log(user);
// }
// myUsersFunc("user1");


// Question-08

// function myUsersFunc(obj) {
//     let users = obj;
//     let myNewObj = JSON.stringify(users);
//     for (let myProperty in users) {
//         localStorage.setItem(myProperty, users[myProperty]);//save it to Localstorage
//     }
//     let checkUsers = myNewObj ? JSON.parse(myNewObj) : [];
//     console.log(checkUsers);
// }
// myUsersFunc({
//     name: "Ashraf",
//     rollNO: 90818,
//     teacher: "Sir Nadir",
//     className: "Javascript"
// });
