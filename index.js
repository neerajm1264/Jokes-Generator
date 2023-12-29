let joke = document.getElementById("joke");
 
async function getJoke(){

    joke.textContent = 'Loading...';
 
    let result = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            accept :" application/json" ,
        },
    })
    .then((res)=> res.json())
    .then((data)=> data.joke)
    joke.innerHTML=result;
    
}
window.onload = getJoke;
