let persoImg = document.getElementById('profile-pic');
let persoCaption = document.getElementById('profile-pic-caption');

function replaceImg () {
    persoImg.src = "images/crazy-me.jpg";
    persoCaption.innerHTML = "Ugly, isn't?"
};

persoImg.addEventListener("click", replaceImg);