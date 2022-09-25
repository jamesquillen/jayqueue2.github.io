var rainbow = Math.floor(Math.random() * 9);
var bomb = Math.floor(Math.random() * 9);
console.log(rainbow);
console.log(bomb);

const treasure = (id) => {
  console.log(id);
  if (rainbow === id) {
    document.getElementById(id).innerHTML = "&#x1f308";
    alert("You've found te rainbow ");
    console.log("You've found the rainbow.");
  } else if (bomb === id) {
    document.getElementById(id).innerHTML = "&#x2620";
    alert("-Bomb");
    console.log("Bomb");
  } else {
    document.getElementById(id).innerHTML = "&#x1f332";
    alert("Keep clicking.");
    console.log("Keep clicking.");
  }
};
