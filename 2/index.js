'use strict'

let hours = +prompt('Enter the hours');

if (hours >= 0 && hours <= 23) {
    if (hours < 10) {
        hours = `0${String(hours)}`
    } else if(hours == '' || hours == null) {
        hours = '00'
    }
} else {
    console.warn('Hours must be 0-23, value is set to zero');
    hours = '00';
}

let minutes = +prompt('Enter the minutes');

if (minutes >= 0 && minutes <= 59) {
    if (minutes < 10) {
        minutes = `0${String(minutes)}`;
    } else if(minutes == '' || minutes == null) {
        minutes = '00';
    }
} else {
    console.warn('Minutes must be 0-59, value is set to zero')
    minutes = '00';
}

let seconds = +prompt('Enter the seconds');

if (seconds >= 0 && seconds <= 59) {
    if (seconds < 10) {
        seconds = `0${String(seconds)}`;
    } else if(seconds == '' || seconds == null) {
        seconds = '00';
    }
} else {
    console.warn('Seconds must be 0-59, value is set to zero');
    seconds = '00';
}

const time = `${hours}:${minutes}:${seconds}`
console.log(time)