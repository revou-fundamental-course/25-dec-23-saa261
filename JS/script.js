
function ubahHalaman(halaman) {
    const content = document.getElementById('content');
    content.textContent = halaman;

    const luasSegitiga = document.getElementById('luasSegitiga');
    const kelilingSegitiga = document.getElementById('kelilingSegitiga');

    if (halaman === 'luas') {
        luasSegitiga.classList.remove('hidden');
        kelilingSegitiga.classList.add('hidden');
    } else {
        kelilingSegitiga.classList.remove('hidden');
        luasSegitiga.classList.add('hidden');
    }
}

function hitungLuas() {
    const alas = document.getElementById('alas').value;
    const tinggi = document.getElementById('tinggi').value;

    const luas = 0.5 * alas * tinggi;

    const hasilLuas = document.getElementById('hasilLuas');
    hasilLuas.textContent = 'Luas Segitiga: ' + luas;
}

function hitungKeliling() {
    let sisi1 = document.getElementById("sisi1").value;
    let sisi2 = document.getElementById("sisi2").value;
    let sisi3 = document.getElementById("sisi3").value;

    let keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);

    const hasilKeliling = document.getElementById('hasilKeliling');
    hasilKeliling.textContent = 'Keliling Segitiga: ' + keliling.toFixed(0);
}

function resetInput() {
    const alas = document.getElementById('alas');
    const tinggi = document.getElementById('tinggi');
    const sisi1 = document.getElementById('sisi1');
    const sisi2 = document.getElementById('sisi2');
    const sisi3 = document.getElementById('sisi3');

    alas.value = '';
    tinggi.value = '';
    sisi1.value = '';
    sisi2.value = '';
    sisi3.value = '';

    const hasilLuas = document.getElementById('hasilLuas');
    const hasilKeliling = document.getElementById('hasilKeliling');

    hasilLuas.textContent = '';
    hasilKeliling.textContent = '';
}