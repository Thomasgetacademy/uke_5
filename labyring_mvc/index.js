// Model

let mazeModel = {
    size: 3,
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

let mazeRow = mazeModel.rows;


// function generateRows() {
//     for (i = 0; i < mazeModel.size; i++) {

//     }
// }


// View

updateView();
function updateView() {
    html = /* HTML */`
    <input onchange="mazeModel.size = this.value, updateView()" value=${mazeModel.size} type="range" min="2" max="10">
    
    ${createMaze()}
`;
    document.getElementById('app').innerHTML = html;
}

function createMaze() {
    // console.log(mazeModel.size);
    let mazeReturn = '';
    constructMaze();
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

function constructMaze() {
    for (i = 0; i < mazeModel.size - 1; i++) {
        mazeRow.push([
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
        ]);
        mazeRow.push([
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        ]);

        mazeRow[0].push(
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        );
        mazeRow[1].push(
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
        );
        mazeRow[2].push(
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        );
        mazeRow[3].push(
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
        );
        mazeRow[4].push(
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        );
    }
}

    // { isHigh: true, isWide: true }  === Blank square,


    // for (i = 0; i < mazeModel.size; i++) {
    //     mazeModel.rows.push(
    //         [
    //             { isHigh: false, isWide: false, isOpen: false },
    //             { isHigh: false, isWide: true, isOpen: false },
    //             { isHigh: false, isWide: false, isOpen: false },
    //             { isHigh: false, isWide: true, isOpen: false },
    //             { isHigh: false, isWide: false, isOpen: false },
    //         ],
    //         [
    //             { isHigh: true, isWide: false, isOpen: false },
    //             { isHigh: true, isWide: true },
    //             { isHigh: true, isWide: false, isOpen: false },
    //             { isHigh: true, isWide: true },
    //             { isHigh: true, isWide: false, isOpen: false },
    //         ],
    //         [
    //             { isHigh: false, isWide: false, isOpen: false },
    //             { isHigh: false, isWide: true, isOpen: false },
    //             { isHigh: false, isWide: false, isOpen: false },
    //             { isHigh: false, isWide: true, isOpen: false },
    //             { isHigh: false, isWide: false, isOpen: false },
    //         ],
    //         [
    //             { isHigh: true, isWide: false, isOpen: false },
    //             { isHigh: true, isWide: true },
    //             { isHigh: true, isWide: false, isOpen: false },
    //             { isHigh: true, isWide: true },
    //             { isHigh: true, isWide: false, isOpen: false },
    //         ],
    //         [
    //             { isHigh: false, isWide: false, isOpen: false },
    //             { isHigh: false, isWide: true, isOpen: false },
    //             { isHigh: false, isWide: false, isOpen: false },
    //             { isHigh: false, isWide: true, isOpen: false },
    //             { isHigh: false, isWide: false, isOpen: false },
    //         ],
    //     );
    // }
    // updateView();
// 


// Controller





//  <TABLE> <TR> <TD>
/* <TABLE>


        <TR>
            <TD class='wide'></TD>
            <TD class='wall'></TD>
            <TD class='wall'></TD>
            <TD class='wall'></TD>
            <TD class='wall'></TD>
        </TR> 

    </TABLE>
    <TABLE>
        <TR>
            <TD>test</TD>
            <TD>test4</TD>
            <TD>test5</TD>
        </TR> 
    </TABLE>
    <TABLE>
        <TR>
            <TD>test</TD>
            <TD>test6</TD>
            <TD>test7</TD>
        </TR> 
    </TABLE> */