// let taksnameInput = document.querySelector("#taksnameInput");
// let dateInput = document.querySelector("#dateInput");
// let addtaskBtn = document.querySelector("#addtaskBtn");
// let taskParent = document.querySelector(".taskParent")



// let taskListObject = []



// addtaskBtn.addEventListener("click", function () {

//     let name = taksnameInput.value.trim();
//     let dueDate = dateInput.value;

//     if (!name) {
//         alert("Enter task name")
//         return
//     }
//     if (!dueDate) {
//         alert("Enter due date")
//         return
//     }

//     taskListObject.push({ name, dueDate });
//     randorList();

//     taksnameInput.value = "";
//     dateInput.value = "";

//     deleteBtns()

// })



// function randorList() {

//     let resultString = "";

//     for (let i = 0; i < taskListObject.length; i++) {
//         const taskValue = taskListObject[i];
//         const { name, dueDate } = taskValue;
//         resultString += `<div class="tasklists">
//                 <div class="taskName">${name}</div>
//                 <div class="taskDate">${dueDate}</div>
//                <div class="delete"><button id="${i}">Delete</button></div>
//             </div>`
//     }

//     taskParent.innerHTML = resultString
// }

// function deleteBtns() {
//     const deleteBtn = document.querySelectorAll(".delete button")
//     deleteBtn.forEach((btn) => {
//         btn.addEventListener("click", function (e) {
//             let id = parseInt(e.target.id)
//             if (!isNaN(id)) {
//                 taskListObject.splice(id, 1)
//                 randorList()
//                 deleteBtns()
//             }

//         })
//     })
// }


let taksnameInput = document.querySelector("#taksnameInput");
let dateInput = document.querySelector("#dateInput");
let addtaskBtn = document.querySelector("#addtaskBtn");
let taskParent = document.querySelector(".taskParent");

let taskListObject = [];

addtaskBtn.addEventListener("click", function () {
    let name = taksnameInput.value.trim();
    let dueDate = dateInput.value;

    if (!name) {
        alert("Enter task name");
        return;
    }
    if (!dueDate) {
        alert("Enter due date");
        return;
    }

    taskListObject.push({ name, dueDate });
    randorList();

    taksnameInput.value = "";
    dateInput.value = "";
});

function randorList() {
    let resultString = "";

    for (let i = 0; i < taskListObject.length; i++) {
        const taskValue = taskListObject[i];
        const { name, dueDate } = taskValue;
        resultString += `<div class="tasklists">
                <div class="taskName">${name}</div>
                <div class="taskDate">${dueDate}</div>
                <div class="delete"><button class="deleteBtn" data-index="${i}">Delete</button></div>
            </div>`;
    }

    taskParent.innerHTML = resultString;

    let deleteButtons = document.getElementsByClassName("deleteBtn");
    let newarr = Array.from(deleteButtons)

    newarr.forEach(function (button) {
        button.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            taskListObject.splice(index, 1);
            randorList();
        });
    });

}




