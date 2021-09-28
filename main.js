const internetStatus = document.getElementById("status");


function displayOnlineStatus() {
  if (internetStatus.classList.contains("offline")) {
    internetStatus.classList.remove("offline");
  }
  internetStatus.classList.add("online");
  internetStatus.textContent = "Internet Connection Available";
}

function displayOfflineStatus() {
  if (internetStatus.classList.contains("online")) {
    internetStatus.classList.remove("online");
  }
  internetStatus.classList.add("offline");
  internetStatus.textContent = "No Internet Connection";
}

if (window.navigator.onLine) {
  displayOnlineStatus();
} else {
  displayOfflineStatus();
}

window.addEventListener("online", displayOnlineStatus);
window.addEventListener("offline", displayOfflineStatus);