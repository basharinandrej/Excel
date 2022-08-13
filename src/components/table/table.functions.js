import { $ } from "../../dom/index";
window.addEventListener("DOMContentLoaded", () => {
	const $table = $(".table-excel--js");

	$table.on("mousedown", function (event) {
		const target = event.target;

		const $cellHeader = target.closest("[data-coll-id]");
		const $row = target.closest("[data-row-id]");

		if ($cellHeader) {
			/* resize column */
			$cellHeader.classList.add("row-info__cell--selected");

			const idCellHeader = $cellHeader.dataset.collId;
			const selector = `[data-cell-id=${getFirstSymbolId(idCellHeader)}]`;
			const cellsOneColumn = $table.$el.querySelectorAll(selector);

			const handlerMouseMove = (event) => {
				const coordX = event.pageX;
				const offsetLeft = $cellHeader.getBoundingClientRect().left;

				const DEFALT_WIDTH_ROW = 70;
				const valueWidth = coordX - offsetLeft > DEFALT_WIDTH_ROW ? coordX - offsetLeft : DEFALT_WIDTH_ROW;

				/*todo дорого перебирать массив на каждое движение мыши*/
				cellsOneColumn.forEach((cell, idx) => {
					cell.style.minWidth = valueWidth + "px";
				});

				$cellHeader.style.minWidth = valueWidth + "px";
			};

			const handlerMouseUp = () => {
				$table.off("mousemove", handlerMouseMove);
				$table.off("mouseup", handlerMouseUp);
				$cellHeader.classList.remove("row-info__cell--selected");
			};

			$table.on("mousemove", handlerMouseMove);
			$table.on("mouseup", handlerMouseUp);
		}
		if ($row) {
			/* resize row */
			$row.classList.add("row-content--selected");

			const handlerMouseMove = (event) => {
				const coordY = event.pageY;
				const offsetTop = $row.getBoundingClientRect().top;

				const DEFALT_HEIGHT_ROW = 28;
				const valueHeight = coordY - offsetTop > DEFALT_HEIGHT_ROW ? coordY - offsetTop : DEFALT_HEIGHT_ROW;
				$row.style.height = valueHeight + "px";
			};

			const handlerMouseUp = () => {
				$table.off("mousemove", handlerMouseMove);
				$table.off("mouseup", handlerMouseUp);
				$row.classList.remove("row-content--selected");
			};

			$table.on("mousemove", handlerMouseMove);
			$table.on("mouseup", handlerMouseUp);
		}
	});
});

function getFirstSymbolId(id) {
	return id.substring(0, 1);
}
