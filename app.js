const shortsContianers = document.querySelectorAll(".shortsContianer");
const shortsNextBtn = document.querySelector(".shortsNextBtn");
const shortsNextBtnI = document.querySelector(".shortsNextBtn button");
const closeBtn = document.querySelector(".closeBtn button");
const activeContents = document.querySelector(".activeContents");
const activeContentsH1 = document.querySelector(".activeContents h1");
const activeContentsVideo = document.querySelector(".activeContents video");

for (let shortsContianer of shortsContianers) {
  shortsContianer.addEventListener("mouseover", (event) => {
    const video = event.currentTarget.querySelector("video");
    video.classList.add("hover");
    video.muted = true;
    video.loop = true;
    video.play();
  });
}

for (let shortsContianer of shortsContianers) {
  shortsContianer.addEventListener("mouseleave", (event) => {
    const video = event.currentTarget.querySelector("video");
    video.classList.remove("hover");
    video.pause();
  });
}

for (let shortsContianer of shortsContianers) {
  shortsContianer.addEventListener("click", (event) => {
    const video = event.currentTarget.querySelector("video");
    const p = event.currentTarget.querySelector(".text p");

    activeContents.classList.add("active");
    activeContentsVideo.src = video.src;
    activeContentsH1.innerText = p.innerText;
    activeContentsVideo.controls = true;
    activeContentsVideo.muted = true;
    activeContentsVideo.play();
  });
}

const handleShowNextBtn = () => {
  shortsNextBtnI.classList.remove("hidden");
};

const handleHideNextBtn = () => {
  shortsNextBtnI.classList.add("hidden");
};

const handleHideActive = () => {
  activeContents.classList.remove("active");
};

shortsNextBtn.addEventListener("mouseover", handleShowNextBtn);
shortsNextBtn.addEventListener("mouseleave", handleHideNextBtn);
closeBtn.addEventListener("click", handleHideActive);
