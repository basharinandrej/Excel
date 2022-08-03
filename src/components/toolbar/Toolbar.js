import ExcelComponent from '@CORE/ExcelComponent'

class Toolbar extends ExcelComponent {
    static classNames = ['excel__toolbar-excel', 'toolbar-excel']

    getHTML() {
        return 'Toolbar'
    }
}

export default Toolbar
