'use strict'


const data = {
	"blanks" : {
		"data_blank" : {
			"blakns_paint_gramm" : 590, //цена за грамм краски
			"blakns_price_min" : 330, //рабочее время печати за 1 мин
			"blakns_price_newspaper" : 12200,
			"blakns_price_offsetpaper" : 22000,
			"blakns_price_master" : 5400,
			"blanks_price_kalka" : 1900,
			"blanks_price_plastina" : 15000,
			"blanks_price_copy_plastin" : 7500,
			"blakns_paint_grammOver" : 110,
			"blakns_price_minOver" : 500,

		},
		"blanksOptions" : [
			{"Тип бумаги:" : ["Газетная", "Офсетная"]},
			{"Мастер:" : [1, 2]},
			{"Формат:" : ["A3", "A4", "A5", "A6", "A7"]},
			{"Красочность:" : ["1+0", "1+1", "2+0", "2+2"]},
		],
	},

	"books" : {
		"data_book": {
			"books_paint_gramm" : 590, //цена за грамм краски
			"books_price_min" : 330, //рабочее время печати за 1 мин
			"books_price_newspaper" : 12200,
			"books_price_offsetpaper" : 23000,
			"books_price_master" : 5400,
			"books_price_ISBN" : 70000,
			"books_price_konsul" : 50000,
			"books_verstka" : 400000,
			"books_korrektura" : 300000,
			"books_change_master1" : 9100,
			"books_change_master2" : 10500,
		},
		"bookOptions" : [
			{"Тип бумаги:" : ["Газетная", "Офсетная"]},
			{"Формат:" : ["A4", "A5"]},
		],	
	},

	"title" : [
		{"<b>Тип данных:</b>" : ["Книги", "Бланки",]},
	],			
};

class Page extends Component{
	constructor({element}) {
		super(element)
			
		this._title = new Title({
			element: this._element.querySelector('[class="bar_tittle"]'),
			options: this._getServerData(data).title
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
							options: this._getServerData(data).books.bookOptions,
							data: this._getServerData(data).books.data_book
							})
				break;
			case 'Бланки':
			this._removeDivContent()
				this._removeMenuBar();
				this._blanks = new Blanks ({
					element: this._element.querySelector('[class="bar_content"]'),
					options: this._getServerData(data).blanks.blanksOptions,
					data: this._getServerData(data).blanks.data_blank, //передаём как свойство дата, результат выполнения функции
				})
				break;
			case 'Газеты':		
			default:
				//код
				break;
		}
	}

	_getServerData(a) {
		let data = a
		return data
	}

}