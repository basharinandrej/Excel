const CODES = {
	A: 65,
	Z: 90,
};

function createHeadCell(char) {
	return `
        <div class="row-info__cell">
            ${char}
        </div>
    `;
}

function createCell() {
	return `
        <div class="row-content__cell" contenteditable></div>
    `;
}

function createHeadRow() {
	const cells = [];

	for (let i = CODES.A; i <= CODES.Z; i++) {
		const char = String.fromCharCode(i);
		cells.push(createHeadCell(char));
	}

	return `
        <div class="table-excel__row-info row-info">
            <div class="row-info__cell row-info__cell--empty"></div>
            ${cells.join("")}
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
	for (let i = 0; i <= rowTotal; i++) {
		rows.push(createRow(i));
	}

	return rows.join("");
}
