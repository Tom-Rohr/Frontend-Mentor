const adviceButton = document.getElementById("getAdviceButton")
const adviceContainer = document.getElementById("advice")
const adviceNumber = document.getElementById("advice-id")
const url = "https://api.adviceslip.com/advice";

adviceButton!.addEventListener("click", async() =>{
    const jokeData = await fetch(url);
    const {slip:{id, advice}} = await jokeData.json();
    adviceNumber!.innerText = id;
    adviceContainer!.innerText = advice;
});
