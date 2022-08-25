const inputs = [...document.querySelectorAll("form input")];
const button = document.querySelector("form button");

inputs.forEach((input) => {
	input.addEventListener("blur", (e) => {
		input.parentElement.classList.toggle("error", !input.checkValidity());
		input.parentElement.classList.toggle("success", input.checkValidity());
		input.nextElementSibling.addEventListener("click", () => {
			input.reportValidity();
		});
	});
});

button.addEventListener("click", (e) => {
	e.preventDefault();

	const allValid = inputs.every((input) => input.reportValidity());

	inputs.forEach((input) => {
		input.parentElement.classList.toggle("error", !input.checkValidity());
		input.parentElement.classList.toggle("success", input.checkValidity());
		if (input.parentElement.classList.contains("error")) {
			input.parentElement.style.animation = `shake .5s ease-in-out`;
			input.parentElement.addEventListener(
				"animationend",
				(e) => (e.target.style.animation = null)
			);
		}
	});

	if (allValid) console.log(`It's all valid!!!`);
});
