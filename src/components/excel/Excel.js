import ExcelComponent from '@CORE/ExcelComponent'
import { $ } from '@Dom/index'

class Excel extends ExcelComponent {
    constructor(selector, options) {
        super()
        this.$root = $(selector)
        this.collectionComponents = options?.components || []
    }

    _appendComponentsInRootWrapper() {
        const $rootWrapper = $.create('div', 'excel')

        this.collectionComponents.forEach((Component) => {
            const $el = $.create('div', Component.classNames)
            $el.setHTML(new Component().toHTML())
            $rootWrapper.setHTML($el)

        })
        return $rootWrapper
    }

    render() {
        const $rootWrapper = this._appendComponentsInRootWrapper()
        return this.$root.setHTML($rootWrapper)
    }
}

export default Excel
