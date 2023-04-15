window.onload = function () {
  let seconds = 00;
  let tens = 00;

  const appendSeconds = document.getElementById("seconds");
  const appendTens = document.getElementById("tens");
  const buttonPause = document.getElementById("button-pause");
  const buttonStart = document.getElementById("button-start");
  const buttonReset = document.getElementById("button-reset");

  let interval;

  buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  buttonPause.onclick = function () {
    clearInterval(interval);
  };

  buttonReset.onclick = function () {
    clearInterval(interval);
    seconds = "00";
    tens = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
  };

  function startTimer() {
    tens++;

    if (tens < 10) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + tens;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
