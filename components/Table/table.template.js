const C0DES = {
    A: 65,
    Z: 90
}

function toCell(_, idx) { 
    return `              
    <div class="cell" data-col=${idx} contenteditable></div>
    `
}

function createCol(el, idx) {
    return `
        <div class="column" data-col=${idx} data-type="resizeble">
        ${el}
        <div class="column__resizer" data-type="resizer"></div>
      </div>
    `
}

function createRow(content) {
    return `
    <div class="row">
        <div class="row-info"></div>
        <div class="row-data">${content}</div>
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

    for(let i = 0; i < rowsCount; i++) {
        let cell = new Array(rowsCount)
            .fill('')
            .map(toCell)
            .join('')

        rows.push(createRow(cell))
    }
    return rows.join('')
}













