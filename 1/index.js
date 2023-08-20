'use strict'

const date = new Date();
let hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

if (date.getSeconds() < 10) {
    seconds = `0${String(seconds)}`
}
if (date.getMinutes() < 10) {
    minutes = `0${String(minutes)}`
}
if (date.getHours() < 10) {
    hours = `0${String(hours)}`
}

const time = `${hours}:${minutes}:${seconds}`

console.log(`In this moment: ${time} `)

let swept_user = +prompt('Enter the number of seconds for which the time will be swept');

const swept_user_seconds = ((hours * 3600) + (minutes * 60) + seconds) + swept_user

let swept_hours = Math.floor(swept_user_seconds / 3600) % 24,
    swept_minutes = Math.floor((swept_user_seconds % 3600) / 60),
    swept_seconds = swept_user_seconds % 60;

if (swept_seconds < 10) {
    swept_seconds = `0${String(swept_seconds)}`
}
if (swept_minutes < 10) {
    swept_minutes = `0${String(swept_minutes)}`
}
if (swept_hours < 10) {
    swept_hours = `0${String(swept_hours)}`
}

const swept_time = `${swept_hours}:${swept_minutes}:${swept_seconds}`

console.log(`Time with swept: ${swept_time}`)