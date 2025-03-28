// Initiale Anzahl an Cookies
let cookieCount = 0;
let cookiesPerClick = 1;
let upgradeCost = 10;

// Referenzen zu den HTML-Elementen
const cookieButton = document.getElementById('cookieButton');
const cookieCountElement = document.getElementById('cookieCount');
const cookiesPerClickElement = document.getElementById('cookiesPerClick');
const upgradeButton = document.getElementById('upgradeButton');

// Funktion, die ausgeführt wird, wenn der Benutzer auf den Cookie klickt
cookieButton.addEventListener('click', function() {
    cookieCount += cookiesPerClick; // Cookies hinzufügen
    updateDisplay(); // Anzeige aktualisieren
});

// Funktion, um die Anzeige zu aktualisieren
function updateDisplay() {
    cookieCountElement.textContent = `Cookies: ${cookieCount}`;
    cookiesPerClickElement.textContent = `Cookies pro Klick: ${cookiesPerClick}`;
}

// Funktion, um das Upgrade zu kaufen
upgradeButton.addEventListener('click', function() {
    if (cookieCount >= upgradeCost) {
        cookieCount -= upgradeCost; // Cookies für das Upgrade abziehen
        cookiesPerClick += 1; // Erhöht die Anzahl an Cookies pro Klick
        upgradeCost *= 2; // Der Preis für das nächste Upgrade verdoppelt sich
        updateDisplay(); // Anzeige aktualisieren
    } else {
        alert('Nicht genügend Cookies für das Upgrade!');
    }
});

// Initiale Anzeige
updateDisplay();
