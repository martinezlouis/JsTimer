let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

// Start Timer Event
document.getElementById('startTimer').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

// Pause Timer Event
document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(int);
});

// Reset Timer Event
document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = '00 : 00 : 00 : 000';
});

// Display Timer Function
function displayTimer() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');
    let ms = String(milliseconds).padStart(3, '0');

    timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

// Timer Countdown Function
function startCountdown() {
    // Clear any existing timer if active
    clearInterval(int);

    // Get the time input from the user
    let time = parseInt(document.getElementById("timeInput").value);

    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    // Timer countdown function
    int = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        // Format minutes and seconds with leading zero
        document.getElementById("display").innerText =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Stop the timer when time reaches zero
        if (time <= 0) {
            clearInterval(int);
            document.getElementById("display").innerText = "Time's up!";
        } else {
            time--;
        }
    }, 1000);
}

// Start Countdown Event
document.getElementById('startCountdown').addEventListener('click', startCountdown);
