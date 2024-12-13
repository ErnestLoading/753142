const forma = document.getElementById('kontaktu-forma');
const siustiMygtukas = document.getElementById('siusti');
const rezultatasDiv = document.getElementById('rezultatas');

siustiMygtukas.addEventListener('click', (e) => {
    e.preventDefault();

    const vardas = document.getElementById('vardas').value;
    const pavarde = document.getElementById('pavarde').value;
    const elpastas = document.getElementById('elpastas').value;
    const telefonas = document.getElementById('telefonas').value;
    const adresas = document.getElementById('adresas').value;
    const pozimis1 = parseInt(document.getElementById('pozymis1').value);
    const pozimis2 = parseInt(document.getElementById('pozymis2').value);
    const pozimis3 = parseInt(document.getElementById('pozymis3').value);
    const pozimis4 = parseInt(document.getElementById('pozymis4').value);
    const pozimis5 = parseInt(document.getElementById('pozymis5').value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(elpastas)) {
        alert('Blogas el. paštas.');
        return;
    }
    const phonePattern = /^\+?[0-9]{10,15}$/; // Pavyzdys: +1234567890
            if (!phonePattern.test(telefonas)) {
                alert('Prašome įvesti galiojantį telefono numerį.');
                return;
            }
    if (adresas.trim() === '') {
        alert('Prašome įvesti adresą.');
        return;
    }
    const kontaktai = {
        vardas: vardas,
        pavarde: pavarde,
        elpastas: elpastas,
        telefonas: telefonas,
        adresas: adresas,
        pozymiai: [pozimis1, pozimis2, pozimis3, pozimis4, pozimis5]
    };

    const vidurkis = kontaktai.pozymiai.reduce((a, b) => a + b, 0) / kontaktai.pozymiai.length;
    console.log(kontaktai);
    let color = 'black';
    if (vidurkis < 5) {
        color = 'red';
    } else if (vidurkis >= 5 && vidurkis < 8) {
        color = 'orange';
    } else {
        color = 'green';
    }
    rezultatasDiv.innerHTML = `
    <p>Vardas: ${kontaktai.vardas}</p>
    <p>Pavardė: ${kontaktai.pavarde}</p>
    <p>Tel Nr: ${kontaktai.telefonas}</p
    <p>El. pašto adresas: ${kontaktai.elpastas}</p>
    <p>Adresas: ${kontaktai.adresas}</p>
    <p>Požymis 1: ${kontaktai.pozymiai[0]}</p>
    <p>Požymis 2: ${kontaktai.pozymiai[1]}</p>
    <p>Požymis 3: ${kontaktai.pozymiai[2]}</p>
    <p>Požymis 4: ${kontaktai.pozymiai[3]}</p>
    <p>Požymis 5: ${kontaktai.pozymiai[4]}</p>
    <br>
    <p style="margin-bottom: 40vh; ">${kontaktai.vardas} ${kontaktai.pavarde} (${kontaktai.elpastas}):  <span style="color: ${color}">${vidurkis.toFixed(2)}</span></p>`;

});

