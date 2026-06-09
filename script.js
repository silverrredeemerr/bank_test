let mainBalance = 502.00;

function updateBalances() {
    document.getElementById('main-balance').textContent = 
        mainBalance.toLocaleString('sk-SK', {minimumFractionDigits: 2}) + " €";
}

function makeTransfer() {
    const amount = prompt("Скільки хочеш переказати? (€)", "50");
    if (amount) {
        mainBalance -= parseFloat(amount);
        updateBalances();
        alert(`Переказ на ${amount} € виконано! (імітація)`);
    }
}

function switchTab(tab) {
    alert(`Перехід на вкладку ${['Domov', 'Platby', 'Prehľady', 'Ja'][tab]} — можна розширити далі`);
}

function init() {
    updateBalances();
    const timeEl = document.getElementById('time');
    setInterval(() => {
        const now = new Date();
        timeEl.textContent = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
    }, 60000);
}

window.onload = init;
