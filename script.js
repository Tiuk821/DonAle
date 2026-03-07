// Data Ramalan
const ramalan = [
    {
      tipe: "Donat Gula Halus",
      deskripsi: "Manis di awal, tapi bikin berantakan. Hati-hati kalau janji!",
    },
    {
      tipe: "Donat Coklat Meses",
      deskripsi: "Klasik & Setia. Tipe idaman mertua, gak neko-neko.",
    },
    {
      tipe: "Donat Keju",
      deskripsi: "Kombinasi asin manis. Mood kamu lagi swing banget ya?",
    },
    {
      tipe: "Donat Bolong Tengah",
      deskripsi: "Lagi merasa hampa? Tenang, isi dengan donat ini!",
    }
  ];
  
  // Referensi Elemen DOM
  const uiLayer = document.querySelector('#ui-layer');
  const btnRoll = document.querySelector('#btn-roll');
  const targetEntity = document.querySelector('#target-entity');
  
  // Referensi Elemen A-Frame (Teks 3D)
  const txtTipe = document.querySelector('#txt-tipe');
  const txtDesc = document.querySelector('#txt-desc');
  
  // 1. Event Listener: Saat target ditemukan (Kartu discan)
  targetEntity.addEventListener("targetFound", event => {
    console.log("Target Ditemukan");
    uiLayer.style.display = 'block'; // Munculkan tombol
    txtTipe.setAttribute('value', 'Siap meramal...');
    txtDesc.setAttribute('value', '');
  });
  
  // 2. Event Listener: Saat target hilang
  targetEntity.addEventListener("targetLost", event => {
    console.log("Target Hilang");
    uiLayer.style.display = 'none'; // Sembunyikan tombol
  });
  
  // 3. Fungsi Logika Tombol
  btnRoll.addEventListener('click', () => {
      const hasil = acakNasib();
      
      // Update Teks 3D di AR
      // Gunakan setAttribute untuk mengubah properti 'value' pada a-text
      txtTipe.setAttribute('value', hasil.tipe);
      txtDesc.setAttribute('value', hasil.deskripsi);
      
      console.log("Hasil:", hasil.tipe);
  });
  
  // Fungsi Randomizer
  function acakNasib() {
    const index = Math.floor(Math.random() * ramalan.length);
    return ramalan[index];
  }