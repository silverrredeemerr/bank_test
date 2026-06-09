let mainBalance = 502.00;

function updateBalances() {
    document.getElementById('main-balance').textContent = 
        mainBalance.toLocaleString('sk-SK', {minimumFractionDigits: 2}) + " €";
}

function init() {
    updateBalances();
    
    // Час
    setInterval(() => {
        const timeEl = document.getElementById('time');
        const now = new Date();
        timeEl.textContent = now.getHours().toString().padStart(2,'0') + ':' + 
                            now.getMinutes().toString().padStart(2,'0');
    }, 10000);
}

window.onload = init;
