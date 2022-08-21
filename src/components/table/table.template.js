import "./table.functions";
const CODES = {
	A: 65,
	Z: 90,
};

const createHeadCell = (char) => {
	return `<div class="row-info__cell" data-coll-id=${char}>
			${char}
			<div class="row-info__resize" data-type=resizer></div>
		</div>`;
};

const createCell = (char, index) => {
	return `<div class="row-content__cell" data-cell-id=${char}-${
		index + 1
	} data-column-name=${char} contenteditable></div>`;
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
		cells.push(createCell(char, index));
	}

	return `
        <div  class="table-excel__row-content row-content" data-row-id=${index + 1}>
            <div class="row-content__cell row-content__cell--number">
				${index + 1}
				<div class="row-content__resize" data-type=resizer></div>
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
