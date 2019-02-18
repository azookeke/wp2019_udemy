var player = [3];
player[1] = Math.floor(Math.random() * 6) + 1;//1~6
player[2] = Math.floor(Math.random() * 6) + 1;//1~6

//改變骰子的圖案
for (var i = 1; i <= 2; i++) {
  document.querySelector(".img"+i).setAttribute("src","images/dice"+player[i]+".png");
}

//判斷輸贏、平手
if (player[1] > player[2]) {
  document.querySelector(".bulletin").innerHTML = "<img class='flag' src='images/flag.png'>Player 1 Win !";
} else if (player[2] > player[1]) {
  document.querySelector(".bulletin").innerHTML = "Player 2 Win ! <img class='flag' src='images/flag.png'>";
} else {
  document.querySelector(".bulletin").textContent = "EVEN !";
}
