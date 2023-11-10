let h4 = document.querySelector("#h4");
let id = document.querySelector("#id");
let dice = document.querySelector("#dice");

function date() {
  fetch(`https://api.adviceslip.com/advice`)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      id.textContent = data.slip.id;
      h4.textContent = data.slip.advice;
    });
}

dice.onclick = function () {
  date();
};
date();
