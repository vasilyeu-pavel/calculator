'use strict'


const data = {
	"blanks" : {
		"data_blank" : {
			"blakns_paint_gramm" : 590, //цена за грамм краски
			"blakns_price_min" : 330, //рабочее время печати за 1 мин
			"blakns_price_newspaper" : 12200,
			"blakns_price_offsetpaper" : 22000,
		},
		"blanksOptions" : [
			{"Тип бумаги:" : ["Газетная", "Офсетная"]},
			{"Мастер:" : [1, 2]},
			{"Формат:" : ["A3", "A4", "A5", "A6", "A7"]},
			{"Красочность:" : ["1+0", "1+1"]},
		],
	},

	"books" : {
		"data_books": {
			"no data" : "no data",
		},
		"bookOptions" : [
			{"нет данных:" : ["-", "-"]},
			{"нет данных:" : ["-", "-"]},
			{"нет данных:" : ["-", "-"]},
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
							elemInnerRes: this._element.querySelector('#res'),
							})
				break;
			case 'Бланки':
			this._removeDivContent()
				this._removeMenuBar();
				this._blanks = new Blanks ({
					element: this._element.querySelector('[class="bar_content"]'),
					options: this._getServerData(data).blanks.blanksOptions,
					elemInnerRes: this._element.querySelector('#res'),
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