" use strict ";

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