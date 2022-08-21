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

		$column.value && $column.addClass("row-info__cell--selected");
		$row.value && $row.addClass("row-content--selected");

		const idCellHeader = $column.value && $column.getDataSet("collId");
		const selector = `[data-column-name=${idCellHeader}]`;
		const $cellsOneColumn = $table.findAll(selector);

		const handlerMouseMove = (event) => {
			if ($column.value && isResizer) {
				const { left } = $column.getCoords();
				const coordX = event.pageX;
				const delta = coordX - left;

				const DEFALT_WIDTH_ROW = 70;
				const valueWidth = delta > DEFALT_WIDTH_ROW ? delta : DEFALT_WIDTH_ROW;

				$cellsOneColumn.forEach((cell) => {
					$(cell).setStyle({ minWidth: valueWidth + "px" });
				});

				$column.setStyle({ minWidth: valueWidth + "px" });
			} else {
				const { top } = $row.getCoords();
				const coordY = event.pageY;
				const delta = coordY - top;

				const DEFALT_HEIGHT_ROW = 28;
				const valueHeight = delta > DEFALT_HEIGHT_ROW ? delta : DEFALT_HEIGHT_ROW;
				$row.setStyle({ height: valueHeight + "px" });
			}
		};

		$table.on("mousemove", handlerMouseMove);
		$table.on("mouseup", destroyResizeColumn);
		$table.on("mouseleave", destroyResizeColumn);

		function destroyResizeColumn() {
			$table.off("mousemove", handlerMouseMove);
			$table.off("mouseup", destroyResizeColumn);
			$table.off("mouseleave", destroyResizeColumn);

			$column.value && $column.removeClass("row-info__cell--selected");
			$row.value && $row.removeClass("row-content--selected");
		}
	}
}

export default Table;
