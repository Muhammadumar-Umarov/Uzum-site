import { fetchData } from "./main.js"
const boxEl = document.querySelector(".box")
const params = new URLSearchParams(location.search)
const collectionEl = document.querySelector(".collection")

function renderRecipeDetail(data) {
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

function renderCategoryList(data) {
  data.forEach((tag) => {
    const li = document.createElement("li")
    li.innerHTML = tag
    collectionEl.appendChild(li)
  })
}

window.onload = () => {
  const id = params.get("id")
  fetchData(`/products/${id}`, renderRecipeDetail, () => { })
  fetchData("/products/category-list", renderCategoryList, () => { })
}


     