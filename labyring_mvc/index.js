// Model

let mazeModel = {
    size: 2,
    rows: [
        [
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        ],
        [
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
        ],
        [
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        ],
        [
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
        ],
        [
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        ],

    ]
};

let size = 2;

init(size);
let matrixView = document.getElementById('app');
let mazeRow = mazeModel.rows;

// View

updateView();
function updateView() {
    matrixView.innerHTML = '';
    for (let rowCounter = 0; rowCounter < mazeModel.rows.length; rowCounter++) {
        let viewRow = matrixView.insertRow();
        let modelRow = mazeModel.rows[rowCounter];
        for (let cellCounter = 0; cellCounter < modelRow.cells.length; cellCounter++) {
            let viewCell = viewRow.insertCell();
            let modelCell = modelRow.cells[cellCounter];
            if (modelCell.isSide) {
                let test;
            } else {
                let test1;
            }
        }
    }

    html = /* HTML */`
    <input onchange="mazeModel.size = this.value, updateView()" value=${mazeModel.size} type="range" min="2" max="10">
    
    ${createMaze()}
`;
    matrixView.innerHTML = html;
}

function createMaze() {
    // console.log(mazeModel.size);
    let mazeReturn = '';
    // constructMaze();
    for (let a = 0; a < mazeRow.length; a++) { /* a = Array Index */
        // console.log(`a ===    ${a}`);
        mazeReturn += '<table><tr>';
        for (let i = 0; i < mazeRow[a].length; i++) {
            // console.log(`i ===    ${mazeRow[a].length}`);
            let classes = '';
            if (mazeRow[a][i].isHigh && mazeRow[a][i].isWide/*  && !mazeRow[a][i].isOpen */) {
                classes += 'room ';
                mazeReturn += `<td class="${classes}"></td>`;
            } else {
                mazeRow[a][i].isHigh ? classes += 'high ' : classes += 'low ';
                mazeRow[a][i].isWide ? classes += 'wide ' : classes += 'small ';
                mazeRow[a][i].isOpen ? classes += 'noWall ' : classes += 'wall ';
                classes ? mazeReturn += `<td class="${classes}"></td>` :
                    mazeReturn += `<td></td>`;
            }
        }
        mazeReturn += '</table></tr>';
    }
    return mazeReturn;
}

function init(size) {
    mazeModel = {};
    mazeModel.rows = [];

    for (let rowCounter = 0; rowCounter < size; rowCounter++) {
        let newRow = {};
        newRow.cells = [];
        for (let cellCounter = 0; cellCounter < size; cellCounter++) {
            let newCell = {};
            newCell.isSide = false;
            newCell.isButtom = false;
            newRow.cells.push(newCell);
        }
        // console.log(newRow)
        // console.log(mazeModel.rows)
        mazeModel.rows.push(newRow);
    }
}






// function constructMaze() {
//     for (i = 0; i < mazeRow.length; i++) {
//         mazeRow[i] = [];
//     }
//     mazeRow[0] = [];
//     for (i = 0; i < mazeModel.size - 3; i++) {
//         /* BUNN */
//         for (i = 0; i < mazeModel.size - 3; i++) {
//             mazeRow.push([
//                 { isHigh: true, isWide: false, isOpen: false },
//                 { isHigh: true, isWide: true },
//                 { isHigh: true, isWide: false, isOpen: false },
//             ]);
//             mazeRow[mazeRow.length - 1].push([
//                 { isHigh: false, isWide: false, isOpen: false },
//                 { isHigh: false, isWide: true, isOpen: false },
//                 { isHigh: false, isWide: false, isOpen: false },
//             ]);
//         }
//     }
    // mazeRow.push([
    //     { isHigh: true, isWide: false, isOpen: false },
    //     { isHigh: true, isWide: true },
    //     { isHigh: true, isWide: false, isOpen: false },
    // { isHigh: true, isWide: true },
    // { isHigh: true, isWide: false, isOpen: false },
    // { isHigh: true, isWide: true },
    // { isHigh: true, isWide: false, isOpen: false },
    // ]);
    // mazeRow.push([
    // { isHigh: false, isWide: false, isOpen: false },
    // { isHigh: false, isWide: true, isOpen: false },
    // { isHigh: false, isWide: false, isOpen: false },
    // { isHigh: false, isWide: true, isOpen: false },
    //     { isHigh: false, isWide: false, isOpen: false },
    //     { isHigh: false, isWide: true, isOpen: false },
    //     { isHigh: false, isWide: false, isOpen: false },
    // ]);

/* Side */
    // mazeRow[0].push(
    //     { isHigh: false, isWide: true, isOpen: false },
    //     { isHigh: false, isWide: false, isOpen: false },
    // );
    //         mazeRow[1].push(
    //             { isHigh: true, isWide: true },
    //             { isHigh: true, isWide: false, isOpen: false },
    //         );
    //         mazeRow[2].push(
    //             { isHigh: false, isWide: true, isOpen: false },
    //             { isHigh: false, isWide: false, isOpen: false },
    //         );
    //         mazeRow[3].push(
    //             { isHigh: true, isWide: true },
    //             { isHigh: true, isWide: false, isOpen: false },
    //         );
    //         mazeRow[4].push(
    //             { isHigh: false, isWide: true, isOpen: false },
    //             { isHigh: false, isWide: false, isOpen: false },
    //         );



    // { isHigh: true, isWide: true }  === Blank square,