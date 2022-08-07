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
            $el.setHTML(new Component().getHTML())

        })

        console.log($rootWrapper.getHTML())
        return $rootWrapper
    }

    render() {
        const $rootWrapper = this._appendComponentsInRootWrapper()
        return this.$root.setHTML($rootWrapper)
    }
}

export default Excel
