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