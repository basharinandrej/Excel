const C0DES = {
    A: 65,
    Z: 90
}

function createCol(el) {
    return `
        <div class="column">
        ${el}
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

    const cols = new Array(colCount)
        .fill('')
        .map(charAd)
        .map(createCol)
        .join('')

    const rows = []
    rows.push(createRow(cols))

    for(let i = 0; i < rowsCount; i++) {
        rows.push(createRow())
    }
    return rows.join('')
}













