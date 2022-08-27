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
		const $resizer = $(event.target);
		const $table = this.$root;

		const $column = $resizer.closest("[data-coll-id]");
		const $row = $resizer.closest("[data-row-id]");

		const isResizer = $resizer.getDataSet("type") === "resizer";

		const handlerMouseMove = (event) => {
			if ($column.value && isResizer) {
				const WIDTH_RESIZER = 4;
				const { left } = $column.getCoords();
				const coordX = event.pageX;
				const delta = coordX - left - WIDTH_RESIZER;

				$resizer.setStyle({ left: delta + "px" });
				$resizer.addClass("columns__resizer--active");

				$table.on("mouseup", handlerMouseUp);
			} else {
				if (isResizer) {
					const { top } = $row.getCoords();
					const coordY = event.pageY;
					const delta = coordY - top;

					$resizer.setStyle({ top: delta + "px" });
					$resizer.addClass("row-content__resizer--active");

					$table.on("mouseup", handlerMouseUpRow);
				}
			}
		};

		$table.on("mousemove", handlerMouseMove);
		$table.on("mouseleave", destroyResizable);

		function handlerMouseUpRow(event) {
			console.log(1);
			const idRow = $row.getDataSet("rowId");
			const selectorCell = `[data-row-name="${idRow}"]`;

			const { top } = $row.getCoords();
			const coordY = event.pageY;
			const delta = coordY - top;

			const $rowCell = $table.findAll(selectorCell);
			$rowCell.forEach((cell) => {
				$(cell).setStyle({ height: delta + "px" });
			});
			destroyResizable();
		}

		function handlerMouseUp(event) {
			const idColumn = $column.getDataSet("collId");

			const selectorCell = `[data-column-name=${idColumn}]`;
			const selectorColumn = `[data-coll-id=${idColumn}]`;

			const $cells = $table.findAll(selectorCell);
			const $columnCell = $table.find(selectorColumn);

			const { left } = $column.getCoords();
			const coordX = event.pageX;
			const delta = coordX - left;

			$columnCell.setStyle({ minWidth: delta + "px" });
			$cells.forEach((cell) => {
				$(cell).setStyle({ minWidth: delta + "px" });
			});
			destroyResizable();
		}

		function destroyResizable() {
			$table.off("mousemove", handlerMouseMove);
			$table.off("mouseup", handlerMouseUp);
			$table.off("mouseup", handlerMouseUpRow);
			$table.off("mouseleave", destroyResizable);
			$resizer.removeClass("columns__resizer--active");
			$resizer.removeClass("row-content__resizer--active");
		}
	}
}

export default Table;
