// VAR DECLARATION
const grid = document.querySelector('.grid');
const promptButton = document.querySelector('.prompt-button');

// ADD CLASSES

//APPEND DIVS TO GRID
const gridCreate = () => {
	const itemAmount = prompt('enter less than 100');
	if (itemAmount >= 100) {
		alert('TOO MANY');
		return;
	}
	for (let i = 1; i <= itemAmount ** 2; i++) {
		const div = document.createElement('div');
		div.classList.add('grid-item');
		div.addEventListener('mouseover', () => {
			div.classList.add('hovered');
		});
		grid.classList.add('grid-style');
		grid.appendChild(div);
	}
};

//BUTTON LISTENER
promptButton.addEventListener('click', () => {
	gridCreate();
});
