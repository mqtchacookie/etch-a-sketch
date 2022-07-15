// VAR DECLARATION
const body = document.querySelector('body');
const promptButton = document.querySelector('.prompt-button');
const resetButton = document.querySelector('.reset-button');
const content = document.querySelector('.content');

// ADD CLASSES

//APPEND DIVS TO GRID
const gridCreate = () => {
	const itemAmount = prompt('enter less than 100');
	if (itemAmount === '') {
		return;
	}
	if (itemAmount > 100) {
		alert('TOO MANY');
		return;
	}
	if (itemAmount <= 0) {
		alert('invalid');
		return;
	}
	const grid = document.createElement('div');
	grid.classList.add('grid');
	content.insertBefore(grid, promptButton);
	for (let i = 1; i <= itemAmount ** 2; i++) {
		const div = document.createElement('div');
		div.classList.add('grid-item');
		div.addEventListener('mouseover', () => {
			div.classList.add('hovered');
		});
		grid.classList.add('grid-style');
		grid.style['grid-template-columns'] = `repeat(${itemAmount}, 16px`;
		grid.appendChild(div);
	}
};

//RESET FUNCTION
const reset = () => {
	const grid = document.querySelector('.grid');
	grid.remove();
};
//RESET BUTTON
resetButton.addEventListener('click', () => {
	reset();
});

//BUTTON LISTENER
promptButton.addEventListener('click', () => {
	gridCreate();
});
