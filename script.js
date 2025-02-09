const bioData = {
    firstName: "Raza",
    lastName: "Kazi",
    mobileno: 9968285163,
    gmail: "razakazi011@gmail.com",
    age: 20,
    gender: "Male",
    course: ["JavaScript", "Html5", "Css3", "React"],
    adress: {
        city: "Kalyan",
        district: "Thane",
        country: "INDIA"
    }
};

// Set data to localStorage
document.getElementById("set").addEventListener("click", () => {
    localStorage.setItem("objectData", JSON.stringify(bioData));
});

// Get data from localStorage
document.getElementById("get").addEventListener("click", () => {
    console.log(JSON.parse(localStorage.getItem("objectData")));
});

// Remove data from localStorage
document.getElementById("remove").addEventListener("click", () => {
    localStorage.removeItem("objectData");
});