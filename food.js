const foodNameInput = document.querySelector(".user-input");
const siginBtn = document.querySelector(".signin-button");
const info = document.querySelector(".info")
siginBtn.addEventListener("click", signIn);

function signIn(event) {
    console.log("jj")
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
  console.log(result.recipe.label);
  const li = document.createElement("li");
  const p = document.createElement("p");
  const a = document.createElement("a");
  const content = document.getElementById("content");
// -------------------------------------------------------
  const div = document.createElement("div");
                div.classList.add("new");
                const mark = `
                <h2 >${result.recipe.label}<h2>
                <h4 >cuisineType: ${result.recipe.cuisineType}<h4>
                <a href="${result.recipe.url}">Visit!</a>
                </h2>
                <div ></div>
                `;
                div.innerHTML = mark;
                info.appendChild(div);
  
// ------------------------------------------------------
  // a.innerHTML = ` ${result.recipe.url}`
  // p.innerHTML =`cuisineType: ${result.recipe.cuisineType}`;
  // li.innerHTML =`${result.recipe.label}`;
  // content.appendChild(a)
  // content.appendChild(li);
  // content.appendChild(p);
  content.appendChild(div);

})
}
}
