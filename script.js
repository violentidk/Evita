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

    // Kuvame tulemuse
    const resultDiv = document.createElement('div');
    resultDiv.className = 'quiz-result';
    resultDiv.innerHTML = `
        <h3>Tulemus: ${correct}/${section.quiz.length}</h3>
        <p>${correct === section.quiz.length ? 'Suurepärane!' : 'Proovi uuesti!'}</p>
    `;
    
    const quizContent = document.getElementById('quizContent');
    if (!document.querySelector('.quiz-result')) {
        quizContent.appendChild(resultDiv);
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
}); 