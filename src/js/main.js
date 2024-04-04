import "../scss/index.scss";

const arrTextVideo = [
  "Watch my video to the end, where I earned $5,000 in real time with in front of your eyes.",
  "After watching the video in FULL, a button to switch to Aviator will appear on my website.",
  "Make a registration, deposit and earn on the aviator from $10,000 per day!",
];
const arrText = [
  "Register",
  "Make a deposit",
  "Earn from 60,000 rupees in Aviator per day!",
];

const preloader = document.getElementById("preloader");
const cnp = document.querySelector(".cnp");
const logo = document.querySelector(".logotype");
const blockContent = document.querySelector(".block-content");
const blockImg = document.querySelector(".block-img");
const blockImgVideo = document.querySelector(".block-img-video");
const ol = document.querySelector(".ol");
const cnpVideo = document.querySelector(".cnp-video");
const blockText = document.querySelector(".block-text");
const cnpCross = document.querySelector(".block-cross");
const video = document.querySelector("#video-styles");
const li = document.querySelectorAll(".li");

window.addEventListener("load", function () {
  preloader.style.display = "none";
});

cnp.addEventListener("click", function () {
  toggleClass(
    "elem-none",
    "block-content-video",
    "img-none",
    "cnp-video-block",
    "display-block-video",
    "ol-video",
    "show-cross",
    "cnp-none"
  );
  toggleText(arrTextVideo);
  blockContent.prepend(ol);
});

cnpCross.addEventListener("click", function (e) {
  e.preventDefault();
  toggleClass(
    "elem-none",
    "block-content-video",
    "img-none",
    "cnp-video-block",
    "display-block-video",
    "ol-video",
    "show-cross",
    "cnp-none"
  );
  toggleText(arrText);
  blockText.prepend(ol);
  outVideo();
});

function toggleClass(
  elemNone,
  contentVideo,
  imgNone,
  cnpVideoBlock,
  displayBlockVideo,
  olVideo,
  showCross,
  cnpNone
) {
  logo.classList.toggle(elemNone);
  blockContent.classList.toggle(contentVideo);
  blockImg.classList.toggle(imgNone);
  cnpVideo.classList.toggle(cnpVideoBlock);
  blockImgVideo.classList.toggle(displayBlockVideo);
  ol.classList.toggle(olVideo);
  cnpCross.classList.toggle(showCross);
  cnp.classList.toggle(cnpNone);
}

function toggleText(text) {
  for (let i = 0; i < li.length; i++) {
    li[i].classList.add("li");
    li[0].textContent = text[0];
    li[1].textContent = text[1];
    li[2].textContent = text[2];
  }
}

function outVideo() {
  video.pause();
}

cnpVideo.addEventListener("click", function () {
  video.controls = true;
  video.play();
});
