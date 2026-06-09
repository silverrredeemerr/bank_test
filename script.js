let balance = 12458.76;
let isHidden = false;

const balanceElement = document.getElementById('balance-amount');
const mainAccountElement = document.getElementById('main-account');
const toggleBtn = document.getElementById('toggle-balance');

// Оновлення балансу
function updateBalance() {
    if (isHidden) {
        balanceElement.textContent = "•••••• €";
        mainAccountElement.textContent = "•••••• €";
    } else {
        balanceElement.textContent = balance.toLocaleString('sk-SK', {minimumFractionDigits: 2}) + " €";
        mainAccountElement.textContent = balance.toLocaleString('sk-SK', {minimumFractionDigits: 2}) + " €";
    }
}

// Зміна балансу
function changeBalance(amount) {
    balance += amount;
    updateBalance();
}

// Випадковий баланс
function randomBalance() {
    balance = Math.floor(Math.random() * 25000) + 5000;
    updateBalance();
}

// Приховати/показати баланс
toggleBtn.addEventListener('click', () => {
    isHidden = !isHidden;
    toggleBtn.textContent = isHidden ? "🔒" : "👁️";
    updateBalance();
});

// Генерація фейкових транзакцій
function generateTransactions() {
    const transactions = [
        { title: "Lidl Bratislava", amount: -32.45, date: "Сьогодні" },
        { title: "Зарплата", amount: 1240.00, date: "Вчора" },
        { title: "Spotify", amount: -6.99, date: "3 дні тому" },
        { title: "Переказ від Івана", amount: 85.00, date: "5 днів тому" }
    ];

    const container = document.getElementById('transactions-list');
    container.innerHTML = '';

    transactions.forEach(t => {
        const div = document.createElement('div');
        div.className = 'transaction';
        div.innerHTML = `
            <div>
                <strong>${t.title}</strong><br>
                <small>${t.date}</small>
            </div>
            <div class="transaction-amount ${t.amount > 0 ? 'positive' : 'negative'}">
                ${t.amount > 0 ? '+' : ''}${t.amount.toFixed(2)} €
            </div>
        `;
        container.appendChild(div);
    });
}

// Ініціалізація
function init() {
    updateBalance();
    generateTransactions();
    
    // Оновлення часу
    setInterval(() => {
        const timeEl = document.getElementById('time');
        const now = new Date();
        timeEl.textContent = now.getHours().toString().padStart(2, '0') + ':' + 
                            now.getMinutes().toString().padStart(2, '0');
    }, 1000);
}

window.onload = init;
