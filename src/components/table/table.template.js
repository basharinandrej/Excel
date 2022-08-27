import "./table.functions";
const CODES = {
	A: 65,
	Z: 90,
};

const createHeadCell = (char) => {
	return `<div class="columns__column" data-coll-id=${char}>
			${char}
			<div class="columns__resizer" data-type=resizer></div>
		</div>`;
};

const createCell = (char, index) => {
	return `<div 
		class="row__cell" 
		data-cell-id=${char}-${index + 1} 
		data-column-name=${char} data-row-name=${index + 1} 
		contenteditable></div>`;
};

function toCell(_, index) {
	const charCode = CODES.A + index;
	const char = String.fromCharCode(charCode);
	return createHeadCell(char, index);
}

function createHeadRow() {
	const colsTotal = CODES.Z - CODES.A + 1;

	const cells = new Array(colsTotal).fill("").map(toCell).join("");

	return `
        <div class="table-excel__columns columns">
            <div class="columns__column columns__column--empty"></div>
            ${cells}
        </div>
    `;
}

function createRow(index) {
	const cells = [];

	for (let i = CODES.A; i <= CODES.Z; i++) {
		const char = String.fromCharCode(i);
		cells.push(createCell(char, index));
	}

	return `
        <div class="table-excel__row row" data-row-id=${index + 1}>
            <div class="row__cell row__cell--number">
				${index + 1}
				<div class="row__resizer" data-type=resizer></div>
			</div>
            ${cells.join("")}
        </div>
    `;
}

export function createTable(rowTotal = 45) {
	const rows = [];
	rows.push(createHeadRow());

	for (let i = 0; i < rowTotal; i++) {
		rows.push(createRow(i));
	}

	return rows.join("");
}
