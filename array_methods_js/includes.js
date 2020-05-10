// You can find if an element is included in an array ~ returns a boolean

const names = ['Florin', 'Ivan', 'Liam']
const res = names.includes('Ivan')
// const res = names.includes('Wayne')
console.log('Does Ivan appear in the list? ', res)

const fruits = ['Apple', 'Orange', 'Mango'];
const r = fruits.includes('Orange');
if (r) {
    console.log('Yes we bought an orange')
}
else {
    console.log('Sad...Let\'s buy an orange');
}