// ============================================
// TEORIE - Atelier B1.2: Passiv komplett (alle Zeiten)
// Claudia Toth · werden + Partizip II în toate timpurile · worden≠geworden · Modalverben · von/durch
// Standard vizual: logo + marca-fluture (branding-only — gramatică, fără substantive concrete)
// Diferențiat de „man" (doar man↔Passiv Präsens) și „haben/sein+zu" (doar Passiversatz)
// ============================================

const theoryHTML = `
    <!-- 0: Ce e Passiv + Präsens -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>⚙️ 1. Ce e Passiv & Passiv Präsens (werden + Partizip II)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-grundlage.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Azi ducem <strong>Passivul la capăt</strong> — în TOATE timpurile! La Aktiv contează CINE face („Der Arbeiter baut das Haus"). La <strong>Passiv</strong> contează ACȚIUNEA, nu cine o face: „Das Haus wird gebaut". Formula-cheie: <strong>werden + Partizip II</strong>. Ai o capcană faimoasă (worden vs. geworden) și Passiv cu Modalverbe. Hai să le prindem pe toate! <img src="images/butterfly-emerald.png" class="bf-inline" alt=""></div>
                </div>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>📐 Passiv Präsens = werden (conjugat) + Partizip II (la final)</h4>
                <div class="example-box">
                    <p class="de"><strong>Aktiv:</strong> Der Arbeiter <strong>baut</strong> das Haus. (cine? = accent pe arbeiter)</p>
                    <p class="de"><strong>Passiv:</strong> Das Haus <strong>wird gebaut</strong>. (accent pe acțiune)</p>
                    <p class="ro">Casa se construiește. / Casa este construită.</p>
                </div>
                <p style="margin-top:4px"><strong>Aktiv → Passiv:</strong> obiectul (Akkusativ „das Haus") devine <strong>subiect</strong> (Nominativ); verbul devine <strong>werden + Partizip II</strong>.</p>
            </div>

            <div class="theory-box">
                <h4>Ce înveți în acest atelier</h4>
                <ul>
                    <li>⏳ <strong>Passiv în toate timpurile</strong> — wird / wurde / ist…worden / wird…werden</li>
                    <li>🎯 <strong>worden ≠ geworden</strong> — capcana la Passiv Perfekt</li>
                    <li>🔧 <strong>Passiv mit Modalverben</strong> (muss gemacht werden)</li>
                    <li>👤 <strong>Agentul</strong> von + Dativ / durch + Akkusativ + capcana RO „se"</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Passiv în toate timpurile ⭐ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>⏳ 2. Passiv în toate timpurile ⭐</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-zeiten.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Se schimbă doar forma lui „werden" — Partizip II rămâne</h4>
                <table class="grammar-table">
                    <tr><th>Timp</th><th>Formă</th><th>Exemplu (das Haus)</th></tr>
                    <tr><td><strong>Präsens</strong></td><td class="verb">wird + P II</td><td>Das Haus <strong>wird</strong> gebaut.</td></tr>
                    <tr><td><strong>Präteritum</strong></td><td class="verb">wurde + P II</td><td>Das Haus <strong>wurde</strong> gebaut.</td></tr>
                    <tr><td><strong>Perfekt</strong></td><td class="verb">ist + P II + worden</td><td>Das Haus <strong>ist</strong> gebaut <strong>worden</strong>.</td></tr>
                    <tr><td><strong>Plusquamperf.</strong></td><td class="verb">war + P II + worden</td><td>Das Haus <strong>war</strong> gebaut <strong>worden</strong>.</td></tr>
                    <tr><td><strong>Futur I</strong></td><td class="verb">wird + P II + werden</td><td>Das Haus <strong>wird</strong> gebaut <strong>werden</strong>.</td></tr>
                </table>
                <p style="margin-top:6px"><strong>⚠️</strong> La Perfekt/Plusquamperfekt apare <strong>worden</strong> la final (nu „geworden"!). La Futur apare <strong>werden</strong> la final.</p>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>💬 Aceeași propoziție, alt timp</h4>
                <div class="example-box">
                    <p class="de">Der Brief <strong>wird</strong> geschrieben. → <strong>wurde</strong> geschrieben. → <strong>ist</strong> geschrieben <strong>worden</strong>.</p>
                    <p class="ro">Scrisoarea se scrie / se scria / a fost scrisă.</p>
                </div>
            </div>

            <div style="background: #eff6ff; border-left: 4px solid #1e3a8a; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #1e3a8a;">Florian:</strong> Im Krankenhaus: „Der Patient wird operiert" (jetzt), „wurde gestern operiert" (Präteritum), „ist schon operiert worden" (Perfekt). Nur „werden" ändert sich!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">La spital: pacientul e operat acum / a fost operat ieri / a fost deja operat. Se schimbă doar „werden"!</p>
            </div>
        </div>
    </div>

    <!-- 2: worden ≠ geworden ⭐ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🎯 3. worden ≠ geworden (capcana faimoasă)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-worden.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box warn-box" style="background: #fef2f2; border-color: #dc2626;">
                <h4>🚨 La Passiv Perfekt: worden (fără ge-)!</h4>
                <p>„werden" are DOUĂ participii, în funcție de rol:</p>
                <table class="grammar-table">
                    <tr><th>Rol</th><th>Participiu</th><th>Exemplu</th></tr>
                    <tr><td><strong>Passiv</strong> (auxiliar)</td><td class="verb">worden</td><td>Das Haus ist gebaut <strong>worden</strong>. (a fost construit)</td></tr>
                    <tr><td><strong>a deveni</strong> (verb propriu)</td><td class="verb">geworden</td><td>Er ist Arzt <strong>geworden</strong>. (a devenit medic)</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>💡 Cum ții minte</h4>
                <p>La Passiv, „werden" e doar ajutor → forma scurtă <strong>worden</strong>. Când „werden" înseamnă chiar „a deveni/a se face", e verb principal → <strong>geworden</strong>.</p>
                <div class="example-box">
                    <p class="de">Das Auto ist repariert <strong>worden</strong>. (Passiv) &nbsp;≠&nbsp; Es ist kalt <strong>geworden</strong>. (a devenit frig)</p>
                    <p class="ro">Mașina a fost reparată. ≠ S-a făcut frig.</p>
                </div>
            </div>

            <div style="background: #fdf4ff; border-left: 4px solid #a21caf; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #86198f;">Carolina:</strong> Eselsbrücke: Passiv = worden (kürzer, nur Helfer). „geworden" hat ein „ge-", weil es ein echtes Verb ist — jemand ist etwas geworden.</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">Truc: Passiv = worden (mai scurt, doar ajutor). „geworden" are „ge-" pentru că e verb adevărat — cineva a devenit ceva.</p>
            </div>
        </div>
    </div>

    <!-- 3: Passiv mit Modalverben ⭐ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🔧 4. Passiv mit Modalverben (muss gemacht werden)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-modalverben.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>📐 Modalverb (conjugat) + Partizip II + werden (infinitiv la final)</h4>
                <div class="example-box">
                    <p class="de">Das <strong>muss</strong> gemacht <strong>werden</strong>.</p>
                    <p class="ro">Asta trebuie făcută.</p>
                </div>
                <div class="example-box">
                    <p class="de">Die Tür <strong>kann</strong> geöffnet <strong>werden</strong>. · Die Regeln <strong>müssen</strong> beachtet <strong>werden</strong>.</p>
                    <p class="ro">Ușa poate fi deschisă. · Regulile trebuie respectate.</p>
                </div>
            </div>

            <div class="theory-box">
                <h4>Ordinea la final</h4>
                <p>Modalverbul e pe locul 2 (conjugat), iar la FINAL vin <strong>Partizip II + werden</strong> (în această ordine):</p>
                <div class="example-box">
                    <p class="de">… muss / kann / soll / darf … + <strong>Partizip II + werden</strong>.</p>
                    <p class="ro">Atenție: e „gemacht <strong>werden</strong>", NU „gemacht worden" (acela ar fi Perfekt)!</p>
                </div>
            </div>

            <div style="background: #FBF7EF; border-left: 4px solid #ea580c; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #9a3412;">Mihai:</strong> In der Küche: „Das Gemüse muss gewaschen werden, die Suppe kann serviert werden." Partizip II zuerst, dann „werden" ganz am Ende!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">În bucătărie: legumele trebuie spălate, supa poate fi servită. Întâi Partizip II, apoi „werden" la coadă!</p>
            </div>
        </div>
    </div>

    <!-- 4: Agent von/durch + capcana RO -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>👤 5. Agentul (von / durch) + capcana RO</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-agent.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Dacă vrei să spui TOTUȘI cine/ce face: von sau durch</h4>
                <table class="grammar-table">
                    <tr><th>Introducere</th><th>Sens</th><th>Exemplu</th></tr>
                    <tr><td class="verb">von + Dativ</td><td>autorul (cine)</td><td>Das Haus wird <strong>von den Arbeitern</strong> gebaut.</td></tr>
                    <tr><td class="verb">durch + Akkusativ</td><td>mijlocul (prin ce)</td><td>Die Stadt wurde <strong>durch das Erdbeben</strong> zerstört.</td></tr>
                </table>
                <p style="margin-top:6px">Cel mai des, Passivul e <strong>fără agent</strong> (nu contează cine): „Hier wird Deutsch gesprochen."</p>
            </div>

            <div class="theory-box warn-box" style="background: #fef2f2; border-color: #dc2626;">
                <h4>🚨 Capcana românului</h4>
                <p>Româna redă Passivul cu <strong>„se"</strong> (se construiește) sau <strong>„a fi + participiu"</strong> (a fost construit). Germana = <strong>werden + Partizip II</strong>. Nu confunda cu <strong>sein + Partizip II</strong>, care arată o STARE: „Die Tür <strong>ist</strong> geöffnet" (ușa e deschisă = rezultat) vs. „Die Tür <strong>wird</strong> geöffnet" (ușa se deschide = proces).</p>
            </div>

            <div style="background: #FBF7EF; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Annette:</strong> Tipp: proces = <strong>werden</strong> (Das Haus wird gebaut). Stare/rezultat = <strong>sein</strong> (Das Haus ist gebaut). Iar la Perfekt Passiv, nu uitați: <strong>worden</strong>, nu geworden!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">Proces = werden; stare = sein; Perfekt Passiv = worden.</p>
            </div>

            <div class="theory-box" style="text-align:center; background:#ecfdf5; border-color:#10b981;">
                <p style="margin:0; font-weight:bold; color:#065f46;">⚙️ Passiv bifat — toate timpurile, worden≠geworden, mit Modalverben și von/durch. Acum îl folosești ca la știri și instrucțiuni!</p>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});
