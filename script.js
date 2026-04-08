// Daktilo efekti
const baslik = "Benim Dijital Portfolyom";
let i = 0;
function yaziEfekti() {
  if (i < baslik.length) {
    document.getElementById("baslik").textContent += baslik.charAt(i);
    i++;
    setTimeout(yaziEfekti, 100);
  }
}
yaziEfekti();

// Tema değiştirme
const temaBtn = document.getElementById("temaBtn");
temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("karanlik");
  temaBtn.textContent = document.body.classList.contains("karanlik") ? "☀️" : "🌙";
});

// Projeler (Dinamik Listeleme)
const projeler = [
  { isim: "Web Sitesi 1", resim: "images/proje1.jpg", kategori: "web" },
  { isim: "Mobil Uygulama 1", resim: "images/proje2.jpg", kategori: "mobil" },
  { isim: "Web App 2", resim: "images/proje3.jpg", kategori: "web" },
  { isim: "Mobil App 2", resim: "images/proje4.jpg", kategori: "mobil" },
  { isim: "Kişisel Blog", resim: "images/proje5.jpg", kategori: "web" }
];

const projeListesi = document.getElementById("projeListesi");

function projeleriGoster(liste) {
  projeListesi.innerHTML = "";
  liste.forEach((p) => {
    const kart = document.createElement("div");
    kart.classList.add("proje");
    kart.innerHTML = `
      <img src="${p.resim}" alt="${p.isim}">
      <h3>${p.isim}</h3>
      <p>Kategori: ${p.kategori}</p>
    `;
    projeListesi.appendChild(kart);
  });
}
projeleriGoster(projeler);

// Filtreleme
const filtreButonlari = document.querySelectorAll(".filtreBtn");
filtreButonlari.forEach((btn) => {
  btn.addEventListener("click", () => {
    const kategori = btn.dataset.kategori;
    if (kategori === "tum") {
      projeleriGoster(projeler);
    } else {
      const filtrelenmis = projeler.filter(p => p.kategori === kategori);
      projeleriGoster(filtrelenmis);
    }
  });
});
