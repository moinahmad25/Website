let homeBtn = document.querySelector(".home");
let contactBtn = document.querySelector(".contact");
let informationBtn = document.querySelector(".information");
let guideBtn = document.querySelector(".guide");


homeBtn.addEventListener("click", ()=>{
    window.location.href = "index.html"
})
contactBtn.addEventListener("click", ()=>{
    console.log("contact")
    window.location.href = "Contact Us/"+"index.html";
})
informationBtn.addEventListener("click", ()=>{
    window.location.href = "Information/"+"index.html";
    console.log("information")
})
guideBtn.addEventListener("click", ()=>{
    window.location.href = "Guide/"+"index.html";
    console.log("guide")
})