// ============================================
// FLASHCARDS - Atelier B1.2: Passiv komplett
// 32 carduri: 8 reguli + 8 propoziții + 8 vocab + 8 verbe
// Audio: WAV-uri Hedda în audio/letters/
// REGULĂ: EXACT 6 ghilimele ASCII per card — ZERO ghilimele interne!
// ============================================

const flashcardsData = [
    // ========== 8 reguli ==========
    { de: "Passiv = werden + Partizip II", ro: "accentul pe acțiune, nu pe cine face", audio: "audio/letters/01-grundlage.wav" },
    { de: "Präsens / Präteritum", ro: "wird / wurde + Partizip II (wird/wurde gebaut)", audio: "audio/letters/02-praesens-praeteritum.wav" },
    { de: "Perfekt", ro: "ist + Partizip II + worden (ist gebaut worden)", audio: "audio/letters/03-perfekt.wav" },
    { de: "worden ≠ geworden", ro: "Passiv = worden; a deveni = geworden", audio: "audio/letters/04-worden.wav" },
    { de: "Passiv mit Modalverben", ro: "Modalverb + Partizip II + werden (muss gemacht werden)", audio: "audio/letters/05-modalverben.wav" },
    { de: "Agent: von + Dativ", ro: "cine face (von den Arbeitern)", audio: "audio/letters/06-von.wav" },
    { de: "Agent: durch + Akkusativ", ro: "prin ce mijloc (durch das Erdbeben)", audio: "audio/letters/07-durch.wav" },
    { de: "Aktiv → Passiv", ro: "obiectul (Akkusativ) devine subiect (Nominativ)", audio: "audio/letters/08-aktiv-passiv.wav" },

    // ========== 8 propoziții ==========
    { de: "Das Haus wird gebaut.", ro: "Casa se construiește. (Präsens)", audio: "audio/letters/09-wird-gebaut.wav" },
    { de: "Die Tür wurde geöffnet.", ro: "Ușa a fost deschisă. (Präteritum)", audio: "audio/letters/10-wurde-geoeffnet.wav" },
    { de: "Der Brief ist geschrieben worden.", ro: "Scrisoarea a fost scrisă. (Perfekt)", audio: "audio/letters/11-ist-worden.wav" },
    { de: "Das Auto muss repariert werden.", ro: "Mașina trebuie reparată. (Modal)", audio: "audio/letters/12-muss-werden.wav" },
    { de: "Hier wird Deutsch gesprochen.", ro: "Aici se vorbește germană. (fără agent)", audio: "audio/letters/13-hier-wird.wav" },
    { de: "Die Stadt wurde durch das Erdbeben zerstört.", ro: "Orașul a fost distrus de cutremur. (durch)", audio: "audio/letters/14-durch-erdbeben.wav" },
    { de: "Das Problem kann gelöst werden.", ro: "Problema poate fi rezolvată.", audio: "audio/letters/15-kann-geloest.wav" },
    { de: "Er ist Arzt geworden.", ro: "A devenit medic. (geworden, NU Passiv!)", audio: "audio/letters/16-geworden.wav" },

    // ========== 8 vocab ==========
    { de: "das Passiv · das Aktiv", ro: "diateza pasivă · activă", audio: "audio/letters/17-passiv-aktiv.wav" },
    { de: "wird gemacht · wurde gemacht", ro: "se face · se făcea / a fost făcut", audio: "audio/letters/18-wird-wurde.wav" },
    { de: "ist gemacht worden", ro: "a fost făcut (Perfekt Passiv)", audio: "audio/letters/19-ist-worden-v.wav" },
    { de: "muss gemacht werden", ro: "trebuie făcut (Passiv + Modalverb)", audio: "audio/letters/20-muss-werden-v.wav" },
    { de: "von + Dativ · durch + Akkusativ", ro: "agentul: cine · prin ce mijloc", audio: "audio/letters/21-von-durch.wav" },
    { de: "gebaut · geöffnet · repariert", ro: "construit · deschis · reparat", audio: "audio/letters/22-partizipe1.wav" },
    { de: "geschrieben · gesprochen", ro: "scris · vorbit (Partizip II tari)", audio: "audio/letters/23-partizipe2.wav" },
    { de: "zerstört · gelöst · geputzt", ro: "distrus · rezolvat · curățat", audio: "audio/letters/24-partizipe3.wav" },

    // ========== 8 verbe ==========
    { de: "bauen (regulat) → gebaut", ro: "a construi — baute · hat gebaut", audio: "audio/letters/25-bauen-v.wav" },
    { de: "machen (regulat) → gemacht", ro: "a face — machte · hat gemacht", audio: "audio/letters/26-machen-v.wav" },
    { de: "öffnen (regulat) → geöffnet", ro: "a deschide — öffnete · hat geöffnet", audio: "audio/letters/27-oeffnen-v.wav" },
    { de: "schließen (tare) → geschlossen", ro: "a închide — schloss · hat geschlossen", audio: "audio/letters/28-schliessen-v.wav" },
    { de: "bringen (neregulat) → gebracht", ro: "a aduce — brachte · hat gebracht", audio: "audio/letters/29-bringen-v.wav" },
    { de: "zerstören (regulat) → zerstört", ro: "a distruge — zerstörte · hat zerstört", audio: "audio/letters/30-zerstoeren-v.wav" },
    { de: "werden (auxiliarul Passiv)", ro: "wird · wurde · ist … worden", audio: "audio/letters/31-werden-aux.wav" },
    { de: "sein + Partizip II (stare)", ro: "die Tür ist geöffnet = deschisă (rezultat)", audio: "audio/letters/32-zustandspassiv.wav" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri pentru atelierul Passiv komplett.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

let flashcardAudioEl = null;
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (flashcardAudioEl) { flashcardAudioEl.pause(); flashcardAudioEl.currentTime = 0; }
    flashcardAudioEl = new Audio(card.audio);
    flashcardAudioEl.play().catch(err => {
        console.warn('Audio nu poate fi redat:', err);
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(card.de);
            u.lang = 'de-DE';
            u.rate = 0.85;
            window.speechSynthesis.speak(u);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    buildFlashcards();
});
