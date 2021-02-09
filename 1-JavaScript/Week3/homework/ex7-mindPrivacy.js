'use strict';
/*------------------------------------------------------------------------------
1. Complete the `filterPrivateData()` function. It should take a single 
   argument: the array of employee records.
2. It should create a _new_ array, containing employee data without the private
   data.
3. Use ES5 object destructuring to extract the non-private properties from an 
   employee record (an `object`) and object literal shorthand to create a new 
   employee record with just the non-private parts.
4. Return the new array as the return value of the function.
------------------------------------------------------------------------------*/
const employeeRecords = [
  {
    name: 'John',
    occupation: 'developer',
    gender: 'M',
    email: 'john.doe@somewhere.net',
    salary: 50000,
  },
  {
    name: 'Jane',
    occupation: 'manager',
    gender: 'F',
    email: 'jane.eyre@somewhere.net',
    salary: 60000,
  },
];
// i tried 2 ways both give the right output but it doesn't path the npm test any way
function filterPrivateData(employeeRecords){
  const newArr = [];
  for(let i=0;i<employeeRecords.length;i++){
    newArr.push((({name,occupation,gender})=>({name,occupation,gender}))(employeeRecords[i]));
  }
  return newArr
}
// that is the second way
/*
function filterPrivateData(employeeRecords) {
  const newArr=[]
  let pr =['email','salary']
  for(let i=0;i<employeeRecords.length;i++){
    newArr.push(Object.keys(employeeRecords[i])
    .filter(key => !pr.includes(key))(({name,occupation,gender})=>({name,occupation,gender}))(employeeRecords[i]));
  return newArr
  }
 */



console.log(filterPrivateData(employeeRecords));

// ! Do not change or remove any code below
module.exports = {
  employeeRecords,
  filterPrivateData,
};
