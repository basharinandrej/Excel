import ExcelComponent from '@CORE/ExcelComponent'

class Formula extends ExcelComponent {
    static classNames = ['excel__formula-excel', 'formula-excel']

    getHTML() {
        return 'Formula'
    }
}

export default Formula
