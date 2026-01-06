const home = document.getElementById("home");
const licence = document.getElementById("licence");
const refreshTime = document.getElementById("refreshTime");
const qrOverlay = document.getElementById("qrOverlay");
const qrCanvas = document.getElementById("qrCanvas");

function openLicence() {
  home.classList.remove("active");
  licence.classList.add("active");
  updateRefreshTime();
  generateQR();
}

function goHome() {
  licence.classList.remove("active");
  home.classList.add("active");
  hideQR();
}

function updateRefreshTime() {
  const now = new Date();
  refreshTime.textContent =
    "Last refreshed " +
    now.toLocaleDateString("en-AU") +
    " at " +
    now.toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" });
}

function generateQR() {
  const ctx = qrCanvas.getContext("2d");
  qrCanvas.width = 220;
  qrCanvas.height = 220;
  ctx.clearRect(0, 0, 220, 220);

  ctx.fillStyle = "#000";
  for (let y = 0; y < 22; y++) {
    for (let x = 0; x < 22; x++) {
      if (Math.random() > 0.5) {
        ctx.fillRect(x * 10, y * 10, 8, 8);
      }
    }
  }
}

function showQR() {
  qrOverlay.classList.add("active");
}

function hideQR() {
  qrOverlay.classList.remove("active");
}
