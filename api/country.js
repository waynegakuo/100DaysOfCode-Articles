async function findCountry() {
    const country = await fetch('https://restcountries.eu/rest/v2/all');

    const data = await country.json(); // Return response 'country' as json format

    const countryNames = data.map(i => i.name); // Take country names from response ('data') and put inside countryNames array

    let output = '' // Empty string

    countryNames.forEach(i => {
        output += `<option id="countryN" value="${i}">${i}</option>`
    });

    document.getElementById('country').innerHTML = output; // Populating on frontend ~ Manipulation of the DOM

    // console.log(countryNames); // Checking if country names are in array
}

// Calling function to populate in the select tag in the HTML
findCountry();

const burger = document.getElementById('burger');

// Adding information to the database section
burger.addEventListener('click', () => {
    const countryValue = document.getElementById('country').value; // Getting country selected from user
    const name = document.getElementById('name'); // Getting name from user

    // insert into database
    console.log('User has selected country name: ', countryValue);
    alert('User has selected country name: ' + countryValue);
});

const getPerson = () => {
  return;
  {
    fullName: 'Wayne Gakuo';
  }
};

// console.log(getPerson());

async function getUsers() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users', {
    });
    
    const data = await result.json();
  
    const users = data;
  
    users.forEach(async (i) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${i.id}`
      );
      const datas = await res.json();
      console.log(datas.name);
    });
    // return users;
  }
  
  getUsers();
  
  async function printUsers() {
    const res = await getUsers();
    console.log('Hey there', res);
  }
  // printUsers()
  
  let user = {
    //create the user object
    showAccess: true, //create and set showAccess property of user
  };
  let premiumUser = {
    //repeat of the above for this object
    ads: false,
  };
  
  premiumUser.__proto__ = user; //user is the prototype of premiumUser
  
  console.log(premiumUser.showAccess); // "true"
  
  // // Closures
  const getSecret = (secret) => {
    return {
      get: () => secret,
    };
  };
  const obj = getSecret(25);
  
  obj.get();

  
  const hello = (message) => {
    message = String (message)
    return (typeof message)
  }
  hello (1)
  
  let response = await fetch('/article/fetch/post/image', {
          method: 'POST',
          body: blob
        });
  
  