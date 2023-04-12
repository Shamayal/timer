let commandLineArg = process.argv.slice(2).sort((a, b) => a - b); //sort may not be necessary

for (let time of commandLineArg) {
  if (commandLineArg.length > 0 && time > 0 && Number(time)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}

/* test cases

node timer1.js 10 3 5 15 9

edge cases:
1. no numbers provided, no beeps
2. negative number, no beeps
3. input not a number, no beeps

*/