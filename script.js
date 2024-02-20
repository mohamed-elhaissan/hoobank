console.log("hello there");
let doctitle = document.title;
window.addEventListener("blur",()=>{
    document.title = "Iam Waiting for u To Come Back";

})
window.addEventListener("focus",()=>{
    document.title = doctitle

})
