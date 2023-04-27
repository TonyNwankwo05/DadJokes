const btnElem = document.getElementById("btn");
const jokeElem = document.getElementById("joke");


const apiKey = "rAo+/JCr1Job2VUmWzBGnA==w13wgWwt1UTryAL6";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {


    try {
        jokeElem.innerText = "Loading...";
        btnElem.disabled = true;
        btnElem.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnElem.disabled = false;
        btnElem.innerText = "Tell Me A Joke";
        
        jokeElem.innerText = data[0].joke;
        
    } catch (error) {
        jokeElem.innerText = "You've encountered an error, please try again later";
        btnElem.disabled = false;
        btnElem.innerText = "Tell Me A Joke";
    }


}

btnElem.addEventListener("click", getJoke);