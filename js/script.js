let spinning = false;

function spinWheel() {
  if (!spinning) {
    spinning = true;
    var wheel = document.querySelector('.wheel');
    var spinButton = document.querySelector('.spin-button');
    // Math.random() 0~1之間
    var deg = Math.floor(1000 + Math.random() * 5000); // 旋轉的角度，可自行調整

    spinButton.style.pointerEvents = 'none'; // 防止連續點擊

    wheel.style.transition = 'all 1s ease-out'; // 控制旋轉的速度和效果
    wheel.style.transform = `rotate(${deg}deg)`;

    setTimeout(function () {
      spinning = false;
      spinButton.style.pointerEvents = 'auto';
      const actualDeg = deg % 360;
      console.log(actualDeg)
      let pointerDeg = 360 - actualDeg + 90; // 計算指針所在的角度
      if (pointerDeg >= 360) {
        pointerDeg -= 360;
      }
      showResult(actualDeg); // 顯示結果
    }, 1000);

  }
}

// 顯示轉盤停止後的結果
function showResult(deg) {
  // 這裡可以根據旋轉角度(deg)來顯示相應的結果
  // 例如，可以根據角度範圍判斷落在哪個部分，並顯示相應的內容
  let result = '';
  if (deg < 45) {
    result = 'Section 1';
  } else if (deg >= 45 && deg < 135) {
    result = 'Section 4';
  } else if (deg >= 135 && deg < 225) {
    result = 'Section 3';
  } else if (deg >= 225 && deg < 315) {
    result = 'Section 2';
  } else {
    result = 'Section 1';
  }
  alert('Congratulations! You got: ' + result);
}