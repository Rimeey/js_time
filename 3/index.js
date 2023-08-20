'use strict'

let hours = +prompt('Enter the hours');

if (hours >= 0 && hours <= 23) {
    hours=hours
} else {
    console.warn('Hours must be 0-23, value is set to zero');
    hours = '00';
}

let minutes = +prompt('Enter the minutes');

if (minutes >= 0 && minutes <= 59) {
    minutes=minutes
} else {
    console.warn('Minutes must be 0-59, value is set to zero')
    minutes = '00';
}

let seconds = +prompt('Enter the seconds');

if (seconds >= 0 && seconds <= 59) {
    seconds=seconds
} else {
    console.warn('Seconds must be 0-59, value is set to zero');
    seconds = '00';
}

const user_seconds = ((hours * 3600) + (minutes * 60) + seconds);

console.log(`Your time in seconds: ${user_seconds}`)