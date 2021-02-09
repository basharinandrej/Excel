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

    closest(parent) {
        return $(this.$el.closest(parent))
    }

    getCoords() {
        return this.$el.getBoundingClientRect()
    }

    get data() {
        return this.$el.dataset
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }

    find(selector) {
        return $(this.$el.querySelector(selector))
    }

    addClass(selector) {
        return this.$el.classList.add(selector)
    }

    
    removeClass(selector) {
        return this.$el.classList.remove(selector)
    }

    css(styles = {}) {
        Object.keys(styles)
            .forEach(property => {
                return this.$el.style[property] = styles[property]
            })
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
