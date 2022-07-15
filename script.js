// VAR DECLARATION
const grid = document.querySelector('.grid');

// ADD CLASSES

//APPEND DIVS TO GRID
for (let i = 1; i <= 16 * 16; i++) {
	const div = document.createElement('div');
	div.classList.add('grid-item');
    div.addEventListener('mouseover', () =>{
        div.classList.add('hovered')
    })
	grid.appendChild(div);
    
}
