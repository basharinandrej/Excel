import ExcelComponent from "@CORE/ExcelComponent";
import { createTable } from "./table.template";

class Table extends ExcelComponent {
	static classNames = ["excel__ftable-excel", "table-excel"];

	toHTML() {
		return createTable();
	}
}

export default Table;
