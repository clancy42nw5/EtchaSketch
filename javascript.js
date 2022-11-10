const body = document.querySelector('body');

for (let i=0; i < 4; i++) {
    const newRow = document.createElement ('newRow');
    newRow.classList.add('row');
    body.appendChild(newRow);
    for (let i=0; i < 4; i++) {
        const newColumn = document.createElement('newColumn');
        newColumn.classList.add('column');
        newRow.appendChild(newColumn);

    }    
}
/*
newColumn.addEventListener('mouseover', () => {
    this.target.style.backgroundcolor = 'blue';
});

onmouseover = () => {

};
*/