// 1. Daktilo Efekti (Daha akıcı)
const baslikYazisi = "Dijital Dünyama Hoş Geldiniz.";
let index = 0;
const baslikElement = document.getElementById("baslik");

function typeWriter() {
    if (index < baslikYazisi.length) {
        baslikElement.textContent += baslikYazisi.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }
}
window.onload = typeWriter;

// 2. Tema Yönetimi (Local Storage ile kalıcı hale getirme)
const temaBtn = document.getElementById("temaBtn");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("karanlik");
    temaBtn.textContent = "☀️";
}

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("karanlik");
    let theme = "light";
    if (document.body.classList.contains("karanlik")) {
        theme = "dark";
        temaBtn.textContent = "☀️";
    } else {
        temaBtn.textContent = "🌙";
    }
    localStorage.setItem("theme", theme);
});

// 3. Projeleri Listeleme
const projeler = [
    { isim: "E-Ticaret Arayüzü", resim: "https://picsum.photos/400/300?random=1", kategori: "web" },
    { isim: "Hava Durumu Uygulaması", resim: "https://picsum.photos/400/300?random=2", kategori: "web" },
    { isim: "Fitness Takip", resim: "https://picsum.photos/400/300?random=3", kategori: "mobil" },
    { isim: "Portfolyo v1", resim: "https://picsum.photos/400/300?random=4", kategori: "web" }
];

const projeListesi = document.getElementById("projeListesi");

function renderProjects(filter = "tum") {
    projeListesi.innerHTML = "";
    const filtered = filter === "tum" ? projeler : projeler.filter(p => p.kategori === filter);
    
    filtered.forEach(p => {
        const html = `
            <div class="proje-card glass-card">
                <img src="${p.resim}" alt="${p.isim}">
                <div class="proje-info">
                    <h3>${p.isim}</h3>
                    <span class="badge">${p.kategori.toUpperCase()}</span>
                </div>
            </div>
        `;
        projeListesi.insertAdjacentHTML("beforeend", html);
    });
}
renderProjects();

// 4. Filtreleme ve Aktif Buton
document.querySelectorAll(".filtreBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelector(".filtreBtn.active").classList.remove("active");
        e.target.classList.add("active");
        renderProjects(e.target.dataset.kategori);
    });
});

// 5. Yetenek Barı Animasyonu (Görünce başlasın)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fill").forEach(bar => {
                bar.style.width = bar.getAttribute("style").split(":")[1];
            });
        }
    });
}, { threshold: 0.5 });

observer.observe(document.getElementById("yetenekler"));