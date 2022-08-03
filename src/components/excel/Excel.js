import ExcelComponent from '@CORE/ExcelComponent'

class Excel extends ExcelComponent {
    constructor(selector, options) {
        super()
        this.$root = document.querySelector(selector)
        this.collectionComponents = options.components || []
    }

    render() {
        return this.$root
    }
}

export default Excel
