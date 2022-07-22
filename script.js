// window.onload = main;
// var i = 0;
// var item;
// var images = [
//   "/icon/logo/B-Day.png",
//   "/icon/logo/minoo.png",
//   "/icon/logo/Clear.png",
//   "/icon/logo/Rani.png",
//   "/icon/logo/Bime-Karafarin.png",
//   "/icon/logo/Domino.png",
// ];
// function main() {
//   item = document.getElementById("i1");
//   item.src = images;
// //   document.write(images);
// }
// function Next() {
//   i++;
//   if (i == images.length) {
//     i = 0;
//     item.src = images[i];
//   } else {
//     item.src = images[i];
//   }
// }
// function Back() {
//   i--;
//   if (i <= 0) {
//     i = images.length;
//     item.src = images[i];
//   } else {
//     item.src = images[i];
//   }
// }
// ----------------------
function Next() {
  var right = document.querySelector(".project-img");
  right.scrollBy(-270, 0);
}
function Back() {
  var left = document.querySelector(".project-img");
  left.scrollBy(270, 0);
}
