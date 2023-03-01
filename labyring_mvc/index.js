/* --------------------------------------------------- Model ------------------------------------------------------------*/

let mainDiv = document.getElementById('app');

let mazeModel = {
    size: 2,
    rows: [],
};

updateModel(mazeModel.size);
updateView();

/* --------------------------------------------------- View -------------------------------------------------------------*/

function updateView() {
    mainDiv.innerHTML = `
    <table>
        ${mazeModel.rows.map((row, rowIndex) => `
        <tr>
            ${row.map((col, colIndex) => `
            <td class="${setClasses(col)}" onclick="toggle(${rowIndex}, ${colIndex})">
            `).join('')}
        </tr>
        `).join('')}
    </table>
`;
}

/* --------------------------------------------------- CONTROLLER -------------------------------------------------------*/

function updateModel(newSize) {
    mazeModel.rows = [];

    for (let rowCounter = 0; rowCounter < newSize; rowCounter++) { /* will run 5 times to create every object inside a row */

        mazeModel.rows.push(newCellFunc(newSize, false)); /* isHigh false */
        mazeModel.rows.push(newCellFunc(newSize, true)); /* isHigh true */
    }
    mazeModel.rows.push(newCellFunc(newSize, false)); /* isHigh false */

    closeRow(0); /* Closes top of the maze */
    closeRow(mazeModel.rows.length - 1); /* Closes bottom of the maze */
    closeColumn(0); /* Closes left side of the maze */
    closeColumn(mazeModel.rows.length - 1); /* Closes right side of the maze */
    setEntry();
    setExit();
}

function newCellFunc(newSize, isHigh) {
    const row = [];
    for (let colIndex = 0; colIndex < newSize; colIndex++) {
        row.push(createCell(isHigh, false)); /* isWide false */
        row.push(createCell(isHigh, true)); /* isWide true */
    }
    row.push(createCell(isHigh, false)); /* isWide false */
    return row;
}

function createCell(isHigh, isWide) {
    if (isHigh === isWide) return { isHigh, isWide };
    const isOpen = Math.random() < 0.5 ? true : false;
    return { isHigh, isWide, isOpen };
}

function closeRow(index) {
    const row = mazeModel.rows[index];
    for (let cell of row) {
        cell.isOpen = false;
    }
}
function closeColumn(index) {
    for (let row of mazeModel.rows)
        row[index].isOpen = false;
}

function setEntry() {
    let randomIndex = length();
    while (randomIndex === mazeModel.rows.length) {
        randomIndex = length();
    }
    mazeModel.rows[randomIndex][0].isOpen = true;
}

function setExit() {
    let randomIndex = length();
    while (randomIndex === mazeModel.rows.length) {
        randomIndex = length();
    }
    mazeModel.rows[randomIndex][mazeModel.rows.length - 1].isOpen = true;
}

/* Creates a variable that  */
function length() {
    let returnData = Math.floor(Math.random() * (mazeModel.rows.length / 2)) * 2 + 1;
    return returnData;
}

function toggle(rowIndex, colIndex) {
    if (colIndex !== 0 && colIndex !== mazeModel.rows.length - 1 && rowIndex !== 0 && rowIndex !== mazeModel.rows.length - 1) {
        let mazePath = mazeModel.rows[rowIndex][colIndex];
        if (mazePath.isOpen === undefined) return;
        mazePath.isOpen = !mazePath.isOpen;
    }
    updateView();
}

function setClasses(cell) {
    if (cell.isHigh && cell.isWide) return 'room';
    const setHigh = cell.isHigh ? 'high ' : 'low ';
    const setWide = cell.isWide ? 'wide ' : 'small ';
    const setOpen = cell.isOpen ? 'noWall ' : 'wall ';
    return setHigh + setWide + setOpen;
}