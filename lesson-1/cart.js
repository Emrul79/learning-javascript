//task1: when user click the cart button , it will retrun an error messege with the text -'something went wrong , please try again later'!!
//solution:
let addToCartBtn = document.getElementById("addToCartBtn");
let error = document.getElementById("error");
addToCartBtn.addEventListener("click", () => {
  error.innerText = "something went wrong , please try again later";
});

//task:2-just a simple calculator:
let num1 = 89;
let num2 = 98;
var result = 0;
document.getElementById("num1").innerText = num1;
document.getElementById("num2").innerText = num2;
document.getElementById("result").innerText = `Your result:${result} `;
let mybtns = document.querySelectorAll(".btn");

mybtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const style = e.currentTarget.classList;
    if (style.contains("sum")) {
      const sum = num1 + num2;
      result = sum;
      document.getElementById("result").innerText = `Your result:${result} `;
    } else if (style.contains("sub")) {
      const sub = num1 - num2;
      result = sub;
      document.getElementById("result").innerText = `Your result:${result} `;
    } else if (style.contains("multiply")) {
      const multiply = num1 * num2;
      result = multiply;
      document.getElementById("result").innerText = `Your result:${result} `;
    } else if (style.contains("divide")) {
      const divide = num1 / num2;
      result = divide;
      document.getElementById("result").innerText = `Your result:${result} `;
    } else {
      document.getElementById("result").innerText = "no operation yet";
    }
  });
});

//task-3:counterapp

let mybutton = document.querySelectorAll(".mybutton");
let countshow = document.querySelector("#countValue");
let savenumber = document.querySelector("#savenumber");

let count = 0;

mybutton.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("increment")) {
      count++;
      countshow.innerHTML = count;z
    } else if (style.contains("decrement")) {
      count--;
      countshow.innerHTML = count;
    } else if (style.contains("btnsave")) {
      let savecount = count + "       ||          ";
      savenumber.textContent += savecount;
      count = 0;
      countshow.innerHTML = count;
    } else {
      count = 0;
      countshow.innerHTML = count;
    }
    if (count < 0) {
      countshow.style.color = "red";
    } else if (count > 0) {
      countshow.style.color = "green";
    } else {
      countshow.style.color = "black";
    }
  });
});





