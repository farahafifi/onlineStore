let newData = JSON.parse(localStorage.getItem('Product'))
let cont = document.getElementById('container')

if (newData != null) {
  addData()
  console.log(newData);
}


// function loopImg() {
//   for (let i = 0; i < newData.images.length; i++){
    
//   }
// }



function addData() {

    cont.innerHTML = `<div class="row" style="height: 300px">
    <div class="product-carousel">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" style="height: 550px;">
          <div class="carousel-item active">
            <img src="${newData.images[0]}" class="d-block w-50" style="height:100%"alt="...">
          </div>
          <div class="carousel-item">
            <img src="${newData.images[1]}" class="d-block w-50" style="height:100%" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${newData.images[2]}" class="d-block w-100" style="height:100%" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${newData.images[3]}" class="d-block w-100" style="height:100%" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon iconColor" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon iconColor" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</div>
</div>
    
</div>
    <div class="product-card mt-5">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${newData.images[0]}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${newData.name}</h5>
                  <p class="card-text">${newData.price}</p>
                  <p class="card-text">${newData.description}</p>
                </div>
              </div>
            </div>
          </div>
    </div>
</div>`
}