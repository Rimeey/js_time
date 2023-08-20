'use strict'

let user_seconds = +prompt('Enter the seconds');

let hours = Math.floor(user_seconds / 3600) % 24,
    minutes = Math.floor((user_seconds % 3600) / 60),
    seconds = user_seconds % 60;


if (hours < 10) {
    hours = `0${String(hours)}`
}
if (minutes < 10) {
    minutes = `0${String(minutes)}`;
}
if (seconds < 10) {
    seconds = `0${String(seconds)}`;
}

const time = `${hours}:${minutes}:${seconds}`
console.log(`Your seconds: ${user_seconds} in time this: ${time}`)