class Createcar {
    constructor([image, brandName, color, model, version, company, avail, price]) {
        this.image = image;
        this.brandName = brandName;
        this.color = color;
        this.model = model;
        this.version = version;
        this.company = company;
        this.avail = avail;
        this.price = price;
    }
}



let arr1 = JSON.parse(localStorage.getItem("car")) || [];
let carList = document.querySelector("#carList");
let filterBox = document.querySelector("#filterBox");

function carRendor() {
    carList.innerHTML = "";
    let filter = filterBox.value;

    let filteredCars = arr1.filter(car => {
        if (filter === "available") return car.avail === true;
        if (filter === "not") return car.avail === false;
        return true;
    });

    filteredCars.forEach((car, index) => {
        let card = document.createElement("div");
        card.className = "car-card";
        card.innerHTML = `
      <h2>${car.brandName} (${car.model})</h2>
      <img src="${car.image}" alt="${car.brandName}"/>
      <p><strong>Color:</strong> ${car.color}</p>
      <p><strong>Version:</strong> ${car.version}</p>
      <p><strong>Company:</strong> ${car.company}</p>
      <p><strong>Price:</strong> ₹${car.price}</p>
      <p class="${car.avail ? "available" : "not-available"}">
        ${car.avail ? "Available ✅" : "Not Available ❌"}
      </p>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
        carList.appendChild(card);
    });

    // Delete Button Event
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            let i = this.getAttribute("data-index");
            arr1.splice(i, 1);
            localStorage.setItem("car", JSON.stringify(arr1));
            carRendor();
        });
    });
}

carRendor();

// Add Car Form
document.querySelector("#carForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let image = document.querySelector("#image").value;
    let brand = document.querySelector("#brand").value;
    let color = document.querySelector("#color").value;
    let model = document.querySelector("#model").value;
    let version = document.querySelector("#version").value;
    let company = document.querySelector("#company").value;
    let avail = document.querySelector("#avail").value === "true";
    let price = document.querySelector("#price").value;

    arr1.push(new Createcar([image, brand, color, model, version, company, avail, price]));
    localStorage.setItem("car", JSON.stringify(arr1));
    this.reset();
    carRendor();
});

// Filter Change
filterBox.addEventListener("change", carRendor);