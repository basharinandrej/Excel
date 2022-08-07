import ExcelComponent from '@CORE/ExcelComponent'

class Table extends ExcelComponent {
    static classNames = ['excel__ftable-excel', 'table-excel']

    getHTML() {
        return `
            <div class="table-excel__row-info row-info">
                <div class="row-info__cell row-info__cell--empty"></div>
                <div class="row-info__cell">
                    A
                </div>
                <div class="row-info__cell">
                    B
                </div>
                <div class="row-info__cell">
                    C
                </div>
                <div class="row-info__cell">
                    D
                </div>
            </div>


            <div class="table-excel__row-content row-content">
                <div class="row-content__cell row-content__cell--number">1</div>
                <div class="row-content__cell" contenteditable></div>
                <div class="row-content__cell" contenteditable></div>
                <div class="row-content__cell" contenteditable></div>
                <div class="row-content__cell" contenteditable></div>
            </div>
        `
    }
}

export default Table
