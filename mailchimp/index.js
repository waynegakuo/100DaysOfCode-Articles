async function subscribeSomeoneToMailChimpList() {
    const res = await fetch('https://us4.api.mailchimp.com/3.0/lists/007ba0d0f9/members/waynejotham@gmail.com/events?name=virtualretreat&apikey=a6e4d41db34208e5ae54893178ace6e9-us4')
    return response.json()
}
subscribeSomeoneToMailChimpList().then(data => {
    console.log(data); // JSON data parsed by `response.json()` call
});