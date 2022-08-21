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

		if ($column.value && isResizer) {
			/* resize column */
			$column.addClass("row-info__cell--selected");

			const idCellHeader = $column.getDataSet("collId");
			const selector = `[data-column-name=${idCellHeader}]`;
			const $cellsOneColumn = $table.findAll(selector);

			const handlerMouseMove = (event) => {
				const { left } = $column.getCoords();
				const coordX = event.pageX - left;

				const DEFALT_WIDTH_ROW = 70;
				const valueWidth = coordX > DEFALT_WIDTH_ROW ? coordX : DEFALT_WIDTH_ROW;

				$cellsOneColumn.forEach((cell) => {
					$(cell).setStyle("minWidth", valueWidth + "px");
				});

				$column.setStyle("minWidth", valueWidth + "px");
				console.log("coordX", coordX);
			};
			$table.on("mousemove", handlerMouseMove);

			$table.on("mouseup", destroyResizeColumn);
			$table.on("mouseleave", destroyResizeColumn);

			function destroyResizeColumn() {
				$table.off("mousemove", handlerMouseMove);
				$table.off("mouseup", destroyResizeColumn);
				$table.off("mouseleave", destroyResizeColumn);
				$column.removeClass("row-info__cell--selected");
			}
		}

		if ($row.value && isResizer) {
			/* resize row */
			$row.addClass("row-content--selected");

			const handlerMouseMove = (event) => {
				const { top } = $row.getCoords();
				const coordY = event.pageY - top;

				const DEFALT_HEIGHT_ROW = 28;
				const valueHeight = coordY > DEFALT_HEIGHT_ROW ? coordY : DEFALT_HEIGHT_ROW;
				$row.setStyle("height", valueHeight + "px");
			};

			$table.on("mousemove", handlerMouseMove);
			$table.on("mouseup", destroyResizeRow);
			$table.on("mouseleave", destroyResizeRow);

			function destroyResizeRow() {
				$table.off("mousemove", handlerMouseMove);
				$table.off("mouseup", destroyResizeRow);
				$table.off("mouseleave", destroyResizeRow);
				$row.removeClass("row-content--selected");
			}
		}
	}
}

export default Table;
