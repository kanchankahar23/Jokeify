const h3 = document.getElementById('joke')
const h4 = document.querySelector('h4')
const button = document.querySelector('button');
button.addEventListener('click', () =>{
   showjoke();
   h4.innerText = "";
});
function showjoke(){
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    })
    .then(res => res.json())
    .then(data =>{
        if(data && data.joke){
            h3.textContent = data.joke
        }
        else{
            h3.textContent = "Oops! Couldn't load joke";
        }
    })
    .catch(error =>{
        console.error("Error Fetching joke", error);
        h3.textContent = "Something went wrong"
    });
}