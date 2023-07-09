const allQuotes = [
    {
        en: "There's no way we could pay you back, but the plan is to show you that we understand, you are appreciated",
        pt: "",
        img: "./images/pops and sons.jpeg"
    },
    {
        en: "Not all heroes wear capes",
        pt: "Nem todos heróis usam capas",
        img:"./images/pops no job.jpeg"
    },
    {
        en: "The father, the ruler",
        pt: "O pai, o líder",
        img:"./images/great pops.jpeg"
    },
    {
        en: "Ain't nothing worst than losing your hero and couldn't say goodbye. And we never know just when it's our time time, the legends are gone and we don't know why. So before they go, look here goes a toast, So give them a rose while they're still alive.",
        pt: "",
        img:"./images/pops and moms.jpeg"
    },
    {
        en: "It's a pleasure to have you by our side, we love you",
        pt: "É um prazer ter-te do nosso lado, te amamos!",
        img:"./images/pops barriga.jpeg"
    },
    {
        en: "THE GOAT",
        pt: "O MELHOR DE TODOS TEMPOS",
        img:"./images/pops new job.jpeg"
    },
    {
        en: "BOSS",
        pt: "Patrão",
        img:"./images/pops conference.jpeg"
    },
    {
        en: "Melhor não há",
        pt: "E sim, havemos de ir a Europa kkk",
        img:"./images/pops and gran.jpeg"
    },
    {
        en: "We are eternally greatfull for all the effort you've put in to us all those years, we wish there was a way to pay you back",
        pt: "",
        img:"./images/pops moms 2.jpeg"
    },
    {
        en: "Sempre com o chapéu ☻♥",
        pt: "",
        img:"./images/31.jpeg"
    },

]
document.addEventListener("DOMContentLoaded",()=>{
    const imgElement = document.querySelector('.images');
    const quote1 = document.querySelector(".quote1")
    const quote2 = document.querySelector(".quote2")
    const nextBtn = document.querySelector(".next")

    function generateRandom(){
        const randomNumb = Math.floor(Math.random() * 10)
        return randomNumb;
    }
    function loopArr (){
        document.querySelector(".loading").style.display = "flex"
        const rand = generateRandom()
        const element = allQuotes[rand];
        imgElement.src = element.img;
        imgElement.addEventListener("load",()=>{
            document.querySelector(".loading").style.display = "none"
            quote1.textContent = element.en;
            quote2.textContent = element.pt;
    
        })
    }
    loopArr();
    nextBtn.addEventListener("click", ()=>{
        loopArr();
    })
    
})
