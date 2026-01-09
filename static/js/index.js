// Fonction pour gérer l'ouverture/fermeture d'une "fenêtre"
function openWindow(projectId, title) {
  // ... (votre fonction openWindow) ...
  // Le code pour créer et insérer la fenêtre modale reste inchangé.
}

function closeWindow(projectId) {
  // ... (votre fonction closeWindow) ...
}

// Fonction pour afficher l'heure
function updateClock() {
  const clockElement = document.getElementById("clock");
  if (clockElement) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}`;
  }
}

// ----------------------------------------------------
// Événements d'écoute
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // 1. Gérer les clics sur les icônes
  const projectIcon = document.getElementById("project1");
  if (projectIcon) {
    projectIcon.addEventListener("click", () => {
      openWindow("project1", "Mon Premier Logiciel");
    });
  }

  // 2. Mise à jour de l'horloge
  updateClock(); // Appel initial
  setInterval(updateClock, 60000); // Mise à jour toutes les minutes (60000 ms)

  // NOTE : L'écouteur du bouton Démarrer a été retiré.
});
