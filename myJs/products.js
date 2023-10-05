var http = new XMLHttpRequest()
http.open('GET', 'https://dummyjson.com/products')
http.send()
var data 
http.addEventListener('readystatechange', function () {
    if (http.readyState == 4) {
        data = JSON.parse(http.response).products
        displayData()
    }
})


function displayData() {
    var x = ``
    for (var i = 0; i < data.length; i++){
        x += `<div class="card m-5" style="width: 18rem;">
        <img src="${data[i].images[0]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[i].title}</h5>
          <p class="card-text">${data[i].description}</p>
          <button onclick="oneProduct(${i})">View</button>
        </div>
      </div>`
        document.getElementById('rowjs').innerHTML = x
    }
}


function oneProduct(x) {
  let productItem = {
    name: data[x].title,
    price: data[x].price,
    description: data[x].description,
    images: data[x].images
  }

  localStorage.setItem('Product', JSON.stringify(productItem))
  window.open("http://127.0.0.1:5500/product.html", "_self")
}