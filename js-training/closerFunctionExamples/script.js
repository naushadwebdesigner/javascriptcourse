
function anoop(data) {
    return ` Name: ${data.name}
    Age: ${data.age}`
}

console.log(anoop({
    name: "Naushad",
    age: 38
}))

console.log(anoop({
    name: "Umakant",
    age: 32
}))