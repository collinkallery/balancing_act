var closeImg = document.getElementById("close");
var welcomeBanner = document.getElementById("oscar");

function hideBanner() {
welcomeBanner.style.display = "none";
closeImg.style.display = "none";
};

closeImg.addEventListener("click", hideBanner);


var clipboardHover = document.getElementById("img1");
var walletHover = document.getElementById("img2");
var profileHover = document.getElementById("img3");
var hideMain = document.getElementById("entire-section")


function addHover1 () {
  if (clipboardHover.classList.contains("icon-active")) {
    clipboardHover.classList.remove("icon-active");
  } else {
    clipboardHover.classList.add("icon-active");
    walletHover.classList.remove("icon-active");
    profileHover.classList.remove("icon-active");
    hideMain.style.display = "inline-block";
  }
}


clipboardHover.addEventListener("click", addHover1);

function addHover2 () {
  if (walletHover.classList.contains("icon-active")) {
    walletHover.classList.remove("icon-active");
  } else {
    walletHover.classList.add("icon-active");
    clipboardHover.classList.remove("icon-active");
    profileHover.classList.remove("icon-active");
    hideMain.style.display = "none";
  }
}

walletHover.addEventListener("click", addHover2);


function addHover3 () {
  if (profileHover.classList.contains("icon-active")) {
    profileHover.classList.remove("icon-active");
  } else {
    profileHover.classList.add("icon-active");
    walletHover.classList.remove("icon-active");
    clipboardHover.classList.remove("icon-active");
    hideMain.style.display = "none"
  }
}


profileHover.addEventListener("click", addHover3);
