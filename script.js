function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    const ta = document.querySelector(`#${id} textarea`);
    if (ta) loadNote(ta.id);
}

function saveNote(id) {
    const val = document.getElementById(id).value;
    localStorage.setItem(id, val);
    alert("Note sauvegardée !");
}

function loadNote(id) {
    const val = localStorage.getItem(id);
    if (val) document.getElementById(id).value = val;
}

function ajouterDefi() {
    const defi = document.getElementById('defiInput').value;
    if (!defi) return;
    const ul = document.getElementById('listeDefis');
    const li = document.createElement('li');
    li.textContent = defi + " ";
    const check = document.createElement('button');
    check.textContent = "✅";
    check.onclick = () => li.style.textDecoration = "line-through";
    li.appendChild(check);
    ul.appendChild(li);
    document.getElementById('defiInput').value = '';
}

function ajouterProgression() {
    const body = document.getElementById('progressBody');
    const hero = document.getElementById('hero').value;
    const role = document.getElementById('role').value;
    const map = document.getElementById('map').value;
    const result = document.getElementById('result').value;
    const note = document.getElementById('note').value;
    const improve = document.getElementById('improve').value;

    const row = `<tr><td>${hero}</td><td>${role}</td><td>${map}</td><td>${result}</td><td>${note}</td><td>${improve}</td></tr>`;
    body.innerHTML += row;

    ['hero','role','map','result','note','improve'].forEach(id => document.getElementById(id).value = '');
}
