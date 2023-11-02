const timePicker = document.querySelector(".time-picker");
const values = document.querySelector(".values");
const btnGroup1 = document.querySelector("#btn-group-1");
const setBtn = document.querySelector("#set-btn");
const startBtn = document.querySelector("#start-btn");
const btnGroup2 = document.querySelector("#btn-group-2");
const cancelBtn = document.querySelector("#cancel-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resumeBtn = document.querySelector("#resume-btn");
const ongoingStatus = document.querySelector("#ongoing-status");
const completedStatus = document.querySelector("#completed-status");

// 시간 설정 다이얼로그 생성
new Picker(timePicker, {
  format: "HH:mm:ss", // 시:분:초
  text: {
    title: "시간을 설정하세요",
    confirm: "확인",
    cancel: "취소",
  },
});

// 타이머 생성
const timer = new easytimer.Timer();

// 타이머 이벤트 리스너 등록
timer.addEventListener("secondsUpdated", () => {
  values.textContent = timer.getTimeValues().toString();
});
timer.addEventListener("started", () => {
  values.textContent = timer.getTimeValues().toString();
});
timer.addEventListener("reset", () => {
  values.textContent = timer.getTimeValues().toString();
});
timer.addEventListener("targetAchieved", () => {
  values.textContent = "완료!"; // 카운트다운 완료

  ongoingStatus.style.display = "none";
  completedStatus.style.display = "block";
  btnGroup2.style.display = "none";
  btnGroup1.style.display = "block";
});

// 버튼 이벤트 리스너 등록
/**
 * ['시간 설정' 버튼]
 *   경우1. 초기 화면에서
 *   경우2. 취소 후
 *   경우3. 완료 후
 */
setBtn.addEventListener("click", () => {
  if (completedStatus.style.display === "block") {
    values.style.display = "none";
    timePicker.style.display = "block";
    completedStatus.style.display = "none";
  }

  timePicker.click();
});
/**
 * [시작 버튼]
 *   경우1. 초기 화면에서
 *   경우2. 취소 후
 *   경우3. 완료 후
 */
startBtn.addEventListener("click", () => {
  timer.start({
    countdown: true,
    startValues: { seconds: toSeconds(timePicker.value) },
  });

  if (completedStatus.style.display === "block") {
    completedStatus.style.display = "none";
  } else {
    timePicker.style.display = "none";
    values.style.display = "block";
  }
  ongoingStatus.style.display = "block";
  btnGroup1.style.display = "none";
  btnGroup2.style.display = "block";
});
// 취소 버튼
cancelBtn.addEventListener("click", () => {
  // '일시 정지 > 취소 > 시작'인 경우
  if (timer.isPaused()) {
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
  }

  timer.reset();
  timer.stop();

  values.style.display = "none";
  timePicker.style.display = "block";
  ongoingStatus.style.display = "none";
  btnGroup2.style.display = "none";
  btnGroup1.style.display = "block";
});
// '일시 정지' 버튼
pauseBtn.addEventListener("click", () => {
  timer.pause();

  ongoingStatus.style.display = "none";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "inline-block";
});
// 재개 버튼
resumeBtn.addEventListener("click", () => {
  timer.start();

  ongoingStatus.style.display = "block";
  resumeBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});

// '시:분:초'를 초로 계산하고, 그 결과값을 반환한다.
function toSeconds(hhmmss) {
  const arr = hhmmss.split(":");
  return +arr[0] * 60 * 60 + +arr[1] * 60 + +arr[2];
}
