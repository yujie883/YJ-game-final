let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; 

const guessInput = document.getElementById("guessInput"); 
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

guessButton.addEventListener("click", function () {

	let guess = parseInt(guessInput.value);
	attempts++;


	message.className = "";

	// 防呆
	if (isNaN(guess) || guess < 1 || guess > 100) {
		message.textContent = "✘ 無效的代碼，請輸入 1 至 100 之間的數字";
		message.className = "error";
		guessInput.value = ""; 
		guessInput.focus(); 
		return; 
	}

	if (guess === randomNumber) {
		// 贏
		message.textContent = `★ 恭喜！你成功解碼當晚秘密：【${randomNumber}】！請將此畫面展示給店長。`;
		message.className = "success";

		guessInput.disabled = true;
		guessButton.disabled = true;
		
	} else if (guess < randomNumber) {
		// 太低
		message.textContent = `Too low... 次數: ${attempts}`;
		message.className = "too-low";
		guessInput.value = ""; // 清空輸入框
		
	} else {
		// 太高
		message.textContent = `Too high... 次數: ${attempts}`;
		message.className = "too-high";
		guessInput.value = ""; // 清空輸入框
	}

	if(!guessInput.disabled) {
		guessInput.focus();
	}
});

// 按 Enter送出
guessInput.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		guessButton.click();
	}
});