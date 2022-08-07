class DomListener {
    constructor($root, listeners) {
        this.listeners = listeners || []
        this.$root = $root
    }

    initDomListeners() {
        console.log('this', this)
        
        this.listeners.forEach(listener => {
            const method = getNameMethod(listener)
            this.$root.on(listener, this[method])
        })
    }
}

function getNameMethod(subName) {
    return 'on' + toUpperCaseFirstSymbol(subName)
}

function toUpperCaseFirstSymbol(string = '') {
    if(typeof string !== 'string') ''

    return string.charAt(0).toUpperCase() + string.slice(1)
}

export default DomListener
