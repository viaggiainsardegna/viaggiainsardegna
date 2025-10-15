// Gestione click su Richiedi Preventivo per aprire pagina con dati

document.querySelectorAll('.btn-preventivo').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const offerta = button.dataset.offerta;

    const select = card.querySelector('.date-prezzo');
    if(!select) return alert("Seleziona una data e prezzo.");

    const val = select.value; // "2025-06-01|1000"
    if(!val) return alert("Seleziona una data e prezzo.");

    const url = `preventivo.html?offerta=${encodeURIComponent(offerta)}&datePrezzo=${encodeURIComponent(val)}`;
    window.location.href = url;
  });
});

// Pulsanti Prenota e Acquista possono avere funzioni personalizzate
document.querySelectorAll('.btn-prenota').forEach(button => {
  button.addEventListener('click', () => {
    alert("Funzionalità Prenota in sviluppo.");
  });
});

document.querySelectorAll('.btn-acquista').forEach(button => {
  button.addEventListener('click', () => {
    alert("Funzionalità Acquista in sviluppo.");
  });
});
