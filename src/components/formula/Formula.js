import ExcelComponent from '@CORE/ExcelComponent'

class Formula extends ExcelComponent {
    static classNames = ['excel__formula-excel', 'formula-excel']

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input']
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
        console.log(this.$root)
        console.log('onInput....', event.target.value)
    }
}

export default Formula
