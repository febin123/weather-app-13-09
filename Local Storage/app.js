//store data in local storage
localStorage.setItem('name','febin');
localStorage.setItem('age',50);

//get data from local storage
const a=localStorage.getItem('name');
console.log(a);

//updating data
localStorage.setItem('name','babu');
const b=localStorage.getItem('name');
console.log(b);

//deleting data from local storage
localStorage.removeItem('name');

//deleting all data
localStorage.clear();
