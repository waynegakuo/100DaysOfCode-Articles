// items are added to the localStorage or sessionStorage as key-value pairs
// One gets an item using the key from the localStorage

// localStorage
localStorage.setItem('name', 'Wayne')
console.log('Adding item in localStorage: ', localStorage.getItem('name'))
localStorage.removeItem('name')
console.log('After removing item from localStorage: ', localStorage.getItem('name'))

// sessionStorage
sessionStorage.setItem('name', 'John')
console.log('Added item in sessionStorage: ', sessionStorage.getItem('name'))
sessionStorage.removeItem('name')
console.log('After removing item from sessionStorage: ', sessionStorage.getItem('name'))

// Cookies ~ only use cookies if you want to send it to the server
// We can set the expiry date of the cookie using UTC String, JS dates 
// year 2021, January [starts from index 0], on 1st
document.cookie = 'name=Kyle; expires = '+ new Date(2021, 0, 1).toUTCString() 
document.cookie = 'lastName=Jacob; expires = '+ new Date(2021, 0, 1).toUTCString() 

//only way to view cookies is to view all that are there
console.log(document.cookie)