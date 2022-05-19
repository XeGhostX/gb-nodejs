// input date format hh-DD-MM-YYYY
// example 10-10-10-2022 9-9-9-2022 12-12-12-2023
// npm run test 
const EventEmitter = require('events');
const getDateFromDateString = (dateString) => {
  console.log(dateString);
  const [ hour, day, month, year ] = dateString.split('-');

  return new Date(Date.UTC(year, month - 1, day, hour));
};

const showRemainingTime = (arrayTimers) => {
  const dateNow = new Date();

  let count = 0;
  console.clear();
  for (let timer of arrayTimers) {
    if (dateNow < timer) {
        count += 1; 
        const diff = Math.floor((timer - dateNow)/1000);

        console.log(diff + ' seconds');
      }
  }

  if (count == 0) {
    emitter.emit('timerEnd');
  }
};

const showTimerDone = (timerId) => {
  clearInterval(timerId);
  console.log('Таймер истек');
};

const emitter = new EventEmitter();

let arrayTimers = new Array();
for (let param of process.argv.slice(2)) {
  const dateInFuture = getDateFromDateString(param);
  arrayTimers.push(dateInFuture)
}

const timerId = setInterval(() => {
  emitter.emit('timerTick', arrayTimers);
}, 1000)

emitter.on('timerTick', showRemainingTime);
emitter.on('timerEnd', () => {
  showTimerDone(timerId);
});
