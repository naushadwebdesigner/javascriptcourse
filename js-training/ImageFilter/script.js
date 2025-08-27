const cardsData = [
    {
        id: 1,
        title: "Mountain View",
        description: "Beautiful landscape with mountains under a dramatic sky.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Green Forest",
        description: "Peaceful view of a lush green forest with sunlight rays.",
        image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Sunny Beach",
        description: "Relaxing ocean waves hitting the sandy shore under the sun.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "City Lights",
        description: "Night view of a bustling city with glowing skyscrapers.",
        image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Desert Dunes",
        description: "Golden sand dunes under a bright clear sky.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Snowy Peaks",
        description: "Majestic snow-covered peaks reaching the clouds.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "Autumn Path",
        description: "A calm walkway surrounded by autumn leaves.",
        image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "Tropical Island",
        description: "Palm trees and turquoise water on a tropical island.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
    },

];

const searchInput = document.querySelector("#searchInput");
const container = document.querySelector(".container");


function getCards(card) {
    card.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
                <img src="${item.image}"
                    alt="${item.title}">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `
        container.append(div);
    });

}

getCards(cardsData)

searchInput.addEventListener("input", function () {
    let filter = cardsData.filter((item) => {
        return item.description.toLowerCase().includes(searchInput.value);
    })
    container.innerHTML = "";
    getCards(filter)
})









