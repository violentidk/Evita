const topics = [
    {
        title: "1. Ainete põhiklassid",
        sections: [
            {
                title: "Oksiidid",
                content: "Erinevat tüüpi oksiidid ja nende omadused. Oksiidid on keemilised ühendid, mis koosnevad elemendist ja hapnikust."
            },
            {
                title: "Reaktsioonid oksiididega",
                content: "Oksiidide reaktsioonid hapete ja aluste ning muude ainetega. Näiteks: CO2 + H2O → H2CO3"
            },
            // Lisa ülejäänud sektsioonid...
        ]
    },
    {
        title: "2. Anorgaanilised ained igapäevaelus",
        sections: [
            {
                title: "Vee karedus",
                content: "Kareda vee omadused ja mõjud. Vee kareduse põhjustavad lahustunud kaltsium- ja magneesiumisoolad."
            },
            // Lisa ülejäänud sektsioonid...
        ]
    },
    // Lisa ülejäänud teemad...
];

function createTopicCard(topic) {
    const card = document.createElement('div');
    card.className = 'glass-card topic-card';
    card.innerHTML = `
        <h2>${topic.title}</h2>
        <div class="topic-sections">
            ${topic.sections.map(section => 
                `<p>${section.title}</p>`
            ).join('')}
        </div>
    `;
    
    card.addEventListener('click', () => showTopicDetails(topic));
    return card;
}

function showTopicDetails(topic) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <h2>${topic.title}</h2>
        ${topic.sections.map(section => `
            <div class="section-detail">
                <h3>${section.title}</h3>
                <p>${section.content}</p>
            </div>
        `).join('')}
    `;
    
    modal.style.display = 'block';
}

// Otsingu funktsionaalsus
function filterTopics(searchText) {
    const normalizedSearch = searchText.toLowerCase();
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';
    
    topics.forEach(topic => {
        if (topic.title.toLowerCase().includes(normalizedSearch) ||
            topic.sections.some(section => 
                section.title.toLowerCase().includes(normalizedSearch) ||
                section.content.toLowerCase().includes(normalizedSearch)
            )) {
            mainContent.appendChild(createTopicCard(topic));
        }
    });
}

// Sündmuste kuularid
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('mainContent');
    topics.forEach(topic => {
        mainContent.appendChild(createTopicCard(topic));
    });
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => filterTopics(e.target.value));
    
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
}); 