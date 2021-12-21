var form = document.getElementById('signupForm');
var firstName = document.getElementById('firstName');
var age = document.getElementById('age');
function gift(age) {
    return +age + 3;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (+age.value < 18) {
        console.log('Inscription refusée !');
    }
    else {
        console.log("\n  Bienvenue ".concat(firstName.value, ".\n  Vous avez ").concat(age.value, " ans.\n  Vous aurez droit \u00E0 un cadeau quand vous aurez ").concat(gift(+age.value), " ans !"));
    }
});
var member = {
    level: ['admin', 1]
};
member.level[0] = 'moderator';
console.log(member.level);
var car = {
    color: 'red',
    date: 2020,
    speed: 500
};
console.log(car.color);
// EXERCICES
// EXERCICE 1 WILD CODE SCHOOL
function hello(name) {
    console.log('Hello ' + name + ' !!');
}
var surName = 'Bob';
hello(surName);
hello(surName + ' Marley');
function concat(a, b) {
    return a + b;
}
var wcs = concat('Wild ', concat('Code ', 'School'));
console.log(wcs);
