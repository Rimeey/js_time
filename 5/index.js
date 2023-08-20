'use strict'

let hours = +prompt('Enter the 1hours');
if (hours < 10) {
    hours = `0${String(hours)}`;
}

let minutes = +prompt('Enter the 1minutes');
if (minutes < 10) {
    minutes = `0${String(minutes)}`;
}

let seconds = +prompt('Enter the 1seconds');
if (seconds < 10) {
    seconds = `0${String(seconds)}`;
}

const first_time = `${hours}:${minutes}:${seconds}`;
console.log(`First time: ${first_time}`);

let user_seconds1 = (hours * 3600) + (minutes * 60) + seconds;

hours = +prompt('Enter the 2hours');
if (hours < 10) {
    hours = `0${String(hours)}`;
}

minutes = +prompt('Enter the 2minutes');
if (minutes < 10) {
    minutes = `0${String(minutes)}`;
}

seconds = +prompt('Enter the 2seconds');
if (seconds < 10) {
    seconds = `0${String(seconds)}`;
}

const second_time = `${hours}:${minutes}:${seconds}`;
console.log(`Second time: ${second_time}`);

let user_seconds2 = (hours * 3600) + (minutes * 60) + seconds;

const time_diff_seconds = user_seconds2 - user_seconds1;

let hours_diff = Math.floor(time_diff_seconds / 3600),
    minutes_diff = Math.floor((time_diff_seconds % 3600) / 60),
    seconds_diff = time_diff_seconds % 60;

if (hours_diff < 0) {
    hours_diff = hours_diff + 24;
}

if (hours_diff < 10) {
    hours_diff = `0${String(hours_diff)}`;
}

if (minutes_diff < 10) {
    minutes_diff = `0${String(minutes_diff)}`;
}

if (seconds_diff < 10) {
    seconds_diff = `0${String(seconds_diff)}`;
}

const diff = `${hours_diff}:${minutes_diff}:${seconds_diff}`;
console.log(`Time difference: ${diff}`);
