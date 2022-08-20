class Dom {
	constructor(selector) {
		this.$el = typeof selector === "string" ? document.querySelector(selector) : selector;
	}

	setHTML(html) {
		if (html instanceof Dom) {
			html = html.$el;
		}
		if (typeof html === "string") {
			this.$el.innerHTML = html;
		} else {
			this.$el.append(html);
		}
		return this;
	}

	getHTML() {
		return this.$el.innerHTML;
	}

	on(listener, callback) {
		this.$el.addEventListener(listener, callback);
	}

	off(listener, callback) {
		this.$el.removeEventListener(listener, callback);
	}

	closest(selector) {
		return $(this.$el.closest(selector));
	}

	addClass(className) {
		return this.$el.classList.add(className);
	}

	removeClass(className) {
		return this.$el.classList.remove(className);
	}

	/* Вернёт value из объекта dataset */
	getDataSet(key) {
		return this.$el.dataset[key];
	}

	findAll(selector) {
		return $(this.$el.querySelectorAll(selector));
	}

	getCoords() {
		return this.$el.getBoundingClientRect();
	}

	forEach(cb) {
		this.$el.forEach(cb);
	}

	setStyle(property, value) {
		this.$el.style[property] = value;
	}
}

export function $(selector) {
	return new Dom(selector);
}

$.create = function (tagName, classes) {
	const node = document.createElement(tagName);

	if (!Array.isArray(classes)) {
		node.classList.add(classes);
	} else {
		node.classList.add(...classes);
	}

	return $(node);
};
