const starsContainer = document.getElementById("stars");

for(let i = 0; i < 150; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    starsContainer.appendChild(star);
}

document.querySelector("a").addEventListener("click",function(){

    console.log("Going to our story ❤️");

});
const secretBtn = document.getElementById("secretBtn");

const secretMessage =
document.getElementById("secretMessage");

secretBtn.addEventListener("click",()=>{

    secretMessage.classList.toggle("hidden");

});
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }

    });

});

document
.querySelectorAll("section")
.forEach(section=>{

    section.classList.add("fade-in");

    observer.observe(section);

});
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerHTML = "💖";

  // random position
  heart.style.left = Math.random() * 100 + "vw";

  // random size
  heart.style.fontSize = (10 + Math.random() * 20) + "px";

  // random speed
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.getElementById("hearts-container").appendChild(heart);

  // remove after animation
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// generate hearts continuously
setInterval(createHeart, 300);
document.addEventListener("click", function () {
  const music = document.getElementById("bg-music");
  if (music) {
    music.play();
  }
});
