class Dom {
	constructor(selector) {
		this.$el = typeof selector === "string" 
			? document.querySelector(selector) 
			: selector;
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
		return this.$el.innerHTML
	}

	on(listener, callback) {
		this.$el.addEventListener(listener, callback)
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
