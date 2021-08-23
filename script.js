function loadEvent() {

	// VÁLTOZÓK DEKLARÁLÁSA

	const rootElement = document.getElementById("root");

	const races = ["Human", "Fairy", "Dragon"];
	const genders = ["Male", "Female"];
	const classes = ["Warrior", "Witch", "Wizard"];


	// ALAP FORM LÉTREHOZÁSA A HTML-BEN

	const containerElement = document.getElementById("container");
	const formContainer = document.getElementById("formContainer");
	const characterContainer = document.getElementById("characterContainer");

	formContainer.insertAdjacentHTML("afterbegin", `<h1> Create your own character </h1>`);

	formContainer.insertAdjacentHTML("beforeend", `
	<form autocomplete="off">
		<input id="nameInput" type="text" placeholder="Write your character's name here">
		<div class="custom-select">
			<select id="gender">
				<option disabled selected> Select your characters gender </option>
			</select>
			<select id="race">
				<option disabled selected> Select your characters race </option>
			</select>
			<select id="class">
				<option disabled selected> Select your characters class </option>
			</select>
		</div>	
	</form>
	`);


	// FOR CIKLUSOK A LEGÖRDÜLŐ MENÜK FELÖLTÉSÉRE


	for (let raceElement of races) {

		document.querySelector("#race").insertAdjacentHTML("beforeend", `<option>${raceElement}</option>`);

	};

	for (let genderElement of genders) {

		document.querySelector("#gender").insertAdjacentHTML("beforeend", `<option>${genderElement}</option>`);

	};

	for (let classElement of classes) {

		document.querySelector("#class").insertAdjacentHTML("beforeend", `<option>${classElement}</option>`);

	};


	// CHARACTER SHEET LÉTREHOZÁSA A HTML-BEN


	characterContainer.insertAdjacentHTML("afterbegin", `<h1> Your chosen characteristics </h1>`);

	characterContainer.insertAdjacentHTML("beforeend", `
	<div id="name"> Welcome <strong> Stranger </strong>! </div>
	<div class="sheetContainer">
		<div> 
			Your gender
			<img id="genderImage" src=media/questionmark.png>
		</div>
		<div> 
			Your race
			<img id="raceImage" src=media/questionmark.png>
		</div>
		<div> 
			Your class
			<img id="classImage" src=media/questionmark.png>
		</div>
	</div>

	`);


	// INPUT EVENTEK

	const nameInput = document.querySelector('#nameInput');
	const genderInput = document.querySelector("#gender");
	const raceInput = document.querySelector("#race");
	const classInput = document.querySelector("#class");

	nameInput.addEventListener('input', updateNameValue);
	genderInput.addEventListener('change', updateGenderValue);
	raceInput.addEventListener('change', updateRaceValue);
	classInput.addEventListener('change', updateClassValue);


	function updateNameValue() {
		let inputValue = document.querySelector("#nameInput").value

		document.getElementById("name").innerHTML = "Welcome " + "<strong>" + inputValue + "</strong>" + " !"
	};

	function updateGenderValue() {
		let genderValue = document.querySelector("#gender").value

		if (genderValue === "Male") {
			document.getElementById("genderImage").src = "media/male.jpg"
		} else {
			document.getElementById("genderImage").src = "media/female.jpg"
		}

	};

	function updateRaceValue() {
		let raceValue = document.querySelector("#race").value

		if (raceValue === "Human") {
			document.getElementById("raceImage").src = "media/human.jpg"
		} else if (raceValue === "Fairy") {
			document.getElementById("raceImage").src = "media/fairy.jpg"
		} else if (raceValue === "Dragon") {
			document.getElementById("raceImage").src = "media/dragon.jpg"
		}

	};

	function updateClassValue() {
		let classValue = document.querySelector("#class").value

		if (classValue === "Warrior") {
			document.getElementById("classImage").src = "media/warrior.jpg"
		} else if (classValue === "Witch") {
			document.getElementById("classImage").src = "media/witch.jpg"
		} else if (classValue === "Wizard") {
			document.getElementById("classImage").src = "media/wizard.jpg"
		}

	};

}

window.addEventListener("load", loadEvent)