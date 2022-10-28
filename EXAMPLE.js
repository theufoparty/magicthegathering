// EXEMPEL PÅ GAMMAL KOD.

const getTrueFalseQuestionElement = (question, index) => {
	const parent = document.createElement("div");
	const para = document.createElement("p");
	para.innerText = `${index + 1}. ${question.text}`;
	parent.append(para);
	const trueInput = getInputElement(`q${index + 1}`, "A", "True", "radio");
	const falseInput = getInputElement(`q${index + 1}`, "B", "False", "radio");
	parent.append(trueInput);
	parent.append(falseInput);
	return parent;
};
const getMultipleChoiceQuestionElement = (question, index) => {
	const parent = document.createElement("div");
	const para = document.createElement("p");
	para.innerText = `${index + 1}. ${question.text}`;
	parent.append(para);
	question.choices.forEach((choice) => {
		const inputElement = getInputElement(`q${index + 1}`, choice.value, choice.label, "radio");
		parent.append(inputElement);
	});
	return parent;
};

// Så den nya funktionen som jag kallade RadioQuestions såg då ut såhär;

const getRadioButtonQuestionElement = (question, index) => {
	const parent = document.createElement("div");
	const para = document.createElement("p");
	para.innerText = `${index + 1}. ${question.text}`;
	parent.append(para);
	question.choices.forEach((choice) => {
		const inputElement = getInputElement(`q${index + 1}`, choice.value, choice.label, "radio");
		parent.append(inputElement);
	});
	return parent;
};

// Då insåg jag även att det enda som egentligen skiljde Checkbox och Radio-frågor ifrån varandra
// var vilken questiontype frågan hade, en information som redan var sparad i varje fråga i listan
// och kunde därmed ändra checkboxes till;

const getCheckboxQuestionElement = (question, index) => {
	const parent = document.createElement("div");
	const para = document.createElement("p");
	para.innerText = `${index + 1}. ${question.text}`;
	parent.append(para);
	question.choices.forEach((choice) => {
		const inputElement = getInputElement(`q${index + 1}`, choice.value, choice.label, "checkbox"); //<---- question.type
		parent.append(inputElement);
	});
	return parent;
};

// Då kan alla frågor genereras av samma helperfunktion;

const getQuestionElement = (question, index) => {
	const questionWrapper = document.createElement("div");
	const titleElement = document.createElement("p");
	titleElement.innerText = `${index + 1}. ${question.text}`;
	questionWrapper.append(titleElement);
	question.choices.forEach((choice) => {
		const inputElement = getInputElement(
			question.inputName,
			choice.value,
			choice.label,
			question.type
		);
		questionWrapper.append(inputElement);
	});
	return questionWrapper;
};

const form = document.querySelector(".quiz-form");

// Då kunde jag också förenkla den här if-satsen;

questions.forEach((question, index) => {
	if (question.type === questionTypes.checkbox) {
		const questionElement = getCheckboxQuestionElement(question, index);
		form.append(questionElement);
	}
	if (question.type === questionTypes.truefalse) {
		const questionElement = getTrueFalseQuestionElement(question, index);
		form.append(questionElement);
	}
	if (question.type === questionTypes.multiple) {
		const questionElement = getMultipleChoiceQuestionElement(question, index);
		form.append(questionElement);
	}
});

// Till detta;

questions.forEach((question, index) => {
	const questionElement = getQuestionElement(question, index);
	form.append(questionElement);
});
