const topics = [
    {
        id: 1,
        title: "1. Ainete põhiklassid",
        sections: [
            {
                id: 'oksiidid',
                title: "Oksiidid",
                content: `
                    <h3>Oksiidid</h3>
                    <p>Oksiidid on liitained, mis koosnevad elemendist ja hapnikust. Oksiidid on ühed tähtsamad anorgaanilised ühendid.</p>
                    
                    <h4>Oksiidide koostis ja ehitus</h4>
                    <ul>
                        <li>Oksiidid sisaldavad hapnikku, mille oksüdatsiooniaste on -2</li>
                        <li>Oksiidid tekivad elementide ühinemisel hapnikuga (oksüdeerumisel)</li>
                        <li>Oksiidide valem näitab elemendi ja hapniku aatomite arvu suhet</li>
                    </ul>

                    <h4>Oksiidide liigitamine ja omadused</h4>
                    <ol>
                        <li><strong>Mittemetallilised oksiidid</strong>
                            <ul>
                                <li>Näiteks CO₂ (süsinikdioksiid), SO₂ (vääveldioksiid)</li>
                                <li>Reageerivad veega, moodustades happeid</li>
                                <li>Reageerivad alustega, moodustades sooli</li>
                            </ul>
                        </li>
                        <li><strong>Metallilised oksiidid</strong>
                            <ul>
                                <li>Näiteks CaO (kaltsiumoksiid), Na₂O (naatriumoksiid)</li>
                                <li>Reageerivad veega, moodustades aluseid</li>
                                <li>Reageerivad hapetega, moodustades sooli</li>
                            </ul>
                        </li>
                    </ol>

                    <h4>Oksiidide tähtsus</h4>
                    <ul>
                        <li>Süsinikdioksiid (CO₂) - fotosünteesis ja kasvuhooneefektis</li>
                        <li>Lämmastikoksiidid - õhusaaste tekitajad</li>
                        <li>Metallide oksiidid - ehitusmaterjalides (CaO lubjas)</li>
                        <li>Ränidioksiid (SiO₂) - liiva ja kvartsiklaasi koostises</li>
                    </ul>
                `,
                quiz: [
                    {
                        question: "Milline on hapniku oksüdatsiooniaste oksiidides?",
                        options: ["-1", "-2", "+2", "+1"],
                        correct: 1
                    },
                    {
                        question: "Mis tekib mittemetallilise oksiidi reageerimisel veega?",
                        options: ["Alus", "Hape", "Sool", "Uus oksiid"],
                        correct: 1
                    },
                    {
                        question: "Milline järgnevatest on metalloksiid?",
                        options: ["SO₂", "CO₂", "CaO", "NO₂"],
                        correct: 2
                    },
                    {
                        question: "Millise oksiidi osalemine fotosünteesis on vajalik?",
                        options: ["CO₂", "SO₂", "NO₂", "CaO"],
                        correct: 0
                    },
                    {
                        question: "Mis ühend tekib metallilise oksiidi reageerimisel veega?",
                        options: ["Hape", "Sool", "Alus", "Uus oksiid"],
                        correct: 2
                    }
                ]
            },
            {
                id: 'happed',
                title: "Happed",
                content: `
                    <h3>Happed</h3>
                    <p>Happed on ühendid, mis annavad vesilahuses vesinikioonid (H⁺). Happed on olulised nii laboris kui igapäevaelus.</p>

                    <h4>Hapete koostis ja ehitus</h4>
                    <ul>
                        <li>Hapete molekulides on vesinik, mis vesilahuses eraldub ioonidena (H⁺)</li>
                        <li>Hapete üldvalem on HₙA, kus A on happejääk</li>
                        <li>n näitab vesiniku aatomite arvu molekulis</li>
                    </ul>

                    <h4>Hapete liigitamine</h4>
                    <ol>
                        <li><strong>Hapnikusisalduse järgi:</strong>
                            <ul>
                                <li>Hapnikuhapped (H₂SO₄, HNO₃)</li>
                                <li>Hapnikuta happed (HCl, HBr)</li>
                            </ul>
                        </li>
                        <li><strong>Tugevuse järgi:</strong>
                            <ul>
                                <li>Tugevad happed (HCl, H₂SO₄, HNO₃)</li>
                                <li>Nõrgad happed (H₂CO₃, H₂S)</li>
                            </ul>
                        </li>
                    </ol>

                    <h4>Hapete keemilised omadused</h4>
                    <ul>
                        <li>Reageerivad metallidega, eraldades vesinikku</li>
                        <li>Reageerivad aluseliste oksiididega</li>
                        <li>Reageerivad alustega (neutralisatsioonireaktsioon)</li>
                        <li>Muudavad indikaatorite värvi (lakmus → punane)</li>
                    </ul>

                    <h4>Hapete kasutamine</h4>
                    <ul>
                        <li>Tööstuses (väävelhape akudes)</li>
                        <li>Toiduainetetööstuses (sidrunhape, äädikhape)</li>
                        <li>Seedeprotsessides (maohape HCl)</li>
                    </ul>
                `,
                quiz: [
                    {
                        question: "Millise iooni annavad happed vesilahuses?",
                        options: ["OH⁻", "H⁺", "Cl⁻", "Na⁺"],
                        correct: 1
                    },
                    {
                        question: "Milline järgnevatest on hapnikuta hape?",
                        options: ["H₂SO₄", "HNO₃", "HCl", "H₃PO₄"],
                        correct: 2
                    },
                    {
                        question: "Mis on neutralisatsioonireaktsiooni saadused?",
                        options: ["Sool ja vesi", "Oksiid ja vesi", "Alus ja vesi", "Hape ja vesi"],
                        correct: 0
                    },
                    {
                        question: "Milline hape on seedeprotsessis oluline?",
                        options: ["Väävelhape", "Soolhape", "Lämmastikhape", "Sidrunhape"],
                        correct: 1
                    },
                    {
                        question: "Mis gaas eraldub hapete reageerimisel metallidega?",
                        options: ["Hapnik", "Lämmastik", "Vesinik", "Süsihappegaas"],
                        correct: 2
                    }
                ]
            },
            {
                id: 'reaktsioonid-hapetega',
                title: "Reaktsioonid hapetega",
                content: `
                    <h3>Hapete reaktsioonid</h3>
                    <p>Happed on aktiivsed ained, mis osalevad paljudes keemilistes reaktsioonides.</p>

                    <h4>Hapete põhilised reaktsioonid</h4>
                    <ol>
                        <li><strong>Reaktsioonid metallidega</strong>
                            <ul>
                                <li>Hape + metall → sool + vesinik↑</li>
                                <li>Näiteks: 2HCl + Zn → ZnCl₂ + H₂↑</li>
                                <li>Ei reageeri väärismetallidega (Au, Pt, Ag)</li>
                            </ul>
                        </li>
                        <li><strong>Reaktsioonid metalloksiididega</strong>
                            <ul>
                                <li>Hape + metalloksiid → sool + vesi</li>
                                <li>Näiteks: 2HCl + CuO → CuCl₂ + H₂O</li>
                            </ul>
                        </li>
                        <li><strong>Reaktsioonid alustega</strong>
                            <ul>
                                <li>Hape + alus → sool + vesi</li>
                                <li>Näiteks: HCl + NaOH → NaCl + H₂O</li>
                                <li>Neutralisatsioonireaktsioon</li>
                            </ul>
                        </li>
                    </ol>

                    <h4>Reaktsioonide tunnused</h4>
                    <ul>
                        <li>Gaaside eraldumine (H₂)</li>
                        <li>Värvimuutused</li>
                        <li>Soojuse eraldumine</li>
                        <li>Sademete teke</li>
                    </ul>
                `,
                quiz: [
                    {
                        question: "Mis gaas eraldub happe reageerimisel metalliga?",
                        options: ["Hapnik", "Vesinik", "Lämmastik", "Süsihappegaas"],
                        correct: 1
                    },
                    {
                        question: "Millised on neutralisatsioonireaktsiooni saadused?",
                        options: ["Sool ja vesinik", "Sool ja vesi", "Alus ja vesi", "Oksiid ja vesi"],
                        correct: 1
                    },
                    {
                        question: "Milline metall EI reageeri hapetega?",
                        options: ["Tsink", "Raud", "Kuld", "Magneesium"],
                        correct: 2
                    }
                ]
            },
            {
                id: 'alused',
                title: "Alused",
                content: `
                    <h3>Alused</h3>
                    <p>Alused on ühendid, mis annavad vesilahuses hüdroksiidioonid (OH⁻). Need on hapete vastandained.</p>

                    <h4>Aluste koostis ja ehitus</h4>
                    <ul>
                        <li>Aluste üldvalem on Me(OH)ₙ</li>
                        <li>Me - metalli aatom</li>
                        <li>n - hüdroksiidioonide arv</li>
                    </ul>

                    <h4>Aluste liigitamine</h4>
                    <ol>
                        <li><strong>Lahustuvuse järgi:</strong>
                            <ul>
                                <li>Lahustuvad alused (leelised) - NaOH, KOH</li>
                                <li>Lahustumatud alused - Cu(OH)₂, Fe(OH)₃</li>
                            </ul>
                        </li>
                        <li><strong>Tugevuse järgi:</strong>
                            <ul>
                                <li>Tugevad alused - NaOH, KOH, Ca(OH)₂</li>
                                <li>Nõrgad alused - NH₄OH, Fe(OH)₂</li>
                            </ul>
                        </li>
                    </ol>

                    <h4>Aluste omadused</h4>
                    <ul>
                        <li>Muudavad indikaatorite värvi (lakmus → sinine)</li>
                        <li>Reageerivad hapetega (neutralisatsioon)</li>
                        <li>Söövitavad omadused (eriti leelistel)</li>
                    </ul>
                `,
                quiz: [
                    {
                        question: "Milline ioon tekib aluste dissotsieerumisel?",
                        options: ["H⁺", "OH⁻", "Cl⁻", "Na⁺"],
                        correct: 1
                    },
                    {
                        question: "Milline järgnevatest on lahustuv alus (leelis)?",
                        options: ["Cu(OH)₂", "Fe(OH)₃", "NaOH", "Mg(OH)₂"],
                        correct: 2
                    },
                    {
                        question: "Mis värvi muutub lakmus aluselises keskkonnas?",
                        options: ["Punaseks", "Roheliseks", "Siniseks", "Kollaseks"],
                        correct: 2
                    }
                ]
            },
            {
                id: 'reaktsioonid-alustega',
                title: "Reaktsioonid alustega",
                content: `
                    <h3>Aluste reaktsioonid</h3>
                    <p>Alused osalevad mitmetes olulistes keemilistes reaktsioonides.</p>

                    <h4>Aluste põhilised reaktsioonid</h4>
                    <ol>
                        <li><strong>Reaktsioonid hapetega</strong>
                            <ul>
                                <li>Alus + hape → sool + vesi</li>
                                <li>Näiteks: NaOH + HCl → NaCl + H₂O</li>
                            </ul>
                        </li>
                        <li><strong>Reaktsioonid mittemetallide oksiididega</strong>
                            <ul>
                                <li>Alus + mittemetalli oksiid → sool + vesi</li>
                                <li>Näiteks: 2NaOH + CO₂ → Na₂CO₃ + H₂O</li>
                            </ul>
                        </li>
                        <li><strong>Reaktsioonid sooladega</strong>
                            <ul>
                                <li>Võib toimuda sademe teke</li>
                                <li>Näiteks: 2NaOH + CuCl₂ → Cu(OH)₂↓ + 2NaCl</li>
                            </ul>
                        </li>
                    </ol>

                    <h4>Reaktsioonide tunnused</h4>
                    <ul>
                        <li>Värviliste sademete teke</li>
                        <li>Soojuse eraldumine</li>
                        <li>pH muutus</li>
                    </ul>
                `,
                quiz: [
                    {
                        question: "Mis tekib aluse ja happe vahelisel reaktsioonil?",
                        options: ["Uus alus ja vesi", "Sool ja vesinik", "Sool ja vesi", "Oksiid ja vesi"],
                        correct: 2
                    },
                    {
                        question: "Millega reageerivad alused hästi?",
                        options: ["Väärismetallidega", "Mittemetallide oksiididega", "Inertgaasidega", "Veega"],
                        correct: 1
                    },
                    {
                        question: "Mis on aluse ja happe vahelise reaktsiooni nimetus?",
                        options: ["Oksüdeerumine", "Redutseerimine", "Neutralisatsioon", "Dissotsiatsioon"],
                        correct: 2
                    }
                ]
            }
        ]
    }
];

