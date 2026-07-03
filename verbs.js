// ============================================
// VERB-KONJUGATION - Atelier B1.2: Passiv komplett
// 6 verbe PONS-verified: bauen, machen, öffnen, schließen, bringen, zerstören
// Toate tranzitive (obiect Akkusativ) → pot fi puse la Passiv. Partizip II apare în Passiv.
// Badge: tare/neregulat (rosu) · regulat (verde). Präteritum = IMPERFECT.
// ============================================

const verbsData = [
    {
        inf: 'bauen', ro: 'a construi (→ gebaut)', typ: 'regulat', aux: 'haben', part: 'gebaut',
        praes: [
            ['ich','baue','construiesc'],['du','baust','construiești'],['er/sie/es','baut','construiește'],
            ['wir','bauen','construim'],['ihr','baut','construiți'],['sie/Sie','bauen','construiesc']
        ],
        praet: [
            ['ich','baute','construiam'],['du','bautest','construiai'],['er/sie/es','baute','construia'],
            ['wir','bauten','construiam (noi)'],['ihr','bautet','construiați'],['sie/Sie','bauten','construiau']
        ],
        perf: [
            ['ich','habe gebaut','am construit'],['du','hast gebaut','ai construit'],['er/sie/es','hat gebaut','a construit'],
            ['wir','haben gebaut','am construit'],['ihr','habt gebaut','ați construit'],['sie/Sie','haben gebaut','au construit']
        ],
        note: 'Verb REGULAT. Partizip II gebaut → Passiv: Das Haus wird gebaut / ist gebaut worden.'
    },
    {
        inf: 'machen', ro: 'a face (→ gemacht)', typ: 'regulat', aux: 'haben', part: 'gemacht',
        praes: [
            ['ich','mache','fac'],['du','machst','faci'],['er/sie/es','macht','face'],
            ['wir','machen','facem'],['ihr','macht','faceți'],['sie/Sie','machen','fac']
        ],
        praet: [
            ['ich','machte','făceam'],['du','machtest','făceai'],['er/sie/es','machte','făcea'],
            ['wir','machten','făceam (noi)'],['ihr','machtet','făceați'],['sie/Sie','machten','făceau']
        ],
        perf: [
            ['ich','habe gemacht','am făcut'],['du','hast gemacht','ai făcut'],['er/sie/es','hat gemacht','a făcut'],
            ['wir','haben gemacht','am făcut'],['ihr','habt gemacht','ați făcut'],['sie/Sie','haben gemacht','au făcut']
        ],
        note: 'Verb REGULAT. Partizip II gemacht → Passiv: Das muss gemacht werden.'
    },
    {
        inf: 'öffnen', ro: 'a deschide (→ geöffnet)', typ: 'regulat', aux: 'haben', part: 'geöffnet',
        praes: [
            ['ich','öffne','deschid'],['du','öffnest','deschizi'],['er/sie/es','öffnet','deschide'],
            ['wir','öffnen','deschidem'],['ihr','öffnet','deschideți'],['sie/Sie','öffnen','deschid']
        ],
        praet: [
            ['ich','öffnete','deschideam'],['du','öffnetest','deschideai'],['er/sie/es','öffnete','deschidea'],
            ['wir','öffneten','deschideam (noi)'],['ihr','öffnetet','deschideați'],['sie/Sie','öffneten','deschideau']
        ],
        perf: [
            ['ich','habe geöffnet','am deschis'],['du','hast geöffnet','ai deschis'],['er/sie/es','hat geöffnet','a deschis'],
            ['wir','haben geöffnet','am deschis'],['ihr','habt geöffnet','ați deschis'],['sie/Sie','haben geöffnet','au deschis']
        ],
        note: 'Verb REGULAT (-e- de ajutor: öffnest, öffnete). Partizip II geöffnet → Passiv: Die Tür wird/kann geöffnet werden.'
    },
    {
        inf: 'schließen', ro: 'a închide (→ geschlossen)', typ: 'tare / neregulat', aux: 'haben', part: 'geschlossen',
        praes: [
            ['ich','schließe','închid'],['du','schließt','închizi'],['er/sie/es','schließt','închide'],
            ['wir','schließen','închidem'],['ihr','schließt','închideți'],['sie/Sie','schließen','închid']
        ],
        praet: [
            ['ich','schloss','închideam'],['du','schlossest','închideai'],['er/sie/es','schloss','închidea'],
            ['wir','schlossen','închideam (noi)'],['ihr','schlosst','închideați'],['sie/Sie','schlossen','închideau']
        ],
        perf: [
            ['ich','habe geschlossen','am închis'],['du','hast geschlossen','ai închis'],['er/sie/es','hat geschlossen','a închis'],
            ['wir','haben geschlossen','am închis'],['ihr','habt geschlossen','ați închis'],['sie/Sie','haben geschlossen','au închis']
        ],
        note: 'Verb TARE (ie→o: schloss, geschlossen). Partizip II geschlossen → Passiv: Die Tür wird geschlossen.'
    },
    {
        inf: 'bringen', ro: 'a aduce (→ gebracht)', typ: 'tare / neregulat', aux: 'haben', part: 'gebracht',
        praes: [
            ['ich','bringe','aduc'],['du','bringst','aduci'],['er/sie/es','bringt','aduce'],
            ['wir','bringen','aducem'],['ihr','bringt','aduceți'],['sie/Sie','bringen','aduc']
        ],
        praet: [
            ['ich','brachte','aduceam'],['du','brachtest','aduceai'],['er/sie/es','brachte','aducea'],
            ['wir','brachten','aduceam (noi)'],['ihr','brachtet','aduceați'],['sie/Sie','brachten','aduceau']
        ],
        perf: [
            ['ich','habe gebracht','am adus'],['du','hast gebracht','ai adus'],['er/sie/es','hat gebracht','a adus'],
            ['wir','haben gebracht','am adus'],['ihr','habt gebracht','ați adus'],['sie/Sie','haben gebracht','au adus']
        ],
        note: 'Verb NEREGULAT (gemischt: brachte, gebracht). Partizip II gebracht → Passiv: Das Paket wird gebracht.'
    },
    {
        inf: 'zerstören', ro: 'a distruge (→ zerstört)', typ: 'regulat', aux: 'haben', part: 'zerstört',
        praes: [
            ['ich','zerstöre','distrug'],['du','zerstörst','distrugi'],['er/sie/es','zerstört','distruge'],
            ['wir','zerstören','distrugem'],['ihr','zerstört','distrugeți'],['sie/Sie','zerstören','distrug']
        ],
        praet: [
            ['ich','zerstörte','distrugeam'],['du','zerstörtest','distrugeai'],['er/sie/es','zerstörte','distrugea'],
            ['wir','zerstörten','distrugeam (noi)'],['ihr','zerstörtet','distrugeați'],['sie/Sie','zerstörten','distrugeau']
        ],
        perf: [
            ['ich','habe zerstört','am distrus'],['du','hast zerstört','ai distrus'],['er/sie/es','hat zerstört','a distrus'],
            ['wir','haben zerstört','am distrus'],['ihr','habt zerstört','ați distrus'],['sie/Sie','haben zerstört','au distrus']
        ],
        note: 'Verb REGULAT (untrennbar zer- → fără ge-: zerstört). Passiv: Die Stadt wurde durch das Erdbeben zerstört.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#5A5147;">' + v.perf[2][2] + '</em><br>' +
        '<small style="color:#5A5147;">Același participiu (<strong>' + v.part + '</strong>) apare și la Passiv: wird ' + v.part + ' / ist ' + v.part + ' worden.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe-cheie ale atelierului</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Toate sunt tranzitive → pot fi puse la Passiv.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Toate cele 6 verbe sunt tranzitive — au un obiect la Akkusativ, deci pot fi puse la Passiv. La Passiv folosești Partizipul II: gebaut, gemacht, geöffnet, geschlossen (TARE), gebracht (neregulat), zerstört. Steaua ascunsă e werden — auxiliarul (wird / wurde / ist … worden). <img src="images/butterfly-emerald.png" class="bf-inline" alt=""></div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('Modal') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#F5F0E8;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
