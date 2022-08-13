import { $ } from "../../dom/index";
window.addEventListener("DOMContentLoaded", () => {
	const $table = $(".table-excel--js");

	$table.on("mousedown", function (event) {
		const target = event.target;
		const $cellHeader = target.closest("[data-coll-id]");

		if ($cellHeader instanceof Element) {
			$cellHeader.classList.add("row-info__cell--selected");

			const idCellHeader = $cellHeader.dataset.collId;
			const selector = `[data-cell-id=${getFirstSymbolId(idCellHeader)}]`;
			const cellsOneColumn = $table.$el.querySelectorAll(selector);

			const handlerMouseMove = (event) => {
				const coordX = event.pageX;
				const offsetLeft = $cellHeader.getBoundingClientRect().left;

				/*todo дорого перебирать массив на каждое движение мыши*/
				cellsOneColumn.forEach((cell, idx) => {
					cell.style.minWidth = coordX - offsetLeft + "px";
				});
				$cellHeader.style.minWidth = coordX - offsetLeft + "px";
			};

			const handlerMouseUp = () => {
				$table.off("mousemove", handlerMouseMove);
				$table.off("mouseup", handlerMouseUp);
				$cellHeader.classList.remove("row-info__cell--selected");
			};

			$table.on("mousemove", handlerMouseMove);
			$table.on("mouseup", handlerMouseUp);
		}
	});
});

function getFirstSymbolId(id) {
	return id.substring(0, 1);
}
