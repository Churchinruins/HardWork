let lang = 'en';
let weekDays;
if (lang === 'ru') {
    weekDays = ('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang === 'en') {
    weekDays = ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}

let langDay = 'ru';
let days;
switch (langDay) {
    case 'ru':
        days = ('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;
    case 'en':
        days = ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
        break;
}

let namePerson = "Артем";
let role = namePerson === "Артем" ? "директор" :
    namePerson === "Александр" ? "преподаватель" :
        "студент";

console.log(weekDays);
console.log(days);
console.log(role);


function hardWorkLesson(text) {
    if (typeof text !== 'string') {
        return "Тут должна быть строка, СТРОГО";
    }
    const stringWithoutSpace = text.trim();
    if (stringWithoutSpace.length > 30) {
        return stringWithoutSpace.slice(0, 30) + "...";
    }
    return stringWithoutSpace;
}

console.log(hardWorkLesson(12344565))



function checkForNumber() {
    const input = prompt("Только число плес");
    return input === null ? null : +input.trim() || null;
}

let isNumber = checkForNumber();
console.log(isNumber);


let onlyFourAndTwo = ["23478", "45656", "72385", "23456", "84154", "45997", "34789"];

onlyFourAndTwo.forEach(number => {
    if (number.startsWith("2") || number.startsWith("4")) {
        console.log(number);
    }
});

function MultiDigitNumbers(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let num = 1; num <= 100; num++) {
    if (MultiDigitNumbers(num)) {
        console.log(`${num}: 1, ${num}`);
    }
}