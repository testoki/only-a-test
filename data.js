// Beispielhafte Daten für diese Woche und letzte Woche
const workData = {
    thisWeek: [8, 7, 6, 8, 7, 7, 6], // Stunden von Montag bis Sonntag dieser Woche
    lastWeek: [7, 6, 8, 7, 7, 8, 6]  // Stunden von Montag bis Sonntag letzter Woche
};

// Funktion, um die Arbeitsdaten zu erhalten
function getWorkData(week) {
    if (week === 'thisWeek') {
        return workData.thisWeek; // Gibt die Arbeitsstunden dieser Woche zurück
    } else if (week === 'lastWeek') {
        return workData.lastWeek; // Gibt die Arbeitsstunden der letzten Woche zurück
    }
    return [];
}

// Funktion, um die Arbeitsdaten für diese Woche zu aktualisieren
function updateWorkData(newData) {
    workData.thisWeek = newData; // Ersetzt die Stunden dieser Woche mit neuen Daten
}

export { getWorkData, updateWorkData };
