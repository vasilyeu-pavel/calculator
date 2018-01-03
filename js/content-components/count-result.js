'use strict'

class CountResult extends Component {
	constructor({ element }) {
		super(element);
		this._render();
	}
	_render() {
		this._element.innerHTML = `
		<div class="open" id="but">
		<button id="button" style="margin-bottom: 10px">Посчитать</button>
		</div>
		`
	}
}