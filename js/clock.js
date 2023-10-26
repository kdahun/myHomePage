const clock = document.querySelector("#clock");
const dateId = document.querySelector("#date");

function getClock() {
  const now_date = new Date();

  const year = String(now_date.getFullYear());
  const month = String(now_date.getMonth() + 1).padStart(2, "0");
  const date = String(now_date.getDate()).padStart(2, "0");

  let day = "";
  if (now_date.getDay() === 0) {
    day = "일요일";
  } else if (now_date.getDay() === 1) {
    day = "월요일";
  } else if (now_date.getDay() === 2) {
    day = "화요일";
  } else if (now_date.getDay() === 3) {
    day = "수요일";
  } else if (now_date.getDay() === 4) {
    day = "목요일";
  } else if (now_date.getDay() === 5) {
    day = "금요일";
  } else if (now_date.getDay() === 6) {
    day = "토요일";
  }

  // console.log(`${now_date.getHours()}:${now_date.getMinutes()}:${now_date.getSeconds()}`);
  const hours = String(now_date.getHours()).padStart(2, "0");
  const minutes = String(now_date.getMinutes()).padStart(2, "0");
  const seconds = String(now_date.getSeconds()).padStart(2, "0");
  dateId.innerText = `${year}년 ${month}월 ${date}일 ${day}`;
  clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}
getClock();
setInterval(getClock, 1000);
