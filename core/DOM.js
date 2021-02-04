  class DOM {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.getElementById(selector)
            : selector
    }

    on(eventType, callbackFn) {
        this.$el.addEventListener(eventType, callbackFn)
    }

    off(eventType, callbackFn) {
        this.$el.removeEventListener(eventType, callbackFn)
    }

    html(html){
        if ( typeof html === 'string') {
            this.$el.innerHTML = html
        }
        return this.$el
    }

    clear() {
        this.html('')
        return this
    }
    
    appendMy(node) {
        if( node instanceof DOM ) {
            node = node.$el
        }

        if( Element.prototype.append ) {
            this.$el && this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }

}

export function $(selector) {
    return new DOM(selector)
}

$.create = function(tagName, classes) {
    let $el = document.createElement(tagName)
    $el.classList.add(classes)
    return $($el)
}
