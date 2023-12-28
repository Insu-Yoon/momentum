const clock = document.querySelector("h2.clock");
const days = ["월", "화", "수", "목", "금", "토", "일"];
// function getNow() {
//   const now = new Date();
//   clock.innerText = `${now.getFullYear()}년 ${now.getMonth()}월 ${now.getDate()}일 (${
//     days[now.getDay() - 1]
//   }) ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`;
// }

function getTime() {
  const now = new Date();
  clock.innerText = `${now.getHours().toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
}
getTime();
setInterval(getTime, 1000);
