// Importiere die Funktionen, die wir brauchen
import { getWorkData, updateWorkData } from './data.js';
import { renderChart } from './chart.js';

// Funktion zum Aktualisieren des Diagramms mit den richtigen Daten
document.getElementById('refreshButton').addEventListener('click', function() {
    const data = getWorkData('thisWeek'); // Holt die Arbeitsstunden dieser Woche
    renderChart(data); // Aktualisiere das Diagramm mit den neuen Daten
});

// Initiales Diagramm rendern
const initialData = getWorkData('thisWeek'); // Holt die Arbeitsstunden der aktuellen Woche
renderChart(initialData); // Zeigt das Diagramm an
