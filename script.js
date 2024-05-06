const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const даButton = document.querySelector(".Да-button")
const нетButton = document.querySelector(".Нет-button")

даButton.addEventListener("click", ()=> {
    question.innerHTML = "Урааа, я очень рада и ужасно тебя люблю!";
    gif.src="https://media1.tenor.com/m/qKvWT2UBPCIAAAAC/peach-and-goma-temper-tantrum.gif"
})

нетButton.addEventListener("mouseover", ()=> {
    const нетButtonRect = нетButton.getBoundingClientRect();
    const maxX = window.innerWidth - нетButtonRect.width;
    const maxY = window.innerHeight - нетButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    нетButton.style.left = randomX + "px";
    нетButton.style.top = randomY + "px"; 
})



