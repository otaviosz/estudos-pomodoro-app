const circularProgressBar = document.querySelector("#circularProgressBar");
const circularProgressBarNumber = document.querySelector(
  "#circularProgressBar .progress-value"
);
const buttonTypePomodoro = document.querySelector("#buttonTypePomodoro");
const buttonTypeShortBreak = document.querySelector("#buttonTypeShortBreak");

const audio = new Audio("alarm.mp3");

const pomodoroTimerInSeconds = 1500; // 60 segundos * 25 minutos
const shortBreakTimerInSeconds = 300; // 60 segundos * 5 minutos
const TIMER_TYPE_POMODORO = "POMODORO";
const TIMER_TYPE_SHORT_BREAK = "SHORTBREAK";

let progressInterval; // variavel que guarda o setInterval
let pomodoroType = TIMER_TYPE_POMODORO;
let timerValue = pomodoroTimerInSeconds;
let multiplierFactor = 360 / timerValue;

// Função para transformar segundos em formato MM:SS

function formatNumberInStringMinute(number) {
  const minutes = Math.trunc(number / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.trunc(number % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

const startTimer = () => {
  progressInterval = setInterval(() => {
    timerValue--;
    setInfoCircularProgressBar();
  }, 1000);
};

const stopTimer = () => clearInterval(progressInterval);

const resetTimer = () => {
  clearInterval(progressInterval);

  timerValue =
    pomodoroType === TIMER_TYPE_POMODORO
      ? pomodoroTimerInSeconds
      : shortBreakTimerInSeconds;

  multiplierFactor = 360 / timerValue;
  setInfoCircularProgressBar();
  audio.stop();
};

function setInfoCircularProgressBar() {
  if (timerValue === 0) {
    stopTimer();
    audio.play();
  }

  circularProgressBarNumber.textContent = `${formatNumberInStringMinute(
    timerValue
  )}`;

  circularProgressBar.style.background = `  background: conic-gradient(${
    timerValue * multiplierFactor
  })deg, var(--purple) 0deg )`;
}

const setPomodoroType = (type) => {
  pomodoroType = type;

  if (type === TIMER_TYPE_POMODORO) {
    buttonTypeShortBreak.classList.remove("active");
    buttonTypePomodoro.classList.add("active");
  } else {
    buttonTypePomodoro.classList.remove("active");
    buttonTypeShortBreak.classList.add("active");
  }

  resetTimer();
};
