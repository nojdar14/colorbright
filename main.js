// LUMINENCE CALCULATOR

// let R = +prompt("Enter a R color value (Red):");
// let G = +prompt("Enter a G color value (Green):");
// let B = +prompt("Enter a B color value (Blue):");

// let brightness = Math.sqrt(0.299 * R ** 2 + 0.587 * G ** 2 + 0.114 * B ** 2);

// alert(`The Brightness is ${brightness}`);

document.getElementById("btn").addEventListener("click", bclick);

function bclick() {
  let R = +document.getElementById("r-in").value;
  let G = +document.getElementById("g-in").value;
  let B = +document.getElementById("b-in").value;
  console.log(R);
  console.log(G);
  console.log(B);
  let brightness = Math.sqrt(0.299 * R ** 2 + 0.587 * G ** 2 + 0.114 * B ** 2);
  console.log(brightness);

  document.getElementById("output").innerHTML = brightness;
}