// Aktiivse teema ja sektsiooni jälgimine
let activeTopicId = null;
let activeSectionId = null;

// Menüü loomine
function createMenu() {
    const menu = document.getElementById('categoriesMenu');
    topics.forEach(topic => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.textContent = topic.title;
        li.onclick = () => showTopic(topic);
        menu.appendChild(li);
    });
}

// Teema kuvamine
function showTopic(topic) {
    activeTopicId = topic.id;
    const contentBody = document.querySelector('.content-body');
    const currentTopic = document.getElementById('currentTopic');
    
    currentTopic.textContent = topic.title;
    
    let html = '<div class="sections-list">';
    topic.sections.forEach(section => {
        html += `
            <div class="section-card" onclick="showSection('${section.id}')">
                <h3>${section.title}</h3>
                <span class="material-icons">arrow_forward</span>
            </div>
        `;
    });
    html += '</div>';
    
    contentBody.innerHTML = html;
    
    // Menüü aktiivsuse uuendamine
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.textContent === topic.title);
    });
}

// Sektsiooni kuvamine
function showSection(sectionId) {
    const topic = topics.find(t => t.id === activeTopicId);
    const section = topic.sections.find(s => s.id === sectionId);
    activeSectionId = sectionId;
    
    const contentBody = document.querySelector('.content-body');
    contentBody.innerHTML = `
        <div class="section-content">
            ${section.content}
            <div class="section-actions">
                <button class="quiz-button" onclick="showQuiz()">
                    <span class="material-icons">quiz</span>
                    Testi oma teadmisi
                </button>
            </div>
        </div>
    `;
}

