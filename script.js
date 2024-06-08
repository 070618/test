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

    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (totalTime <= 0) {
        clearInterval(timer);
        alert('타이머가 끝났습니다!');
        document.getElementById('timer-display').textContent = '';
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