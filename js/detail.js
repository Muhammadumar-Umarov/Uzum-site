import { fetchData } from "./main.js"
const boxEl = document.querySelector(".box")
const params = new URLSearchParams(location.search)

function renderRecipeDetail (data){
  console.log(data);
  boxEl.innerHTML = `
     <div>
        <img src=${data.images} width="400" alt=${data.title}>
      </div>
      <div>
        <h1>${data.title}</h1>
        <p>${data.price}$</p>
      </div>
  `
}

window.onload = ()=>{
  const id = params.get("id")
  fetchData(`/products/${id}`,renderRecipeDetail, ()=>{} )
}
