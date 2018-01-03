'use strict'

const blanksOptions = [
{"Тип бумаги:" : ["Газетная", "Офсетная"]},
{"Мастер:" : [1, 2]},
{"Формат:" : ["A3", "A4", "A5", "A6"]},
{"Красочность:" : ["1+0", "1+1"]},
];

const bookOptions = [
{"нет данных:" : ["-", "-"]},
{"нет данных:" : ["-", "-"]},
{"нет данных:" : ["-", "-"]},
];

const title = [
{"<b>Тип данных:</b>" : ["Книги", "Бланки",]}
];

class Page extends Component{
	constructor({element}) {
		super(element)

		this._getServerOptions()
			
		this._title = new Title({
			element: this._element.querySelector('[class="bar_tittle"]'),
			options: this._titleValue
		})

		this._title._select.addEventListener('change.title', (event) => { //слушаем событие внутри титульного select
			let order = event.detail
			this._filterTitleValue(order)
		})

		this._countResult = new CountResult ({
			element: this._element.querySelector('#buttonResult'),
		})

		this._all = this._element.querySelectorAll('[class="all"]')

	}

	_getServerOptions() { 
		//имитация отправки запроса к серверу и получение данных
		this._blanksOptions = blanksOptions, this._titleValue = title, this._bookOptions = bookOptions
	}

	_filterTitleValue(order) {
		//фильтрация на титульном селекте
		switch (order) {
			case 'Книги':
			 this._removeLastDiv (this._removeDivContent.bind(this),
			 this._removeDivResult.bind(this), 
			 this._removeDivInfo.bind(this)) ;
			this._showClassAll();
				this._book = new Book ({
					element: this._element.querySelector('[class="bar_content"]'),
							options: this._bookOptions,
							elemInnerRes: this._element.querySelector('#res'),
							button: this._element.querySelector('#button'),
							element_menu_bar: document.querySelector('[class="menu_bar"]'),
				})
				break;
			case 'Бланки':
				 this._removeLastDiv (this._removeDivContent.bind(this),
				 this._removeDivResult.bind(this),
				 this._removeDivInfo.bind(this));
				this._showClassAll();
				this._blanks = new Blanks ({
					element: this._element.querySelector('[class="bar_content"]'),
					options: this._blanksOptions,
					elemInnerRes: this._element.querySelector('#res'),
					button: this._element.querySelector('#button'),
					element_menu_bar: document.querySelector('[class="menu_bar"]'),
					button: this._element.querySelector('#button'),
				})
				break;
			case 'Газеты':		
			default:
				//код
				break;
		}
	}

	_showClassAll () {
		//показ блоков с классом "All"
		let all = this._all;
		for (let i = 0; i < all.length; i++) {
			all[i].className = "open"
		}
	}

}