 // Executes a given function on every items of an array and returns true
// only if the callback function returns a truthy value for all the items inside the array. 
// If falsy, it will return false immediately

 const numbers = [1, 2, 3, 4, 5]
 // const numbers = [1, 2, -1, 3, 4, 5]
 
 function isPositive(item){
   return item > 0;
 }
 
 const res = numbers.every(isPositive)
 console.log(res) // true because all the elements are greater than zero, false if otherwise, i.e even if one is less than zero
 
 // Use case: test if we have an array of objects if all the objects inside that array have a certain property
 
 const people = [
   {
      name: 'Wayne'
   },
   {
     name: 'Florin'
   },
   {
     name: 'Liam'
   },
   {
     surname: 'Doe'
   }
 ];
 
//  const people = [{name: 'Wayne'},{name: 'Florin'},{name: 'Liam'},{name: 'Doe'}]; ~ for testing purposes
 
 const result = people.every(person => person.name !== undefined);
 console.log(result) // we get false because we have a property other than name, ie surname
 
 // array of arrays
 const numberArr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
//  const numberArr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], '123' ] ~ for testing purposes
 
 const r = numberArr.every(arr => Array.isArray(arr));
 console.log('NumberArr is an array ', r)