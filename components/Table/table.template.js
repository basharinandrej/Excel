const C0DES = {
    A: 65,
    Z: 90
}

function toCell(row) {  
    // переменная row хранться тут, и доступна для следующей функции по замыканию   
    return function(_, idx) {
        return `<div class="cell" 
            data-col=${idx} 
            data-id="${row} : ${idx}" 
            data-type="cell"
            contenteditable>
        </div>`
    }
}

function createCol(el, idx) {
    return `
        <div class="column" data-col=${idx} data-type="resizeble">
        ${el}
        <div class="column__resizer" data-resize="col"></div>
      </div>
    `
}

function createRow(content, idx) {
    return `
        <div class="row" data-type="resizeble">
            <div class="row-info">
                ${idx ? idx : ''}
                <div class="row__resizer" data-resize="row"></div>
            </div>
            <div class="row-data">
                ${content}
            </div>
        </div>
    `
}

function charAd(_, idx) {
    return String.fromCharCode(C0DES.A + idx)
}

export function createTable(rowsCount) {
    const colCount = C0DES.Z - C0DES.A + 1
    const rows = []

    const cols = new Array(colCount)
        .fill('')
        .map(charAd)
        .map(createCol)
        .join('')

    rows.push(createRow(cols))

    for(let row = 0; row < rowsCount; row++) {
        let cell = new Array(rowsCount)
            .fill('')
            .map(toCell(row))
            .join('')

        rows.push(createRow(cell, row + 1))
    }
    return rows.join('')
}













