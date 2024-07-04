const circularProgressBar = document.querySelector("#circularProgressBar");
const circularProgressBarNumber = document.querySelector(
  "#circularProgressBar .progressValue"
);
const buttonTypePomodoro = document.querySelector("#buttonTypePomodoro");
const buttonTypeShortBreak = document.querySelector("#buttonTypeShortBreak");

const audio = new Audio("alarm.mp3");

const pomodoroTimerInSeconds = 1500; // 60 segundos * 25 minutos
const shortBreakTimerInSeconds = 300; // 60 segundos * 5 minutos
const TIMER_TYPE_POMODORO = "POMODORO";
const TIMER_TYPE_SHROT_BREAK = "SHORTBREAK";

let progressInterval; // variavel que guarda o setInterval
let pomodoroType = TIMER_TYPE_POMODORO;
let timerValue = pomodoroTimerInSeconds
let multiplierFactor = 360 / timerValue