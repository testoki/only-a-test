// Funktion, um das Diagramm basierend auf den Daten zu erstellen

import { Chart } from 'chart.js';

function renderChart(data) {
    const chartContainer = document.getElementById('chart-container');
    chartContainer.innerHTML = ''; // Leeren des Containers vor der Neuanzeige
    
    // Erstellen eines Canvas-Elements für das Diagramm
    const canvas = document.createElement('canvas');
    chartContainer.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Diagramm erstellen
    new Chart(ctx, {
        type: 'bar', // Balkendiagramm
        data: {
            labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'], // Wochentage
            datasets: [{
                label: 'Arbeitsstunden',
                data: data, // Die Stunden werden hier übergeben
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

export { renderChart };
