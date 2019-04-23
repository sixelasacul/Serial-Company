let counter = 0;
const limit = 8;
const easterEggLimit = 12;

function behavior() {
	if (counter === limit) {
		window.alert("En effet, ils ne servent à rien.");
	}
	if (counter === easterEggLimit) {
		window.alert("Bon, arrêtez maintenant.");
	}
	if (counter <= easterEggLimit) {
		counter++;
	}
}

function setupListeners() {
	const items = document.querySelectorAll("#menu a");
	items.forEach(item => item.addEventListener("click", behavior));
}

window.onload = setupListeners;
