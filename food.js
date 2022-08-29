const foodNameInput = document.querySelector(".user-input");
const siginBtn = document.querySelector(".signin-button");
const info = document.querySelector(".cards")
siginBtn.addEventListener("click", signIn);


function signIn(event) {
  event.preventDefault();
  sendRequest() ;
}



async function sendRequest() {
    const foodName = foodNameInput.value;
    const apiId = "96c02e5d"
    const apiKey = "9714bd021e18ee59eb5e9a540ad742f7";
    const url = `https://api.edamam.com/search?q=${foodName}&app_id=${apiId}&app_key=${apiKey}&diet=low-carb`
    let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      useApiData(data.hits); //


     
      
function useApiData(results) {

results.map (result =>{
  console.log(results);
  const content = document.getElementById("content");
// -------------------------------------------------------
  const div = document.createElement("div");
       div.classList.add("card");
      const mark2=`
      <img  class="card-image" src="${result.recipe.image}" alt="food">
      <div class="card-content">
      <h4>${result.recipe.label}</h4>
      <p>
      cuisineType: ${result.recipe.cuisineType}
        </p>
        <button class="button button5 " style="vertical-align:middle"><span><a href="${result.recipe.url}">Visit!</a> </span></button>
     </div>`;
   div.innerHTML = mark2;
   info.appendChild(div);

})
}
}
