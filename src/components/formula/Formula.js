import ExcelComponent from '@CORE/ExcelComponent'

class Formula extends ExcelComponent {
    static classNames = ['excel__formula-excel', 'formula-excel']

    getHTML() {
        return `
            <p class="formula-excel__paragraph">
                fx
            </p>
            <input type="text" class="formula-excel__input">
        `
    }
}

export default Formula
