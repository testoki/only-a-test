// Daten für das Diagramm der Arbeitsstatistiken
const workData = {
    thisWeek: [8, 7, 6, 8, 7, 7, 6], // Stunden von Montag bis Sonntag in dieser Woche
    lastWeek: [7, 6, 8, 7, 7, 8, 6]  // Stunden von Montag bis Sonntag in letzter Woche
};

// Funktion, um das Diagramm zu aktualisieren
function renderChart(data) {
    const chartContainer = document.getElementById('chart-container');
    chartContainer.innerHTML = ''; // Leeren des Containers vor der Neuanzeige
    
    // Erstellen eines einfachen Balkendiagramms
    const canvas = document.createElement('canvas');
    chartContainer.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Diagramm erstellen
    new Chart(ctx, {
        type: 'bar', // Balkendiagramm
        data: {
            labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
            datasets: [{
                label: 'Arbeitsstunden',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Funktion zum Aktualisieren der Daten
document.getElementById('refreshButton').addEventListener('click', function() {
    renderChart(workData.thisWeek); // Diagramm mit aktuellen Arbeitsdaten rendern
});

// Initiales Diagramm rendern
renderChart(workData.thisWeek);
