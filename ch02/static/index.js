let count = 0;
const numberDiv = document.getElementById('num');
const increaseBtn = document.getElementById('inc');
const sendBtn = document.getElementById('send');

increaseBtn.addEventListener('click', () => {
    count++;
    numberDiv.textContent = count;
});
sendBtn.addEventListener("click", function() {
    location.href='http://10.150.1.51:5000/save'+n
    n = 0;
    num.innerHTML = n;
})
