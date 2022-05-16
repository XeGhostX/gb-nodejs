const colors = require('colors');

//Get arg
const args = process.argv.slice(2)
const arg0 = Number(args[0]);
const arg1 = Number(args[1]);

//Check arg
if (Number.isNaN(arg0) || Number.isNaN(arg1)) {
    console.log(colors.red('Arg none or is not Number'));
    process.exit(1);
}

let count = 0

if (arg0 > arg1) {
    b = arg1
    n = arg0
} else {
    b = arg0
    n = arg1
}

//Calc simple number
for (let i = b; i <= n; i++) {
    let flag = 1;
    if (i > 2 && i % 2 != 0) {
        for (let j = 3; j * j <= i; j = j + 2) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
    }
    else if (i != 2) flag = 0;
    if (flag == 1) {
        count++;
        step = count % 3;
        if (step == 1) {
            console.log(colors.green(i));
        } else if (step == 2) {
            console.log(colors.yellow(i));
        } else {
            console.log(colors.red(i));
        }
    }
}

//Check result
if(count==0) {
    console.log(colors.red("No simple number found"));
}
