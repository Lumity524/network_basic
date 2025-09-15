let count = 0;
const numberDiv = document.getElementById('num');
const increaseBtn = document.getElementById('inc');
const sendBtn = document.getElementById('send');

increaseBtn.addEventListener('click', () => {
    count++;
    numberDiv.textContent = count;
});

sendBtn.addEventListener('click', () => {
    alert('현재 숫자: ' + count + ' 전송!');
});

