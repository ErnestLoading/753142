function showTime() {
  // Gauname dabartinę datą ir laiką
  const now = new Date();

  // Formatuojame laiką į skaitomą formatą (HH:MM:SS)
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Sujungiame laiką į vieną eilutę
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Atvaizduojame laiką HTML elemente
  document.getElementById('clock').textContent = formattedTime;
}

// Iš pradžių iškviečiame funkciją, kad laikrodis pradėtų veikti iškart
showTime();

// Nustatome intervalą, kad funkcija būtų vykdoma kas sekundę
setInterval(showTime, 1000);








