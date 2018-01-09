'use strict'


import Book from './content-components/book.js'
import Blanks from './content-components/blanks.js'
import Component from './content-components/component.js'
import Title from './content-components/title.js'
import DataService from '../../service/data-service.js'

const data = {
	"title" : [
		{"<b>Тип данных:</b>" : ["Книги", "Бланки",]},
	],			
};

export default class Page extends Component{
	constructor({element}) {
		super(element)
			
		this._title = new Title({
			element: this._element.querySelector('[class="bar_tittle"]'),
			options: data.title
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
			DataService.getServerData((dataValue) => {
				this._removeDivContent()
				this._removeMenuBar();
				this._book = new Book ({
					element: this._element.querySelector('[class="bar_content"]'),
					options: dataValue.books.booksOptions,
					elemInnerRes: this._element.querySelector('#res'),
					data: dataValue.books.data_books
							
				})
			})
			
				break;
			case 'Бланки':
			DataService.getServerData((dataValue) => {
				this._removeDivContent()
				this._removeMenuBar();
				this._blanks = new Blanks ({
					element: this._element.querySelector('[class="bar_content"]'),
					options: dataValue.blanks.blanksOptions,
					elemInnerRes: this._element.querySelector('#res'),
					data: dataValue.blanks.data_blank //передаём как свойство дата, результат выполнения функции
				})
			})
			
				break;
			case 'Газеты':		
			default:
				//код
				break;
		}
	}

}