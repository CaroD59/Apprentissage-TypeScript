const form = document.getElementById('signupForm');
const firstName = document.getElementById('firstName') as HTMLInputElement;
const age = document.getElementById('age') as HTMLInputElement;

function gift(age: number) {
  return +age + 3;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (+age.value < 18) {
    console.log('Inscription refusée !');
  } else {
    console.log(`
  Bienvenue ${firstName.value}.
  Vous avez ${age.value} ans.
  Vous aurez droit à un cadeau quand vous aurez ${gift(+age.value)} ans !`);
  }
});

const member: {
  level: [string, number];
  // = TUPLE (≠ ARRAY)
} = {
  level: ['admin', 1],
};

member.level[0] = 'moderator';
console.log(member.level);

let car = {
  color: 'red',
  date: 2020,
  speed: 500,
};

console.log(car.color);

// EXERCICES
