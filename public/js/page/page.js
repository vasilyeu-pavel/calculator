'use strict'


import Book from './content-components/books/book.js'
import Blanks from './content-components/blanks/blanks.js'
import Component from './content-components/component.js'
import Title from './content-components/title/title.js'
import dataSelect from './content-components/data/data.js'


export default class Page extends Component{
	constructor({element}) {
		super(element)
		this._title = new Title({
			element: this._element.querySelector('[class="bar_tittle"]'),
			options: dataSelect.title
		})

		this._title._select.addEventListener('change.title', (event) => { //слушаем событие внутри титульного select
			let order = event.detail
			this._filterTitleValue(order)
		})
		
		this._all = this._element.querySelectorAll('[class="all"]')

	}

	_filterTitleValue(order) {
		//фильтрация на титульном селекте
		switch (order) {
			case 'Книги':
			
				this._removeDivContent()
				this._removeMenuBar();
				this._book = new Book ({
					element: this._element.querySelector('[class="bar_content"]'),
					options: dataSelect.booksOptions,
					elemInnerRes: this._element.querySelector('#res'),				
			})
				break;
			case 'Бланки':
			
				this._removeDivContent()
				this._removeMenuBar();
				this._blanks = new Blanks ({
					element: this._element.querySelector('[class="bar_content"]'),
					options: dataSelect.blanksOptions,
					elemInnerRes: this._element.querySelector('#res'),			
			})
			
				break;
			case 'Газеты':		
			default:
				//код
				break;
		}
	}

}