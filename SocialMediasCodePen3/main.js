const addBtn = document.querySelector(".add");
const wrapper = document.querySelector(".wrapper");

addBtn.addEventListener("click", () => {
  wrapper.classList.toggle("wrapper-open");
});
