let persoImg = document.getElementById('profile-pic');

function replaceImg () {
    persoImg.src = "images/crazy-me.jpg";
};

persoImg.addEventListener("click", replaceImg);