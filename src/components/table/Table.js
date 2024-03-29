import ExcelComponent from "@CORE/ExcelComponent";
import { createTable } from "./table.template";
import { $ } from "../../dom/index";

class Table extends ExcelComponent {
	static classNames = ["excel__table-excel", "table-excel", "table-excel--js"];

	constructor($root) {
		super($root, {
			name: "Table",
			listeners: ["mousedown"],
		});
	}

	toHTML() {
		return createTable();
	}

	onMousedown(event) {
		const MIN_WIDTH_COLUMN = 70;
		const MIN_HEIGHT_ROW = 30;

		const $resizer = $(event.target);
		const $table = this.$root;

		const $column = $resizer.closest("[data-coll-id]");
		const $row = $resizer.closest("[data-row-id]");

		const isResizer = $resizer.getDataSet("type") === "resizer";

		const handlerMouseMove = (event) => {
			if (!isResizer) return;
			if ($column.value) {
				const WIDTH_RESIZER = 4;
				const { left } = $column.getCoords();
				const coordX = event.pageX;
				const delta = coordX - left - WIDTH_RESIZER;

				$resizer.setStyle({ left: Math.max(delta, MIN_WIDTH_COLUMN) + "px" });
				$resizer.addClass("columns__resizer--active");

				$table.on("mouseup", handlerMouseUpColumn);
			} else {
				const { top } = $row.getCoords();
				const coordY = event.pageY;
				const delta = coordY - top;

				$resizer.setStyle({ top: Math.max(delta, MIN_HEIGHT_ROW) + "px" });
				$resizer.addClass("row__resizer--active");

				$table.on("mouseup", handlerMouseUpRow);
			}
		};

		$table.on("mousemove", handlerMouseMove);
		$table.on("mouseleave", destroyResizable);

		function handlerMouseUpRow(event) {
			const idRow = $row.getDataSet("rowId");
			const selectorCell = `[data-row-name="${idRow}"]`;

			const { top } = $row.getCoords();
			const coordY = event.pageY;
			const delta = coordY - top;

			const $rowCell = $table.findAll(selectorCell);
			$rowCell.forEach((cell) => {
				$(cell).setStyle({ height: Math.max(delta, MIN_HEIGHT_ROW) + "px" });
			});
			destroyResizable();
		}

		function handlerMouseUpColumn(event) {
			const idColumn = $column.getDataSet("collId");

			const selectorCell = `[data-column-name=${idColumn}]`;
			const selectorColumn = `[data-coll-id=${idColumn}]`;

			const $cells = $table.findAll(selectorCell);
			const $columnCell = $table.find(selectorColumn);

			const { left } = $column.getCoords();
			const coordX = event.pageX;
			const delta = coordX - left;

			$columnCell.setStyle({ minWidth: Math.max(delta, MIN_WIDTH_COLUMN) + "px" });
			$cells.forEach((cell) => {
				$(cell).setStyle({ minWidth: Math.max(delta, MIN_WIDTH_COLUMN) + "px" });
			});
			destroyResizable();
		}

		function destroyResizable() {
			$table.off("mousemove", handlerMouseMove);
			$table.off("mouseup", handlerMouseUpColumn);
			$table.off("mouseup", handlerMouseUpRow);
			$table.off("mouseleave", destroyResizable);
			$resizer.removeClass("columns__resizer--active");
			$resizer.removeClass("row__resizer--active");
		}
	}
}

export default Table;
