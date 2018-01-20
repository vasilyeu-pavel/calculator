'use strict'


import Book from './content-components/book.js'
import Blanks from './content-components/blanks.js'
import Component from './content-components/component.js'
import Title from './content-components/title.js'


const data = {
	"title" : [
		{"<b>Тип данных:</b>" : ["Книги", "Бланки",]},
	],			
};

const dataValues = {
 "blanks" : 
	{
	"data_blank" :
		{
		"blakns_paint_gramm" : 590, 
		"blakns_price_min" : 330, 
		"blakns_price_newspaper" : 12200,
		"blakns_price_offsetpaper" : 22000,
		"blakns_price_master" : 5400,
	    "blanks_price_kalka" : 1900,
		"blanks_price_plastina" : 15000,
		"blanks_price_copy_plastin" : 7500,
		"blakns_paint_grammOver" : 110,
		"blakns_price_minOver" : 500
	},
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
					data: dataValues.blanks.data_blank //передаём как свойство дата, результат выполнения функции
				
			})
			
				break;
			case 'Газеты':		
			default:
				//код
				break;
		}
	}

}