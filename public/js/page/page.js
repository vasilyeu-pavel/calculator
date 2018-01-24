'use strict'


import Book from './content-components/books/book.js'
import Blanks from './content-components/blanks/blanks.js'
import Component from './content-components/component.js'
import Title from './content-components/title/title.js'


const data = {
	"title" : [
		{"<b>Тип данных:</b>" : ["Книги", "Бланки",]},
	],			
};

const dataValues = {
 "blanks" : 
	{
	"blanksOptions" : [
		{"Тип бумаги:" : ["Газетная", "Офсетная"]},
		{"Мастер:" : [1, 2]},
		{"Формат:" : ["A3", "A4", "A5", "A6", "A7"]},
		{"Красочность:" : ["1+0", "1+1", "2+0", "2+2"]}
	]
},
	"books" :
	 {
	 	"data_books" : {
	 		"books_paint_gramm" : 590, 
			"books_price_min" : 330, 
			"books_price_newspaper" : 12200,
			"books_price_offsetpaper" : 23000,
			"books_price_master" : 5400,
			"books_price_ISBN" : 70000,
			"books_price_konsul" : 50000,
			"books_verstka" : 400000,
			"books_korrektura" : 300000,
			"books_change_master1" : 9100,
			"books_change_master2" : 10500
	 	},
	 	"booksOptions" : [
			{"Тип бумаги:" : ["Газетная", "Офсетная"]},
			{"Формат:" : ["A4", "A5"]}
	 	]
	 },
	 "title" : [
		{"нет данных:" : ["-", "-"]}
	 ]
}

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
			
				this._removeDivContent()
				this._removeMenuBar();
				this._book = new Book ({
					element: this._element.querySelector('[class="bar_content"]'),
					options: dataValues.books.booksOptions,
					elemInnerRes: this._element.querySelector('#res'),
					data: dataValues.books.data_books
							
				
			})
			
				break;
			case 'Бланки':
			
				this._removeDivContent()
				this._removeMenuBar();
				this._blanks = new Blanks ({
					element: this._element.querySelector('[class="bar_content"]'),
					options: dataValues.blanks.blanksOptions,
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