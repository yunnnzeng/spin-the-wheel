function spinWheel() {
    var wheel = document.querySelector('.wheel');
    var spinButton = document.querySelector('.spin-button');
    var deg = Math.floor(5000 + Math.random() * 5000); // 旋轉的角度，可自行調整
  
    spinButton.style.pointerEvents = 'none'; // 防止連續點擊
  
    wheel.style.transition = 'all 10s ease-out'; // 控制旋轉的速度和效果
    wheel.style.transform = `rotate(${deg}deg)`;
  
    wheel.classList.add('rotating'); // 添加旋轉時的CSS類別
  
    // 監聽過渡結束事件
    wheel.addEventListener('transitionend', function() {
      wheel.classList.remove('rotating'); // 移除旋轉時的CSS類別
      spinButton.style.pointerEvents = 'auto'; // 旋轉結束後恢復按鈕功能
    }, { once: true }); // 只監聽一次事件
  }
  
  // 檢查轉盤是否在旋轉
  function isWheelSpinning() {
    var wheel = document.querySelector('.wheel');
    return wheel.classList.contains('rotating');
  }