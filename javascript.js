const body = document.querySelector('body');

function removeTransition(e) {
    //if (e.propertyName !== 'transform') return;
    this.classList.remove('activated');
}

let numberOfRows = 16
let numberOfColumns = 16

for (let i=0; i < numberOfRows; i++) {
    const newRow = document.createElement ('newRow');
    newRow.classList.add('row');
    body.appendChild(newRow);
    for (let i=0; i < numberOfColumns; i++) {
        const newColumn = document.createElement('newColumn');
        newColumn.classList.add('column');
        newRow.appendChild(newColumn);
        newColumn.addEventListener('mouseover', () => {
            newColumn.classList.add('activated');
            newColumn.addEventListener('transitionend', removeTransition);
        });
        newColumn.addEventListener('mouseleave', () => {
            
        })
        newColumn.addEventListener('mousedown', () => {
            newColumn.classList.add('permanent');
        })
        }
    }