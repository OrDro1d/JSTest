const nextQuestionBtn = document.querySelector(".next-question-btn");
const prevQuestionBtn = document.querySelector(".prev-question-btn");
const checkAnswersBtn = document.querySelector(".check-answers-btn");
const questionStatus = document.querySelector(".question-status");
const showResultsBtn = document.querySelector(".show-results-btn");
const results = document.querySelector(".results");

let currentQuestion = 1;
let mark = 0;
const questionsBorder = 4;

nextQuestionBtn.addEventListener("click", () => {
	if (currentQuestion != document.body.childElementCount - questionsBorder) {
		document.querySelector(
			".question:nth-child(" + currentQuestion + ")"
		).style.display = "none";

		currentQuestion += 1;

		document.querySelector(
			".question:nth-child(" + currentQuestion + ")"
		).style.display = "block";
	}

	buttonColor(currentQuestion);
	questionStatusUpdate(currentQuestion);
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

	buttonColor(currentQuestion);
	questionStatusUpdate(currentQuestion);
});

showResultsBtn.addEventListener("click", () => {
	document.querySelector(".question:nth-child(6)").style.display = "none";
	document.querySelector(".navigation").style.display = "none";
	results.style.display = "block";

	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (document.forms[i].elements[j].checked) {
				document.querySelector(
					".correct-answer:nth-child(" +
						(i + 2) +
						") table tr:nth-child(" +
						(j + 2) +
						") td:nth-child(1)"
				).innerHTML = document.forms[i].elements[j].name;
			}

			if (document.forms[i].elements[j].value == "true")
				document.querySelector(
					".correct-answer:nth-child(" +
						(i + 2) +
						") tr:nth-child(" +
						(j + 2) +
						") td:nth-child(2)"
				).innerHTML = document.forms[i].elements[j].name;
		}
	}

	document.querySelector(
		".correct-answer:nth-child(6) tr:nth-child(2) td:nth-child(1)"
	).innerHTML = document.forms[4].elements.avl.value;
	document.querySelector(
		".correct-answer:nth-child(6) tr:nth-child(2) td:nth-child(2)"
	).innerHTML = "object.addEventListener()";

	calcMark();

	function calcMark() {
		for (let i = 0; i < 4; i++) {
			let isEverythingCorrect = true;
			for (let j = 0; j < 4; j++) {
				if (
					document.forms[i].elements[j].value === true &&
					document.forms[i].elements[j].name !=
						document.querySelector(
							".correct-answer:nth-child(" +
								(i + 2) +
								") tr:nth-child(" +
								(j + 2) +
								") td:nth-child(2)"
						).innerHTML
				) {
					isEverythingCorrect = false;
					break;
				}
			}
			if (isEverythingCorrect) mark++;
		}

		if (
			document.querySelector(
				".correct-answer:nth-child(6) tr:nth-child(2) td:nth-child(1)"
			).innerHTML ===
			document.querySelector(
				".correct-answer:nth-child(6) tr:nth-child(2) td:nth-child(2)"
			).innerHTML
		)
			mark++;

		console.log(mark);
	}
});

function buttonColor(currentQuestion) {
	if (currentQuestion === 1) {
		prevQuestionBtn.style.backgroundColor = "#333";
		prevQuestionBtn.style.color = "#999";
		prevQuestionBtn.style.cursor = "default";
		prevQuestionBtn.style.boxShadow = "none";
	} else {
		prevQuestionBtn.style.backgroundColor = "gray";
		prevQuestionBtn.style.color = "white";
		prevQuestionBtn.style.cursor = "pointer";
		prevQuestionBtn.style.boxShadow = "10px 10px 10px #151515";
	}

	if (currentQuestion === document.body.childElementCount - questionsBorder) {
		nextQuestionBtn.style.backgroundColor = "#333";
		nextQuestionBtn.style.color = "#999";
		nextQuestionBtn.style.cursor = "default";
		nextQuestionBtn.style.boxShadow = "none";
	} else {
		nextQuestionBtn.style.backgroundColor = "gray";
		nextQuestionBtn.style.color = "white";
		nextQuestionBtn.style.cursor = "pointer";
		nextQuestionBtn.style.boxShadow = "10px 10px 10px #151515";
	}
}

function questionStatusUpdate(currentQuestion) {
	if (currentQuestion === questionsBorder + 2) {
		questionStatus.innerHTML = " Результаты";
	} else {
		questionStatus.innerHTML = "Вопрос #" + currentQuestion + " - 5";
	}
}
