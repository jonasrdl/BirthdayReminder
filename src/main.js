const birthdays = require('../birthdays.json');

const day = new Date().getDate().toString();
const month = (new Date().getMonth() + 1).toString();

console.log(`Today is: ${day}.${month}\n`)

for (let i = 0; i < birthdays.length; i++) {
  const birthdayDay = birthdays[i].datum.split('.');
  const birthdayMonth = birthdays[i].datum.split('.');

  if (birthdayDay[0] === day && birthdayMonth[1] === month) {
    console.log(`Today (${day}.${month}) is ${birthdays[i].name}'s Birthday!`);
    console.log("------------------------------------------------------");
  }
}

for (let i = 0; i < birthdays.length; i++) {
  console.log(`${birthdays[i].name}: ${birthdays[i].datum}`)
}