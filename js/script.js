" use strict ";

/*
let num = 50;

if (num < 49) {
    console.log('wrong')
} else if (num > 100) {
    console.log('so big')
} else {
    console.log('good')
};

(num == 50) ? console.log("good") : console.log("not");

switch (num) {
    case num < 49:
        console.log("no");
        break;
    case num > 100:
        console.log("to-big");
        break;
    case 50:
        console.log("good");
        break;
    default:
        console.log("upss");
        break;
}
*/

/* let money,
    time,
    expens,
    moneyExpens,
    everyDay;

let appData = {
    budget: 0,
    timeData: '',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

function checkMoney() {
    money = +prompt("Ваш бюджет на месяц?");
    everyDay = money;
    time = prompt("Введите дату в формате YYYY-MM-DD");
    if (money && money > 0) {
        appData.budget = money;
        appData.timeData = time;
        console.log('Ваш бюджет на месяц ' + appData.budget);
    } else {
        alert('Данные введены не верно. Бюджет на месяц должен быть в числовом формате больше нуля.');
        checkMoney();
    }
}
checkMoney();

function checExpens() {
    expens = prompt('Введите обязательную статью расходов в этом месяце');
    moneyExpens = +prompt('Во сколько обойдётся');
    everyDay = everyDay - moneyExpens;
    if (moneyExpens && moneyExpens < money && everyDay > 0) {
        appData.expenses[expens] = moneyExpens;
    } else if ((moneyExpens && moneyExpens > money) || everyDay < 0) {
        console.log('С таким ежемесечным доходом вы не можете позволить себе такие траты');
    } else {
        console.log('Введите, пожалуйста, корректные данные');
    }
}
checExpens();
checExpens();
console.log('Бюджет на день ' + everyDay / 30); */


let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
}

let a1 = prompt("Введите обязательную статью расходов в этом месяце");
let a2 = prompt("Во сколько обойдется?");
let a3 = prompt("Введите обязательную статью расходов в этом месяце");
let a4 = prompt("Во сколько обойдется?");

appData.expenses = a1 = a2;
appData.expenses = a3 = a4;

console.log(appData);
alert(appData.budget / 30);
