const CHARCODE = {
    'A': 65,
    'Z': 90
}

function createRow( content ) {
    return `
        <div class="row">
            <div class="row-info"></div>
            <div class="row-data"> ${content} </div>
        </div>
    `
}

function toCol( content ) {
    return `<div class="column">${content}</div>`
}

export function createTable(row) {
    const cntCol = CHARCODE.Z - CHARCODE.A + 1
    let rows = new Array(row).fill('')

    let columns = new Array(cntCol).fill('')
        .map((_, idx) => {
            return CHARCODE.A + idx
        })
        .map(ch => {
            return String.fromCharCode(ch)
        }).map(ch => {
            return toCol(ch)
        }).join(' ')

    rows = rows.map((_, idx) => {
        return createRow()
    })

    rows.unshift(createRow(columns))

    return rows.join(' ')
}















