'use strict'
import Component from '../component.js'

export default class Title extends Component {
	constructor ({ element, options }) {
    super(element);
    this._options = options;
		this._chooseSelectTitle(this._options);

    this._select = this._element.querySelector('select')

    this._select.addEventListener('change', (event) => { //создание своего события change, которое слушается в page
      let myEvent = new CustomEvent('change.title',{
        detail: this._select.value
      })
      this._select.dispatchEvent(myEvent)
    })

	}
  _chooseSelectTitle(options) {
    // перебор свой в исходных данных, для отрисовки селектов
      let arr = options;
      for (let i = 0; i < arr.length; i++) {
        this._render(arr[i])
      }
  } 
    


}