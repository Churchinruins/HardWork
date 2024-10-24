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