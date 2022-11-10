const gridContainer = document.querySelector('.gridContainer');

let numberOfRows = 100
let numberOfColumns = 100

for (let i=0; i < numberOfRows; i++) {
    const newRow = document.createElement ('newRow');
    newRow.classList.add('row');
    gridContainer.appendChild(newRow);
    for (let i=0; i < numberOfColumns; i++) {
        const newColumn = document.createElement('newColumn');
        newColumn.classList.add('column');
        newRow.appendChild(newColumn);
        newColumn.addEventListener('mouseover', () => {
            newColumn.classList.add('activated');
        });
        }
    }