// Testi kuvamine
function showQuiz() {
    const topic = topics.find(t => t.id === activeTopicId);
    const section = topic.sections.find(s => s.id === activeSectionId);
    const modal = document.getElementById('quizModal');
    const quizContent = document.getElementById('quizContent');
    
    let html = '';
    section.quiz.forEach((q, index) => {
        html += `
            <div class="quiz-question">
                <p><strong>${index + 1}. ${q.question}</strong></p>
                <div class="options">
                    ${q.options.map((opt, i) => `
                        <label class="option">
                            <input type="radio" name="q${index}" value="${i}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    quizContent.innerHTML = html;
    modal.style.display = 'block';
    // Väike viivitus, et display: block jõuaks rakenduda
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // Lisa animatsioonide indeksid
    quizContent.querySelectorAll('.quiz-question').forEach((question, index) => {
        question.style.setProperty('--index', index);
    });
    
    quizContent.querySelectorAll('.option').forEach((option, index) => {
        option.style.setProperty('--index', index);
    });
}

// Modaali sulgemine
function closeQuiz() {
    const modal = document.getElementById('quizModal');
    modal.classList.remove('show');
    // Ootame animatsiooni lõppu
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Vastuste kontrollimine
function checkAnswers() {
    const topic = topics.find(t => t.id === activeTopicId);
    const section = topic.sections.find(s => s.id === activeSectionId);
    let correct = 0;
    
    section.quiz.forEach((q, index) => {
        const options = document.querySelectorAll(`input[name="q${index}"]`);
        options.forEach((option, i) => {
            const label = option.closest('.option');
            label.classList.remove('correct', 'wrong');
            
            if (option.checked) {
                if (i === q.correct) {
                    label.classList.add('correct');
                    correct++;
                } else {
                    label.classList.add('wrong');
                }
            } else if (i === q.correct) {
                label.classList.add('correct');
            }
        });
    });

    // Loome tulemuste pop-up
    const overlay = document.createElement('div');
    overlay.className = 'result-overlay';
    
    const popup = document.createElement('div');
    popup.className = 'result-popup';
    
    let message = '';
    if (correct === section.quiz.length) {
        message = 'Suurepärane tulemus!';
    } else if (correct > section.quiz.length / 2) {
        message = 'Hea tulemus, aga saab veel paremini!';
    } else {
        message = 'Proovi veel, harjutamine teeb meistriks!';
    }

    popup.innerHTML = `
        <h3>Sinu tulemus</h3>
        <div class="score">${correct}/${section.quiz.length}</div>
        <p class="message">${message}</p>
        <button class="btn btn-primary" onclick="closeResults()">Sulge</button>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    // Sulgemine klõpsuga väljaspool
    overlay.addEventListener('click', closeResults);
}

// Tulemuste sulgemise funktsioon
function closeResults() {
    const overlay = document.querySelector('.result-overlay');
    const popup = document.querySelector('.result-popup');
    
    if (overlay && popup) {
        overlay.style.opacity = '0';
        popup.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
            popup.remove();
        }, 300);
    }
}

// Tervituse modaali loomine
function createWelcomeModal() {
    const welcomeModal = document.createElement('div');
    welcomeModal.className = 'welcome-modal';
    welcomeModal.innerHTML = `
        <div class="welcome-content">
            <button class="welcome-close" onclick="closeWelcome()">
                <span class="material-icons">close</span>
            </button>
            <h2>Evita 1.0 TEST</h2>
            <p>Tere tulemast keemia õppekeskkonda!</p>
            <button class="btn btn-primary" onclick="closeWelcome()">Alusta</button>
        </div>
    `;
    
    // Sulgemine klõpsuga väljaspool modaali
    welcomeModal.addEventListener('click', (e) => {
        if (e.target === welcomeModal) {
            closeWelcome();
        }
    });
    
    document.body.appendChild(welcomeModal);
}

// Tervituse modaali sulgemine
function closeWelcome() {
    const welcomeModal = document.querySelector('.welcome-modal');
    if (welcomeModal) {
        welcomeModal.style.opacity = '0';
        setTimeout(() => {
            welcomeModal.remove();
        }, 300);
    }
}

// Sündmuste kuularid
document.addEventListener('DOMContentLoaded', () => {
    createMenu();
    
    // Modaali sulgemine
    const modal = document.getElementById('quizModal');
    const closeBtn = document.querySelector('.close-button');
    const closeQuizBtn = document.getElementById('closeQuiz');
    
    [closeBtn, closeQuizBtn].forEach(btn => {
        btn.onclick = closeQuiz;
    });
    
    // Sulgemine klõpsuga väljaspool modaali
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeQuiz();
        }
    });
    
    // Vastuste kontrollimine
    document.getElementById('checkAnswers').onclick = checkAnswers;
    
    // Otsing
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const menuItems = document.querySelectorAll('.nav-item');
        
        menuItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchText) ? 'block' : 'none';
        });
    });

    // Lisa tervituse modaal väikese viivitusega
    setTimeout(() => {
        createWelcomeModal();
    }, 500);

    // Animatsioonide lisamine elementidele
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.style.setProperty('--index', index);
    });

    document.querySelectorAll('.section-card').forEach((card, index) => {
        card.style.setProperty('--index', index);
    });

    document.querySelectorAll('.quiz-question').forEach((question, index) => {
        question.style.setProperty('--index', index);
    });

    document.querySelectorAll('.option').forEach((option, index) => {
        option.style.setProperty('--index', index);
    });
});
 