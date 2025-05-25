let messages = document.querySelectorAll(".message");
let nextBtn = document.getElementById("next-btn");
let index = 0;

nextBtn.addEventListener("click", () => {
  if (index < messages.length) {
    messages[index].classList.add("show");
    index++;
    if (index === messages.length) {
      nextBtn.innerText = "From Sahitha😁";
    }
  }
});
