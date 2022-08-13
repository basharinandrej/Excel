import ExcelComponent from "@CORE/ExcelComponent";
import { createTable } from "./table.template";

class Table extends ExcelComponent {
	static classNames = ["excel__table-excel", "table-excel", "table-excel--js"];

	toHTML() {
		return createTable();
	}
}

export default Table;
