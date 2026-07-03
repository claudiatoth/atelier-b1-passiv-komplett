// ============================================
// EXERCIȚII - Atelier B1.2: Passiv komplett
// Claudia Toth · 5 exerciții cu rezolvări complete
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: Passiv Präsens / Präteritum — completează werden (wird/wurde/werden/wurden)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Das Haus ____ gebaut. (Präsens)', translation: 'Casa se construiește.', correct: 'wird', accept: ['wird'] },
    { id: 'b', sentence: 'Die Tür ____ geöffnet. (Präteritum)', translation: 'Ușa a fost deschisă / se deschidea.', correct: 'wurde', accept: ['wurde'] },
    { id: 'c', sentence: 'Die Autos ____ repariert. (Präsens, Plural)', translation: 'Mașinile se repară.', correct: 'werden', accept: ['werden'] },
    { id: 'd', sentence: 'Der Brief ____ geschrieben. (Präteritum)', translation: 'Scrisoarea a fost scrisă.', correct: 'wurde', accept: ['wurde'] },
    { id: 'e', sentence: 'Das Essen ____ gekocht. (Präsens)', translation: 'Mâncarea se gătește.', correct: 'wird', accept: ['wird'] },
    { id: 'f', sentence: 'Die Fenster ____ geputzt. (Präteritum, Plural)', translation: 'Ferestrele au fost curățate.', correct: 'wurden', accept: ['wurden'] },
    { id: 'g', sentence: 'Der Kuchen ____ gebacken. (Präsens)', translation: 'Prăjitura se coace.', correct: 'wird', accept: ['wird'] },
    { id: 'h', sentence: 'Die Stadt ____ zerstört. (Präteritum)', translation: 'Orașul a fost distrus.', correct: 'wurde', accept: ['wurde'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Passiv Präsens / Präteritum — completează werden. ⚙️</strong><br>
        <em>Reține:</em> Präsens = wird/werden · Präteritum = wurde/wurden (+ Partizip II).
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex1-${it.id}" placeholder="wird / wurde / werden / wurden">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const input = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EX 2: worden vs geworden (Passiv Perfekt vs „a deveni")
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Das Haus ist gebaut ____. (Passiv)', translation: 'Casa a fost construită.', correct: 'worden', accept: ['worden'] },
    { id: 'b', sentence: 'Er ist Arzt ____. (a devenit)', translation: 'A devenit medic.', correct: 'geworden', accept: ['geworden'] },
    { id: 'c', sentence: 'Die Fenster sind geputzt ____. (Passiv)', translation: 'Ferestrele au fost curățate.', correct: 'worden', accept: ['worden'] },
    { id: 'd', sentence: 'Es ist kalt ____. (s-a făcut frig)', translation: 'S-a făcut frig.', correct: 'geworden', accept: ['geworden'] },
    { id: 'e', sentence: 'Das Auto ist repariert ____. (Passiv)', translation: 'Mașina a fost reparată.', correct: 'worden', accept: ['worden'] },
    { id: 'f', sentence: 'Sie ist Lehrerin ____. (a devenit)', translation: 'A devenit profesoară.', correct: 'geworden', accept: ['geworden'] },
    { id: 'g', sentence: 'Der Kuchen ist gebacken ____. (Passiv)', translation: 'Prăjitura a fost coaptă.', correct: 'worden', accept: ['worden'] },
    { id: 'h', sentence: 'Alles ist teurer ____. (a devenit mai scump)', translation: 'Totul a devenit mai scump.', correct: 'geworden', accept: ['geworden'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 worden vs. geworden. 🎯</strong><br>
        <em>Reține:</em> Passiv Perfekt → <strong>worden</strong> (ajutor); „a deveni" → <strong>geworden</strong> (verb propriu).
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex2-${it.id}" placeholder="worden / geworden">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const input = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EX 3: Passiv mit Modalverben — completează Partizip II (Modalverb + P II + werden)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Das muss ____ werden. (machen)', translation: 'Asta trebuie făcută.', correct: 'gemacht', accept: ['gemacht'] },
    { id: 'b', sentence: 'Die Tür kann ____ werden. (öffnen)', translation: 'Ușa poate fi deschisă.', correct: 'geöffnet', accept: ['geöffnet', 'geoeffnet'] },
    { id: 'c', sentence: 'Die Regeln müssen ____ werden. (beachten)', translation: 'Regulile trebuie respectate.', correct: 'beachtet', accept: ['beachtet'] },
    { id: 'd', sentence: 'Das Formular soll ____ werden. (ausfüllen)', translation: 'Formularul trebuie completat.', correct: 'ausgefüllt', accept: ['ausgefüllt', 'ausgefuellt'] },
    { id: 'e', sentence: 'Der Fehler kann ____ werden. (korrigieren)', translation: 'Greșeala poate fi corectată.', correct: 'korrigiert', accept: ['korrigiert'] },
    { id: 'f', sentence: 'Die Rechnung muss ____ werden. (bezahlen)', translation: 'Factura trebuie plătită.', correct: 'bezahlt', accept: ['bezahlt'] },
    { id: 'g', sentence: 'Das Fenster darf nicht ____ werden. (öffnen)', translation: 'Fereastra nu are voie să fie deschisă.', correct: 'geöffnet', accept: ['geöffnet', 'geoeffnet'] },
    { id: 'h', sentence: 'Die Arbeit muss ____ werden. (erledigen)', translation: 'Munca trebuie făcută.', correct: 'erledigt', accept: ['erledigt'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Passiv mit Modalverben — completează Partizip II. 🔧</strong><br>
        <em>Reține:</em> Modalverb + <strong>Partizip II</strong> + werden (la final). Atenție: „werden", nu „worden".
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex3-${it.id}" placeholder="Partizip II...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const input = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EX 4: Diktat audio (Hedda)
// ============================================
const ex4Data = [
    { id: 'a', audio: 'audio/diktat-01.wav', text: 'Das Haus wird gebaut.', accept: ['Das Haus wird gebaut.'], ro: 'Casa se construiește.' },
    { id: 'b', audio: 'audio/diktat-02.wav', text: 'Die Tür wurde geöffnet.', accept: ['Die Tür wurde geöffnet.'], ro: 'Ușa a fost deschisă.' },
    { id: 'c', audio: 'audio/diktat-03.wav', text: 'Der Brief ist geschrieben worden.', accept: ['Der Brief ist geschrieben worden.'], ro: 'Scrisoarea a fost scrisă. (Perfekt)' },
    { id: 'd', audio: 'audio/diktat-04.wav', text: 'Das Auto muss repariert werden.', accept: ['Das Auto muss repariert werden.'], ro: 'Mașina trebuie reparată.' },
    { id: 'e', audio: 'audio/diktat-05.wav', text: 'Die Stadt wurde durch das Erdbeben zerstört.', accept: ['Die Stadt wurde durch das Erdbeben zerstört.'], ro: 'Orașul a fost distrus de cutremur.' },
    { id: 'f', audio: 'audio/diktat-06.wav', text: 'Hier wird Deutsch gesprochen.', accept: ['Hier wird Deutsch gesprochen.'], ro: 'Aici se vorbește germană.' },
    { id: 'g', audio: 'audio/diktat-07.wav', text: 'Die Fenster werden geputzt.', accept: ['Die Fenster werden geputzt.'], ro: 'Ferestrele se curăță.' },
    { id: 'h', audio: 'audio/diktat-08.wav', text: 'Das Problem kann gelöst werden.', accept: ['Das Problem kann gelöst werden.'], ro: 'Problema poate fi rezolvată.' }
];

function playDiktat(event, id) {
    event.preventDefault();
    event.stopPropagation();
    const audio = document.getElementById('diktat-audio-' + id);
    if (audio) { audio.currentTime = 0; audio.play().catch(() => {}); }
}

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎧 Diktat — ascultă și scrie propoziția (voce Hedda).</strong><br>
        <em>Sfat:</em> atenție la timp (wird/wurde/ist…worden) și la worden vs. werden.
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>
                    <button type="button" class="audio-btn" onclick="playDiktat(event, '${it.id}')" title="Ascultă" style="vertical-align:middle;">▶</button>
                    <span style="margin-left:8px;">Propoziția ${i + 1} — scrie ce auzi:</span>
                </label>
                <audio id="diktat-audio-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio>
                <input type="text" id="ex4-${it.id}" placeholder="Scrie propoziția...">
                <small style="color:#5A5147">💬 ${it.ro}</small>
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const input = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        const valid = [it.text, ...(it.accept || [])].map(normalizeAnswer);
        if (valid.includes(ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.text}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.text}`;
        }
    });
    return { correct, total: ex4Data.length };
}

// ============================================
// EX 5: Traducere RO → DE
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Casa se construiește. (Präsens)', correct: 'Das Haus wird gebaut.', accept: ['das haus wird gebaut.', 'das haus wird gebaut'] },
    { id: 'b', ro: 'Ușa a fost deschisă. (Perfekt)', correct: 'Die Tür ist geöffnet worden.', accept: ['die tür ist geöffnet worden.', 'die tuer ist geoeffnet worden', 'die tür wurde geöffnet', 'die tuer wurde geoeffnet'] },
    { id: 'c', ro: 'Mașina trebuie reparată. (Modal)', correct: 'Das Auto muss repariert werden.', accept: ['das auto muss repariert werden.', 'das auto muss repariert werden'] },
    { id: 'd', ro: 'Aici se vorbește germană.', correct: 'Hier wird Deutsch gesprochen.', accept: ['hier wird deutsch gesprochen.', 'hier wird deutsch gesprochen'] },
    { id: 'e', ro: 'Scrisoarea a fost scrisă ieri. (Präteritum)', correct: 'Der Brief wurde gestern geschrieben.', accept: ['der brief wurde gestern geschrieben.', 'der brief wurde gestern geschrieben'] },
    { id: 'f', ro: 'Problema poate fi rezolvată.', correct: 'Das Problem kann gelöst werden.', accept: ['das problem kann gelöst werden.', 'das problem kann geloest werden'] },
    { id: 'g', ro: 'Ferestrele se curăță. (Präsens, Plural)', correct: 'Die Fenster werden geputzt.', accept: ['die fenster werden geputzt.', 'die fenster werden geputzt'] },
    { id: 'h', ro: 'Orașul a fost distrus de cutremur. (durch)', correct: 'Die Stadt wurde durch das Erdbeben zerstört.', accept: ['die stadt wurde durch das erdbeben zerstört.', 'die stadt wurde durch das erdbeben zerstoert'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Traducere RO → DE.</strong><br>
        <em>Mix:</em> Passiv Präsens / Präteritum / Perfekt · mit Modalverben · agent durch.
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>🇷🇴 ${it.ro}</label>
                <input type="text" id="ex5-${it.id}" placeholder="Traducere în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const input = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

document.addEventListener('DOMContentLoaded', function () {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
