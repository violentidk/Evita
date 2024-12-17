const topics = [
    {
        id: 1,
        title: "1. Ainete põhiklassid",
        sections: [
            {
                id: 'oksiidid',
                title: "Oksiidid",
                content: `
                    <h3>Oksiidid - Põhjalik ülevaade</h3>
                    
                    <div class="theory-section">
                        <h4>1. Oksiidide olemus</h4>
                        <p>Oksiidid on ühendid, kus hapnik on ühinenud teise elemendiga. Kõige lihtsam on seda mõista näidete abil:</p>
                        <ul>
                            <li>Kui raud roostetab, ühineb see õhus oleva hapnikuga → tekib raudoksiid (Fe₂O₃)</li>
                            <li>Kui me hingame välja, väljub süsinikdioksiid (CO₂)</li>
                        </ul>
                    </div>

                    <div class="theory-section">
                        <h4>2. Oksiidide valemid</h4>
                        <p>Oksiidide valemites näitab:</p>
                        <ul>
                            <li>Elemendi sümbol - milline element on ühinenud hapnikuga</li>
                            <li>O - hapniku sümbol</li>
                            <li>Numbrid all paremal - aatomite arvu ühendis</li>
                        </ul>
                        <div class="example-box">
                            <p><strong>Näited:</strong></p>
                            <ul>
                                <li>CO₂ - üks süsiniku aatom ja kaks hapniku aatomit</li>
                                <li>Fe₂O₃ - kaks raua aatomit ja kolm hapniku aatomit</li>
                            </ul>
                        </div>
                    </div>

                    <div class="theory-section">
                        <h4>3. Oksiidide liigid</h4>
                        <div class="two-columns">
                            <div class="column">
                                <h5>Metallilised oksiidid</h5>
                                <ul>
                                    <li>CaO - kaltsiumoksiid (lubi)</li>
                                    <li>Fe₂O₃ - raud(III)oksiid (rooste)</li>
                                    <li>Al₂O₃ - alumiiniumoksiid</li>
                                </ul>
                                <p><strong>Omadused:</strong></p>
                                <ul>
                                    <li>Reageerivad veega → tekivad alused</li>
                                    <li>Reageerivad hapetega → tekivad soolad</li>
                                </ul>
                            </div>
                            <div class="column">
                                <h5>Mittemetallilised oksiidid</h5>
                                <ul>
                                    <li>CO₂ - süsinikdioksiid</li>
                                    <li>SO₂ - vääveldioksiid</li>
                                    <li>NO₂ - lämmastikdioksiid</li>
                                </ul>
                                <p><strong>Omadused:</strong></p>
                                <ul>
                                    <li>Reageerivad veega → tekivad happed</li>
                                    <li>Reageerivad alustega → tekivad soolad</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="practice-section">
                        <h4>4. Olulised reaktsioonid</h4>
                        <div class="reaction-box">
                            <p><strong>Metallilise oksiidi reaktsioon veega:</strong></p>
                            <p>CaO + H₂O → Ca(OH)₂</p>
                            <p class="explanation">Lubi + vesi → kustutatud lubi</p>
                        </div>
                        <div class="reaction-box">
                            <p><strong>Mittemetallilise oksiidi reaktsioon veega:</strong></p>
                            <p>CO₂ + H₂O → H₂CO₃</p>
                            <p class="explanation">Süsinikdioksiid + vesi → süsihape</p>
                        </div>
                    </div>
                `,
                quiz: {
                    practice: {
                        questions: [
                            {
                                question: "Millest koosnevad kõik oksiidid?",
                                options: [
                                    "Ainult metallist", 
                                    "Hapnikust ja mingist teisest elemendist", 
                                    "Ainult veest", 
                                    "Ainult mittemetallist"
                                ],
                                correct: 1
                            },
                            {
                                question: "Milline järgnevatest on metallioksiid?",
                                options: ["CO₂", "CaO", "SO₂", "NO₂"],
                                correct: 1
                            },
                            {
                                question: "Mis tekib mittemetallilise oksiidi reageerimisel veega?",
                                options: ["Alus", "Hape", "Sool", "Vesinik"],
                                correct: 1
                            }
                        ]
                    }
                }
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
                                <li>Nõrgad happed (H₂CO₃, H₂SO₄)</li>
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
                    <p>Hapete reageerimisel teiste ainetega tekivad uued ained. Hapete reaktsioone iseloomustavad kindlad tunnused.</p>

                    <h4>Hapete põhilised reaktsioonid</h4>
                    <ol>
                        <li><strong>Reaktsioonid metallidega</strong>
                            <ul>
                                <li>Hape + aktiivne metall → sool + vesinik↑</li>
                                <li>Näiteks: 2HCl + Zn → ZnCl₂ + H₂↑</li>
                                <li>Metallide aktiivsuse rida määrab reaktsiooni toimumise</li>
                            </ul>
                        </li>
                        <li><strong>Reaktsioonid aluseliste oksiididega</strong>
                            <ul>
                                <li>Hape + aluseline oksiid → sool + vesi</li>
                                <li>Näiteks: 2HCl + CaO → CaCl₂ + H₂O</li>
                            </ul>
                        </li>
                        <li><strong>Reaktsioonid alustega</strong>
                            <ul>
                                <li>Hape + alus → sool + vesi</li>
                                <li>Näiteks: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O</li>
                            </ul>
                        </li>
                    </ol>

                    <h4>Reaktsioonide tunnused</h4>
                    <ul>
                        <li>Vesiniku eraldumine (reaktsioonil metallidega)</li>
                        <li>Lahuse värvuse muutus</li>
                        <li>Temperatuuri tõus</li>
                    </ul>
                `,
                quiz: [
                    {
                        question: "Millise metalli ja happe vahelisel reaktsioonil eraldub vesinik?",
                        options: ["Vask ja soolhape", "Tsink ja soolhape", "Kuld ja soolhape", "Hõbe ja soolhape"],
                        correct: 1
                    },
                    {
                        question: "Mis tekib happe ja aluselise oksiidi vahelisel reaktsioonil?",
                        options: ["Sool ja vesinik", "Sool ja vesi", "Alus ja vesi", "Oksiid ja vesi"],
                        correct: 1
                    },
                    {
                        question: "Mis on neutralisatsioonireaktsiooni saadused?",
                        options: ["Sool ja vesi", "Sool ja vesinik", "Alus ja vesi", "Oksiid ja vesi"],
                        correct: 0
                    }
                ]
            },
            {
                id: 'alused',
                title: "Alused",
                content: `
                    <h3>Alused</h3>
                    <p>Alused on ained, mis sisaldavad metalliaatomit ja hüdroksiidioone (OH⁻).</p>

                    <h4>Aluste ehitus</h4>
                    <ul>
                        <li>Aluste koostises on metall ja h��droksiidioonid</li>
                        <li>��ldvalem: Me(OH)ₙ, kus Me on metall</li>
                        <li>Näiteks: NaOH, KOH, Ca(OH)₂</li>
                    </ul>

                    <h4>Aluste liigitus lahustuvuse järgi</h4>
                    <ul>
                        <li><strong>Lahustuvad alused (leelised)</strong>
                            <ul>
                                <li>NaOH - naatriumhüdroksiid</li>
                                <li>KOH - kaaliumhüdroksiid</li>
                                <li>Ca(OH)₂ - kaltsiumhüdroksiid</li>
                            </ul>
                        </li>
                        <li><strong>Lahustumatud alused</strong>
                            <ul>
                                <li>Cu(OH)₂ - vaskhüdroksiid</li>
                                <li>Fe(OH)₃ - raud(III)hüdroksiid</li>
                            </ul>
                        </li>
                    </ul>

                    <h4>Aluste omadused</h4>
                    <ul>
                        <li>Muudavad indikaatorite värvi (lakmus siniseks)</li>
                        <li>Reageerivad hapetega (neutralisatsioon)</li>
                        <li>Leelised on söövitavad ained</li>
                    </ul>
                `,
                quiz: [
                    {
                        question: "Milline järgnevatest on lahustuv alus?",
                        options: ["Cu(OH)₂", "Fe(OH)₃", "NaOH", "Al(OH)₃"],
                        correct: 2
                    },
                    {
                        question: "Mis värvi muutub lakmus aluselises keskkonnas?",
                        options: ["Punaseks", "Kollaseks", "Siniseks", "Roheliseks"],
                        correct: 2
                    },
                    {
                        question: "Millised ioonid on aluste koostises?",
                        options: ["H⁺", "OH⁻", "Cl⁻", "SO₄²⁻"],
                        correct: 1
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
    
    if (!section.quiz?.practice?.questions) {
        console.error('Quiz questions not found');
        return;
    }

    const questions = section.quiz.practice.questions;
    
    let html = '';
    questions.forEach((q, index) => {
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
    const practiceQuestions = section.quiz.practice.questions;
    let correct = 0;
    
    practiceQuestions.forEach((q, index) => {
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

    // Tulemuste pop-up
    const overlay = document.createElement('div');
    overlay.className = 'result-overlay';
    
    const popup = document.createElement('div');
    popup.className = 'result-popup';
    
    let message = '';
    if (correct === practiceQuestions.length) {
        message = 'Suurepärane tulemus!';
    } else if (correct > practiceQuestions.length / 2) {
        message = 'Hea tulemus, aga saab veel paremini!';
    } else {
        message = 'Proovi veel, harjutamine teeb meistriks!';
    }

    popup.innerHTML = `
        <h3>Sinu tulemus</h3>
        <div class="score">${correct}/${practiceQuestions.length}</div>
        <p class="message">${message}</p>
        <button class="btn btn-primary" onclick="closeResults()">Sulge</button>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(popup);
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
 