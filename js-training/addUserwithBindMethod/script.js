const usersParent = document.querySelector(".users-parent")
const form = document.querySelector("form");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const image = document.querySelector("#image");



let userManagement = {
    users: [],
    init: function () {

        const storeUser = localStorage.getItem("users");
        if (storeUser) {
            this.users = JSON.parse(storeUser);
            this.renderUi()
        }

        form.addEventListener("submit", this.formSubmit.bind(this))
    },
    formSubmit: function (e) {
        e.preventDefault()
        this.addUser()
    },

    validateInputs: function (name, email, phone, image) {
        // USERNAME CHECK
        if (name === "") {
            return "Enter username";
        }
        if (name.length < 3) {
            return "Username must be at least 3 characters long";
        }
        if (!/^[a-zA-Z ]+$/.test(name)) {
            return "Username should only contain letters";
        }

        // EMAIL CHECK
        if (email === "") {
            return "Enter email";
        }
        // simple email regex
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return "Enter a valid email";
        }

        // PHONE CHECK
        if (phone === "") {
            return "Enter phone number";
        }
        if (!/^\d{10}$/.test(phone)) {
            return "Phone must be 10 digits only";
        }

        // IMAGE CHECK
        if (image === "") {
            return "Enter image URL";
        }
        // simple URL check
        // if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(image)) {
        //     return "Enter a valid image URL (jpg, png, gif, webp)";
        // }

        return "";
    },


    addUser: function () {

        const errorMsg = this.validateInputs(
            userName.value.trim(),
            email.value.trim(),
            phone.value.trim(),
            image.value.trim()
        );

        if (errorMsg !== "") {
            alert(errorMsg);
            return;
        }

        this.users.push({
            userName: userName.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim(),
            image: image.value.trim(),
        })
        this.saveToLocalStorage();
        form.reset()
        this.renderUi()

    },

    renderUi: function () {
        usersParent.innerHTML = "";
        this.users.forEach((usr, index) => {
            let userCard = document.createElement("div");
            userCard.className = "user-card";

            let img = document.createElement("img");
            img.src = usr.image || "https://via.placeholder.com/60";
            img.alt = "User";

            let userInfo = document.createElement("div");
            userInfo.className = "user-info";

            let name = document.createElement("h3");
            name.textContent = usr.userName;

            let email = document.createElement("p");
            email.textContent = usr.email;

            let phone = document.createElement("p");
            phone.textContent = usr.phone;

            // REMOVE BUTTON
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "❌";
            removeBtn.className = "remove-btn";
            removeBtn.addEventListener("click", () => {
                this.removeUser(index);
            });

            userInfo.appendChild(name);
            userInfo.appendChild(email);
            userInfo.appendChild(phone);

            userCard.appendChild(img);
            userCard.appendChild(userInfo);
            userCard.appendChild(removeBtn);

            usersParent.appendChild(userCard)
        })
    },
    removeUser: function (index) {
        this.users.splice(index, 1);
        this.saveToLocalStorage();
        this.renderUi()
    },

    saveToLocalStorage: function () {
        localStorage.setItem("users", JSON.stringify(this.users))
    }
}

userManagement.init()