'use strict'

class Title extends Component {
	constructor ({ element, options }) {
    super(element);
    this._options = options;
		this._chooseSelect(this._options);

    this._select = this._element.querySelector('select')

    this._select.addEventListener('change', (event) => { //создание своего события change, которое слушается в page
      let myEvent = new CustomEvent('change.title',{
        detail: this._select.value
      })
      this._select.dispatchEvent(myEvent)
    })

	}

	_render(obj) {
      this._renderSelect(this._element, obj);
	}


}