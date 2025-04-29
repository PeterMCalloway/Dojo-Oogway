function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');

        // Charger les notes automatiquement si une textarea est présente
        const textarea = activeSection.querySelector("textarea");
        if (textarea) {
            loadNote(textarea.id);
        }
    }
}

function saveNote(id) {
    const content = document.getElementById(id).value;
    localStorage.setItem(id, content);
    alert("Note sauvegardée !");
}

function loadNote(id) {
    const content = localStorage.getItem(id);
    if (content) {
        document.getElementById(id).value = content;
    }
}