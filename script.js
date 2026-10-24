// 1. Fungsi Menampilkan Detail Informasi dari Tombol
function showInfo(label, value) {
    document.getElementById('info-label').innerText = label.toUpperCase() + ':';
    document.getElementById('info-value').innerText = value;
}

// 2. Fitur Spider-Sense Alert
const spiderSenseBtn = document.getElementById('spider-sense-btn');
const heroCard = document.getElementById('hero-card');

spiderSenseBtn.addEventListener('click', () => {
    heroCard.classList.add('spider-sense-active');
    
    alert('⚡ SPIDER-SENSE BERGETAR! Data Agen Muiz Adkha Maulana Terverifikasi Aman!');

    setTimeout(() => {
        heroCard.classList.remove('spider-sense-active');
    }, 3000);
});

// 3. Fitur Toggle Identitas Rahasia
const toggleBtn = document.getElementById('toggle-identity-btn');
const heroName = document.getElementById('hero-name');
const heroAlias = document.getElementById('hero-alias');

let isHeroMode = false;

toggleBtn.addEventListener('click', () => {
    isHeroMode = !isHeroMode;

    if (isHeroMode) {
        heroName.innerText = "SPIDER-MUIZ 🕷️";
        heroAlias.innerText = "Alias: The Friendly Neighborhood Tech Student";
        showInfo('Status Superhero', 'Aktif Membasmi Bug Kode & Mengembangkan Website');
        toggleBtn.innerText = "🔄 Mode Siswa Biasa";
    } else {
        heroName.innerText = "MUIZ ADKHA MAULANA";
        heroAlias.innerText = "Classified Agent Dossier";
        showInfo('PETUNJUK', 'Klik tombol di atas untuk melihat detail data pahlawan!');
        toggleBtn.innerText = "🔄 Ubah Identitas Rahasia";
    }
});
