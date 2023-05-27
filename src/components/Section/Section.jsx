// import React from 'react'
// import './Section.css'

// export default function Section()
//  {
  
//   const squares = document.querySelectorAll(".square");
//   const timeLeft = document.querySelector("#time-left");
//   const score = document.querySelector("#score");
  
//   let result = 0;
//   let hitPosition;
//   let currentTime = 60;
//   let timerId = null;
  
//   function randomSquare() {
//     squares.forEach((square) => {
//       square.classList.remove("emoji");
//     });
  
//     let randomSqaure = squares[Math.floor(Math.random() * 9) + 1];
//     randomSqaure.classList.add("emoji");
//     hitPosition = randomSqaure.id;
//   }
  
//   squares.forEach((square) => {
//     square.addEventListener("mousedown", () => {
//       if (square.id == hitPosition) {
//         result++;
//         score.textContent = result;
//         hitPosition = null;
//       }
//     });
//   });
  
//   function moveEmoji() {
//     timerId = setInterval(randomSquare, 500);
//   }
  
//   moveEmoji();
  
//   function countDown() {
//     currentTime--;
//     timeLeft.textContent = currentTime;
  
//     if (currentTime == 0) {
//       clearInterval(countDownTimerId);
//       clearInterval(timerId);
//       alert(`Game Over! Your final Score Is ${result}`);
//     }
//   }
  
//   let countDownTimerId = setInterval(countDown, 1000);
  
//   return (
//     <div>
//         <body>
//         <div class="scores-container">
//       <div class="total-score">
//         <h2>Your Score:</h2>
//         <h2 id="score">0</h2>
//       </div>

//       <div class="time">
//         <h2>Time left:</h2>
//         <h2 id="time-left">60</h2>
//       </div>
//     </div>
//     <div class="grid-container">
//       <div class="grid">
//         <div class="square" id="1"></div>
//         <div class="square" id="2"></div>
//         <div class="square" id="3"></div>
//         <div class="square" id="4"></div>
//         <div class="square" id="5"></div>
//         <div class="square" id="6"></div>
//         <div class="square" id="7"></div>
//         <div class="square" id="8"></div>
//         <div class="square" id="9"></div>
//         <div class="square" id="10"></div>
//       </div>
//     </div>
//         </body>
//     </div>
//   )
  
// }
