let newObj = {
    username: "Naushad Ali",
    age: 38,
    myBio: function () {
        console.log(this)
    }
}

newObj.myBio()