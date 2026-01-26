
function closePopup() {
  const popup = document.getElementById("beta-popup");
  if (popup) {
    popup.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("beta-popup");
  
  
  if (sessionStorage.getItem("popupSeen") === "true") {
    if (popup) {
      popup.style.display = "none";
    }
  }
});

function closePopup() {
  const popup = document.getElementById("beta-popup");
  if (popup) {
    popup.style.display = "none";
    sessionStorage.setItem("popupSeen", "true");
  }
}

function openWindow(projectId) {
  window.location.href = `project.html?name=${projectId}`;
}


function closeWindow(projectId) {

}


function updateClock() {
  const clockElement = document.getElementById("clock");
  if (clockElement) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {

  const projectIcon = document.getElementById("project1");
  if (projectIcon) {
    projectIcon.addEventListener("click", () => {
      openWindow("project1", "Mon Premier Logiciel");
    });
  }

  updateClock(); // Appel initial
  setInterval(updateClock, 60000); 

});
