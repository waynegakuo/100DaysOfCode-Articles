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