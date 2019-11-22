var closeImg = document.getElementById("close");
var welcomeBanner = document.getElementById("oscar");

function hideBanner() {
welcomeBanner.style.display = "none";
closeImg.style.display = "none";
};

closeImg.addEventListener("click", hideBanner);
