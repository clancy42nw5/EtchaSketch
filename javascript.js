const gridContainer = document.querySelector('.gridContainer');

let numberOfRows = 96;

// minimum of 8, maximum of 144

const lessPixels = document.querySelector('#lessPixels')
const morePixels = document.querySelector('#morePixels')

lessPixels.addEventListener('click', () => {
    if (numberOfRows >= 16) {
        deleteRows();
        numberOfRows -= 8;
        createRows();
    }
});

morePixels.addEventListener('click', () => {
    if (numberOfRows <= 144) {
        deleteRows();
        numberOfRows += 8;
        createRows();
    }
});

function createRows() {
    for (let i=0; i < numberOfRows; i++) {
        const newRow = document.createElement ('newRow');
        newRow.classList.add('row');
        gridContainer.appendChild(newRow);
        for (let i=0; i < numberOfRows; i++) {
            const newColumn = document.createElement('newColumn');
            newColumn.classList.add('column');
            newRow.appendChild(newColumn);
            newColumn.addEventListener('mouseover', () => {
                newColumn.classList.add('activated');
            });
            }
        }
}

function deleteRows() {
    const rows = document.querySelectorAll('.row', '.column');
    rows.forEach(row => {
        row.remove();
    })
}

createRows()

/*
for (let i=0; i < numberOfRows; i++) {
    const newRow = document.createElement ('newRow');
    newRow.classList.add('row');
    gridContainer.appendChild(newRow);
    for (let i=0; i < numberOfRows; i++) {
        const newColumn = document.createElement('newColumn');
        newColumn.classList.add('column');
        newRow.appendChild(newColumn);
        newColumn.addEventListener('mouseover', () => {
            newColumn.classList.add('activated');
        });
        }
    }
*/