const bill = document.getElementById("inp-bill");
let people = document.querySelector(".num-people");
const errorMsg = document.querySelector(".error-msg");
const tipBtns = document.querySelectorAll(".tip");
const tipCustom = document.getElementById("inp-tip");
// I might have to create nested functions

bill.addEventListener("input", setBillValue);
