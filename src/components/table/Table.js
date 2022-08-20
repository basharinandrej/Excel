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

		const $cellHeader = $resizer.closest("[data-coll-id]");
		const $row = $resizer.closest("[data-row-id]");

		if ($cellHeader.$el) {
			/* resize column */
			$cellHeader.addClass("row-info__cell--selected");

			const idCellHeader = $cellHeader.getDataSet("collId");
			const selector = `[data-cell-id=${getFirstSymbolId(idCellHeader)}]`;
			const $cellsOneColumn = $table.findAll(selector);

			const handlerMouseMove = (event) => {
				const { left } = $cellHeader.getCoords();
				const coordX = event.pageX - left;

				const DEFALT_WIDTH_ROW = 70;
				const valueWidth = coordX > DEFALT_WIDTH_ROW ? coordX : DEFALT_WIDTH_ROW;

				$cellsOneColumn.forEach((cell) => {
					$(cell).setStyle("minWidth", valueWidth + "px");
				});

				$cellHeader.setStyle("minWidth", valueWidth + "px");
			};

			const handlerMouseUp = () => {
				$table.off("mousemove", handlerMouseMove);
				$table.off("mouseup", handlerMouseUp);
				$cellHeader.removeClass("row-info__cell--selected");
			};

			$table.on("mousemove", handlerMouseMove);
			$table.on("mouseup", handlerMouseUp);
		}

		if ($row.$el) {
			/* resize row */
			$row.addClass("row-content--selected");

			const handlerMouseMove = (event) => {
				const { top } = $row.getCoords();
				const coordY = event.pageY - top;

				const DEFALT_HEIGHT_ROW = 28;
				const valueHeight = coordY > DEFALT_HEIGHT_ROW ? coordY : DEFALT_HEIGHT_ROW;
				$row.setStyle("height", valueHeight + "px");
			};

			const handlerMouseUp = () => {
				$table.off("mousemove", handlerMouseMove);
				$table.off("mouseup", handlerMouseUp);
				$row.removeClass("row-content--selected");
			};

			$table.on("mousemove", handlerMouseMove);
			$table.on("mouseup", handlerMouseUp);
		}
	}
}

function getFirstSymbolId(id) {
	return id.substring(0, 1);
}

export default Table;
