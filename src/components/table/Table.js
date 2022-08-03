import ExcelComponent from '@CORE/ExcelComponent'

class Table extends ExcelComponent {
    static classNames = ['excel__ftable-excel', 'table-excel']

    getHTML() {
        return 'Table'
    }
}

export default Table
