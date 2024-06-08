let timer;
let totalTime;

function startTimer() {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    totalTime = (minutes * 60) + seconds;

    if (totalTime <= 0) {
        alert('0 이상의 시간을 설정하세요.');
        return;
    }

    document.getElementById('timer-display').textContent = formatTime(totalTime);
    document.getElementById('alarm-message').classList.add('hidden');

    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (totalTime <= 0) {
        clearInterval(timer);
        document.getElementById('timer-display').textContent = '';
        document.getElementById('alarm-message').classList.remove('hidden');
        return;
    }

    totalTime--;
    document.getElementById('timer-display').textContent = formatTime(totalTime);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}