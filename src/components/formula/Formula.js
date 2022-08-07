import ExcelComponent from '@CORE/ExcelComponent'

class Formula extends ExcelComponent {
    static classNames = ['excel__formula-excel', 'formula-excel']

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        })
    }

    toHTML() {
        return `
            <p class="formula-excel__paragraph">
                fx
            </p>
            <input type="text" class="formula-excel__input">
        `
    }

    onInput(event) {
        console.log('onInput:', event.target.value)
    }

    onClick(event) {
        console.log('onClick')
    }
}

export default Formula
