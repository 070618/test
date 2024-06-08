let timer;
let stopwatchInterval;
let totalTime = 0;
let stopwatchTime = 0;
let originalBackground;
let stopwatchVisible = true;

function startTimer() {
    clearInterval(stopwatchInterval); // 스톱워치 중지
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    totalTime = (minutes * 60) + seconds;

    if (totalTime <= 0) {
        alert('0 이상의 시간을 설정하세요.');
        return;
    }

    originalBackground = document.body.style.backgroundColor; // 현재 배경색 저장
    document.body.style.backgroundColor = getRandomColor(); // 랜덤 배경색 적용

    document.getElementById('timer-display').textContent = formatTime(totalTime);
    document.getElementById('alarm-message').classList.add('hidden');
    document.getElementById('alarm-clock').classList.remove('shake');

    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (totalTime <= 0) {
        clearInterval(timer);
        document.getElementById('timer-display').textContent = '';
        document.getElementById('alarm-message').classList.remove('hidden');
        document.getElementById('alarm-clock').classList.add('shake');
        
        setTimeout(resetApp, 15000); // 15초 후에 초기화 함수 호출
        return;
    }

    totalTime--;
    document.getElementById('timer-display').textContent = formatTime(totalTime);
}

function startStopwatch() {
    clearInterval(timer); // 타이머 중지
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    } else {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
    }
}

function updateStopwatch() {
    stopwatchTime++;
    document.getElementById('stopwatch-display').textContent = formatTime(stopwatchTime);
}

function toggleStopwatchDisplay() {
    const stopwatchDisplay = document.getElementById('stopwatch-display');
    stopwatchVisible = !stopwatchVisible;
    stopwatchDisplay.style.display = stopwatchVisible ? 'block' : 'none';
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function resetTimer() {
    clearInterval(timer);
    clearInterval(stopwatchInterval);
    totalTime = 0;
    stopwatchTime = 0;
    document.getElementById('timer-display').textContent = '';
    document.getElementById('stopwatch-display').textContent = '';
}

function resetApp() {
    document.body.style.backgroundColor = originalBackground; // 원래 배경색으로 복원
    document.getElementById('minutes').value = ''; // 분 입력 필드 초기화
    document.getElementById('seconds').value = ''; // 초 입력 필드 초기화
    document.getElementById('timer-display').textContent = ''; // 타이머 표시 초기화
    document.getElementById('stopwatch-display').textContent = ''; // 스톱워치 표시 초기화
    document.getElementById('alarm-message').classList.add('hidden'); // 알림 메시지 숨김
    document.getElementById('alarm-clock').classList.remove('shake'); // 흔들림 효과 제거
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}