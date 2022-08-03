import ExcelComponent from '@CORE/ExcelComponent'

class Excel extends ExcelComponent {
    constructor(selector, options) {
        super()
        this.$root = document.querySelector(selector)
        this.collectionComponents = options?.components || []
    }

    _createRootWrapper() {
        const $rootWrapper = document.createElement('div')
        $rootWrapper.classList.add('excel')

        return $rootWrapper
    }

    _appendComponentsInRoot() {
        const $rootWrapper = this._createRootWrapper()

        this.collectionComponents.forEach((Component) => {
            const $el = document.createElement('div')
            $el.classList.add(...Component.classNames)
            $el.append(new Component().getHTML())

            $rootWrapper.append($el)
        })

        return $rootWrapper
    }

    render() {
        const $rootWrapper = this._appendComponentsInRoot()
        return this.$root.append($rootWrapper)
    }
}

export default Excel
