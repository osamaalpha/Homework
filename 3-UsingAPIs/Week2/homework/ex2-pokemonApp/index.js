'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populates the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Try and avoid using global variables. Instead, use function parameters and 
return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  // TODO complete this function
  try{
    const fetching= await fetch(url)
  const respond =await fetching.json()
  return respond
  }
  catch(error){
    console.log(error);

  }
}

function fetchAndPopulatePokemons() {
  // TODO complete this function
  const selectPokemon = document.createElement("select")
    document.body.appendChild(selectPokemon)
   fetchData("https://pokeapi.co/api/v2/pokemon/")
   .then((data)=>{
    data.results.forEach(el => {
      const optionElement=document.createElement("option")
      optionElement.text=el.name
      selectPokemon.add(optionElement)
      optionElement.value=el.name
      return data
    })
  })
  return selectPokemon
}
function fetchImage() {
  // TODO complete this function
  const selectImage=document.createElement("img")
  document.querySelector("select").onchange=()=>{
      fetchData(`https://pokeapi.co/api/v2/pokemon/${ document.querySelector("select").value}`)
      .then((data)=>{
        selectImage.src=data.sprites.front_default
        document.body.appendChild(selectImage)
        return data
      })
      .catch((error)=>{
        console.log(error)
      })
  }
}


function main() {
  // TODO complete this function
  fetchAndPopulatePokemons()
fetchImage()
}

window.addEventListener('load', main);