function revealMessage() {
    const message = document.getElementById('hiddenMessage');
    message.classList.toggle('hidden');
}

function updateCounter() {
    const birthday = new Date("1999-12-30T00:00:00"); // Remplace avec ton année de naissance
    const now = new Date();
    const diff = now - birthday;
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById("counter").innerHTML = 
        `Âge : ${years} ans, ${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;
}

setInterval(updateCounter, 1000);