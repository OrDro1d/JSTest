const nextQuestionBtn = document.querySelector(".next-question-btn");
const prevQuestionBtn = document.querySelector(".prev-question-btn");

let currentQuestion = 1;

nextQuestionBtn.addEventListener("click", () => {
	document.querySelector(
		".question:nth-child(" + currentQuestion + ")"
	).style.display = "none";

	currentQuestion += 1;

	document.querySelector(
		".question:nth-child(" + currentQuestion + ")"
	).style.display = "block";
});

prevQuestionBtn.addEventListener("click", () => {
	if (currentQuestion != 1) {
		document.querySelector(
			".question:nth-child(" + currentQuestion + ")"
		).style.display = "none";

		currentQuestion -= 1;

		document.querySelector(
			".question:nth-child(" + currentQuestion + ")"
		).style.display = "block";
	}
});
