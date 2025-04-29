function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function toggleMap(mapId) {
    const mapDiv = document.getElementById('map-' + mapId);
    mapDiv.classList.toggle('hidden');
}
