const alertBtn = document.querySelector("#alertBtn"),
alertBox = document.querySelector(".alert-container");

alertBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    alertBox.classList.add("active");
})
