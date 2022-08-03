import ExcelComponent from '@CORE/ExcelComponent'

class Header extends ExcelComponent {
    static classNames = ['excel__header-excel', 'header-excel']

    getHTML() {
        return 'Header'
    }
}

export default Header
