// Datei, um mit einer API zu kommunizieren, die die Arbeitsdaten dynamisch lädt oder speichert

// Dummy-Funktion, um Daten von einer API zu holen
async function fetchWorkData() {
    // Beispielhafte API-URL (hier simuliert)
    const response = await fetch('https://api.example.com/workdata');
    const data = await response.json();
    return data;
}

// Dummy-Funktion, um die Arbeitsdaten an eine API zu senden
async function saveWorkData(data) {
    const response = await fetch('https://api.example.com/workdata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
}

export { fetchWorkData, saveWorkData };
