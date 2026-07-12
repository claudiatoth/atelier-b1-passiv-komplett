// PDF BUILDER — Atelier B1.2: Passiv komplett
(function () {
    if (typeof document === 'undefined') return;
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildCast() + buildTheory() + buildExercises() + buildFlashcards() + buildVerbs() + buildSolutions();
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs" — Atelier B1.2: Passiv komplett</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Berlin</div></div>
                <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">Berlin</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucatar · Potsdam</div></div>
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara</div></div>
                <div class="cast-card"><img src="images/acar.png" alt="Acar"><div class="name">Acar</div><div class="detail">Maistru · Oranienburg</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#F5F0E8[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter">📘 1. Teorie — Passiv komplett (toate timpurile)</h1>` + t;
    }

    function fillInBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div>`;
        data.forEach((it, i) => {
            const blanked = it.sentence.replace(/_{2,}/g, `<span class="fill-blank"></span>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${blanked}</div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function translateBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div>
            <table class="match-table"><thead><tr><th style="width:50%">🇷🇴 Română</th><th>🇩🇪 Germană (scrie tu)</th></tr></thead><tbody>`;
        data.forEach(it => {
            h += `<tr><td class="ro-text">${it.ro}</td><td><div class="write-line"></div></td></tr>`;
        });
        h += `</tbody></table></div>`;
        return h;
    }

    function diktatBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div>`;
        data.forEach((it, i) => {
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">🇷🇴 ${it.ro}</div><div class="write-line"></div></div></div>`;
        });
        return h + `</div>`;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 2. Exerciții — de rezolvat</h1>
            <p class="ex-intro">✏️ Printează și rezolvă exercițiile de mai jos. <strong>Toate rezolvările sunt la finalul materialului</strong> (capitolul „✅ Soluții").</p>`;
        if (typeof ex1Data !== 'undefined') {
            html += fillInBlock('Übung 1 — Passiv Präsens / Präteritum ⚙️', 'Präsens = wird/werden · Präteritum = wurde/wurden (+ Partizip II).', ex1Data);
        }
        if (typeof ex2Data !== 'undefined') {
            html += fillInBlock('Übung 2 — worden vs. geworden 🎯', 'Passiv Perfekt → worden (ajutor); „a deveni" → geworden (verb propriu).', ex2Data);
        }
        if (typeof ex3Data !== 'undefined') {
            html += fillInBlock('Übung 3 — Passiv mit Modalverben 🔧', 'Modalverb + Partizip II + werden (la final). Atenție: „werden", nu „worden".', ex3Data);
        }
        if (typeof ex4Data !== 'undefined') {
            html += diktatBlock('Übung 4 — Diktat (Hörverstehen)', 'Atenție la timp (wird/wurde/ist…worden) și la worden vs. werden.', ex4Data);
        }
        if (typeof ex5Data !== 'undefined') {
            html += translateBlock('Übung 5 — Traducere RO → DE', 'Mix: Passiv Präsens/Präteritum/Perfekt · mit Modalverben · agent durch.', ex5Data);
        }
        return html;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> ale atelierului.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }

    function buildVerbs() {
        let html = `<h1 class="chapter new-section">🔁 4. Verbele atelierului — Präsens · Präteritum · Perfekt</h1>
            <div class="andreea-note">
                <div class="andreea-note-content">
                    <div class="speaker">📌 Andreea îți spune:</div>
                    <div>Toate cele 6 verbe sunt tranzitive (obiect Akkusativ) → pot fi puse la Passiv. Partizipul II apare identic la Perfekt și la Passiv: gebaut, gemacht, geöffnet, geschlossen (TARE), gebracht (neregulat), zerstört. Auxiliarul de Passiv e werden (wird / wurde / ist … worden). Toate verificate pe PONS. Präteritum = imperfect.</div>
                </div>
            </div>`;
        if (typeof verbsData !== 'undefined') {
            verbsData.forEach((v, idx) => {
                let badgeClass = 'weak', badgeLabel = 'REGULAT';
                if (v.typ && v.typ.indexOf('tare') === 0) { badgeClass = 'strong'; badgeLabel = 'TARE (neregulat)'; }
                else if (v.typ && v.typ.indexOf('Modal') === 0) { badgeClass = 'aux'; badgeLabel = 'MODALVERB'; }
                else if (v.typ && v.typ.indexOf('aux') === 0) { badgeClass = 'aux'; badgeLabel = 'AUXILIAR (neregulat)'; }
                const auxClass = v.aux === 'sein' ? 'sein' : 'haben';
                html += `<div class="verb-card">
                    <div class="vh"><span class="name">${idx + 1}. ${v.inf}</span><span class="ro">— ${v.ro}</span>
                        <span class="badge ${badgeClass}">${badgeLabel}</span>
                        <span class="badge ${auxClass}">Perfekt + ${v.aux}</span></div>
                    <h5>Präsens (prezent)</h5>
                    <table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                v.praes.forEach(row => { html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`; });
                html += `</tbody></table>`;
                if (v.praet) {
                    html += `<h5>Präteritum (imperfect)</h5><table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                    v.praet.forEach(row => { html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`; });
                    html += `</tbody></table>`;
                }
                if (v.perf && v.part) {
                    const perfRow = v.perf[2] || v.perf[0];
                    html += `<h5>Perfekt (pe scurt)</h5><div class="perfekt-box">
                        <div class="de">Auxiliar <strong>${v.aux}</strong> + participiul <strong>${v.part}</strong></div>
                        <div class="de" style="margin-top:3px">Exemplu: ${perfRow[0] || 'er'} <strong>${perfRow[1]}</strong></div>
                        <div class="ro">${perfRow[2]}</div></div>`;
                }
                if (v.note) html += `<div class="note"><strong>⚠️ </strong>${v.note}</div>`;
                html += `</div>`;
            });
        }
        return html;
    }

    // ============================================
    // 5. SOLUȚII — toate rezolvările (la finalul PDF, model TV1)
    // ============================================
    function buildSolutions() {
        let html = `<h1 class="chapter new-section">✅ 5. Soluții — toate rezolvările</h1>
            <p class="ex-intro">Verifică-ți răspunsurile după ce ai rezolvat exercițiile din capitolul „📝 Exerciții".</p>`;
        function solFill(title, data) {
            let h = `<div class="ex-block"><h3>${title}</h3>`;
            data.forEach((it, i) => {
                const ctx = it.sentence.replace(/_{2,}/g, `[ ${it.correct} ]`);
                h += `<div class="sol-item"><span class="sol-num">${i + 1}.</span> <strong>${it.correct}</strong> <span class="sol-ctx">(${ctx})</span></div>`;
            });
            return h + `</div>`;
        }
        function solTranslate(title, data) {
            let h = `<div class="ex-block"><h3>${title}</h3>`;
            data.forEach((it, i) => { h += `<div class="sol-item"><span class="sol-num">${i + 1}.</span> ${it.ro} → <strong>${it.correct}</strong></div>`; });
            return h + `</div>`;
        }
        function solDiktat(title, data) {
            let h = `<div class="ex-block"><h3>${title}</h3>`;
            data.forEach((it, i) => { h += `<div class="sol-item"><span class="sol-num">${i + 1}.</span> <strong>${it.text}</strong> <span class="sol-ctx">🇷🇴 ${it.ro}</span></div>`; });
            return h + `</div>`;
        }
        if (typeof ex1Data !== 'undefined') html += solFill('Übung 1 — Passiv Präsens / Präteritum', ex1Data);
        if (typeof ex2Data !== 'undefined') html += solFill('Übung 2 — worden vs. geworden', ex2Data);
        if (typeof ex3Data !== 'undefined') html += solFill('Übung 3 — Passiv mit Modalverben', ex3Data);
        if (typeof ex4Data !== 'undefined') html += solDiktat('Übung 4 — Diktat', ex4Data);
        if (typeof ex5Data !== 'undefined') html += solTranslate('Übung 5 — Traducere RO → DE', ex5Data);
        return html;
    }
})();
