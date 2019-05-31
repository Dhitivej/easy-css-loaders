const loader = document.querySelector('.loader');
const main = document.querySelector('#main');

window.onload = init;

function init() {
	setTimeout(() => {
		loader.style.opacity = 0;
		loader.style.display = 'none';

		main.style.display = 'block';
		// Slowly fade main into the page
		setTimeout(() => (main.style.opacity = 1), 50);
	}, 4000);
}
