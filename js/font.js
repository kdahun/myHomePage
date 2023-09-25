const fonts = document.querySelectorAll(".menu-home-center i");
const triangles = document.querySelectorAll(".triangle");
const boxs = document.querySelectorAll(".box");

const HIDDEN_TRIANGLE = "hidden";
const HIDDEN_FONT = "text-alpha";
const APPEAR_FONT = "font-white";

let triangleIndex = 0;

function mouseEnter(event) {
  const font = event.currentTarget;
  font.classList.remove(HIDDEN_FONT);
  font.classList.add(APPEAR_FONT);
}

function mouseLeave(event) {
  const font = event.currentTarget;
  font.classList.remove(APPEAR_FONT);
  font.classList.add(HIDDEN_FONT);
}

function mouseClick(event) {
  const font = event.currentTarget;

  const triangle = Array.from(triangles)[triangleIndex];
  triangle.classList.toggle(HIDDEN_TRIANGLE);
  triangle.classList.toggle("animated"); // animated 클래스를 추가/제거

  const box = Array.from(boxs)[triangleIndex];
  box.classList.toggle(HIDDEN_TRIANGLE);

  triangleIndex = Array.from(fonts).indexOf(font); // 몇 번째 아이콘인지 확인

  const currentTriangle = Array.from(triangles)[triangleIndex];
  currentTriangle.classList.toggle(HIDDEN_TRIANGLE);
  currentTriangle.classList.toggle("animated"); // animated 클래스를 추가/제거

  const currentBox = Array.from(boxs)[triangleIndex];
  currentBox.classList.toggle(HIDDEN_TRIANGLE);
}
fonts.forEach((font) => {
  font.addEventListener("click", mouseClick);
  font.addEventListener("mouseenter", mouseEnter);
  font.addEventListener("mouseleave", mouseLeave);
});

console.log(Array.from(triangles));
console.log(Array.from(boxs));
