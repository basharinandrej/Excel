const CODES = {
	A: 65,
	Z: 90,
};

const createHeadCell = (char) => `<div class="row-info__cell">${char}</div>`;

const createCell = () => `<div class="row-content__cell" contenteditable></div>`;

function toCell(_, index) {
	const charCode = CODES.A + index;
	const char = String.fromCharCode(charCode);
	return createHeadCell(char);
}

function createHeadRow() {
	const colsTotal = CODES.Z - CODES.A + 1;

	const cells = new Array(colsTotal).fill("").map(toCell).join("");

	return `
        <div class="table-excel__row-info row-info">
            <div class="row-info__cell row-info__cell--empty"></div>
            ${cells}
        </div>
    `;
}

function createRow(index) {
	const cells = [];

	for (let i = CODES.A; i <= CODES.Z; i++) {
		const char = String.fromCharCode(i);
		cells.push(createCell(char));
	}
	return `
        <div class="table-excel__row-content row-content">
            <div class="row-content__cell row-content__cell--number">${index + 1}</div>
            ${cells.join("")}
        </div>
    `;
}

export function createTable(rowTotal = 15) {
	const rows = [];
	rows.push(createHeadRow());

	for (let i = 0; i < rowTotal; i++) {
		rows.push(createRow(i));
	}

	return rows.join("");
}
