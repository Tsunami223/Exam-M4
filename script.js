const ENDPOINT= "https://striveschool-api.herokuapp.com/api/product/";
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA0NTc3ZTdiNTFlMzAwMWExZDFiZjUiLCJpYXQiOjE3MTE3MDkzNjYsImV4cCI6MTcxMjkxODk2Nn0.4_91M5wctLcxqw4Xamts4TAfDH6sEmZRGcVSpW4aAdE";

const obj= {
    name: "test",
    description: "test",
    brand: "Ferrari",
    imageUrl: "https://picsum.photos/200/300",
    price: 10000,
}

const hideSpinner = () => {
    const spinner = document.querySelector("#spinner");
    spinner.classList.add("d-none");
}
const showSpinner = () => {
    const spinner = document.querySelector("#spinner");
    spinner.classList.remove("d-none");
}

const getData = async () => {
    const OPTIONS= {
        headers : {
            "Authorization": KEY,
            "Content-type": "application/json"
        }
    } 
    try {
    const response = await fetch(ENDPOINT, OPTIONS); 
    const data = await response.json();
    
    if (response.ok) {return data}
} catch (error) {console.error}
}
const createData = async () => {
    const OPTIONS= {
        method: "POST",
        body: JSON.stringify(obj),
        headers : {
            "Authorization": KEY,
            "Content-type": "application/json"

        }
    } 
    try {
    const response = await fetch(ENDPOINT, OPTIONS); 
    const data = await response.json();
    
    if (response.ok) {return data}
} catch (error) {console.error}
}
getData()
.then (res => res.map(data => createCard(data)/* ,deleteData (data._id) */));


const createCard = (data) => {
    const col= document.createElement ("div") 
    col.classList.add("col")
    col.innerHTML= `
    <div class="card">
    <div class="card-img">
    <img class="h-100 w-100 object-fit-cover img-fluid" src="${data.imageUrl}">                        
    </div>
    <div class="card-body">
    <div class="card-title">
    <h5>${data.name}</h5>
    </div>
    <div class="card-text">
    <p>${data.description}</p>
    </div>
    </div>
    <div class="card-footer d-flex justify-content-between">
    <a class="btn btn-primary">${data.price +" "+"$"}</a>
    <a class="btn btn-outline-primary">Add to cart</a>
    </div>
    </div>`
    document.getElementById("cardContainer").append(col)
}
document.querySelector("#btnDeleteElement").addEventListener("click", () => {
    const titleObj = document.querySelector("#productName"); /* fare un filter di title obj.value */
    getData()
    .then((res) => res.map((data) =>{} ));
    deleteData(ENDPOINT+data._id);
    const filterElement= obj.filter (data => data.name === titleObj.value);
})
deleteData = async (url) => {
const OPTIONS= {
    method: "DELETE",
    headers : {
        "Authorization": KEY,
            "Content-type": "application/json"
        }
    } 
    try {
    const response = await fetch(url, OPTIONS); 
    const data = await response.json();
    
    if (response.ok) {return data}
} catch (error) {console.error}
}
