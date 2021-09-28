const listOfFortunes = [
  "You will be blessed with great health and longevity.",
  "Expect an exciting new change this month.",
  "You will soon be ready to make change for the better.",
  "You will need to make an important decision soon, lead with your first instinct.",
  "You have many abilities, choose to spend your time using them to do what brings you joy.",
  "You will notice that music will be an important part of your life this week.",
];

const dailyInspo = [
  "You often feel tired, not because you've done too much, but because you've done too little of what sparks a light within you.",
  "I feel that there is nothing more truly artistic than to love people. - Vincent van Gogh",
  "Whatever makes you feel the sun from the inside out, chase that. - Gemma Troy",
  "The most basic and powerful way to connect to another person is to listen. Just listen. Perhaps the most important thing we ever give each other is our attention. -Rachel Naomi Remen",
  "No amount of security is worth the suffering of a mediocre life chained to a routine that has killed your dreams. -Maya Mendoza",
];

const userAdvice = [];

function sendTheFortune(req, res) {
  let randomIndex = Math.floor(Math.random() * listOfFortunes.length);
  res.status(200).send(listOfFortunes[randomIndex]);
}

function sendDailyInspo(req, res) {
  let randomIndex = Math.floor(Math.random() * dailyInspo.length);
  res.status(200).send(dailyInspo[randomIndex]);
}

function storeUserAdvice(req, res) {
  console.log(req.body);
  const { value } = req.body;
  console.log(value);
  userAdvice.push(value);
  console.log(userAdvice);
  res.status(200).send("Advice submitted successfully!");
}

module.exports = {
  sendTheFortune,
  sendDailyInspo,
  storeUserAdvice,
};
