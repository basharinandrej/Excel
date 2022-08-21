import { convertToUpperCaseFirstSymbol } from "./utils";

class DomListener {
	constructor($root, options) {
		this.$root = $root;
		this.listeners = options?.listeners || [];
		this.nameComponent = options?.name;
	}

	initDomListeners() {
		this.listeners.forEach((listener) => {
			const method = getNameMethod(listener);

			if (!this[method]) {
				throw new Error(`Method ${method} is not implemented in <${this.nameComponent} /> component`);
			}

			this[method] = this[method].bind(this);
			this.$root.on(listener, this[method]);
		});
	}

	removeDomListeners() {
		this.listeners.forEach((listener) => {
			const method = getNameMethod(listener);

			this.$root.off(listener, this[method]);
		});
	}
}

function getNameMethod(subName) {
	return "on" + convertToUpperCaseFirstSymbol(subName);
}

export default DomListener;
