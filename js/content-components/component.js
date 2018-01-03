'use strict'
//общий класс для всех компонентов страницы, от него наследую методы и свойства

class Component {
	constructor( element ) {
		this._element = element;
		this._input = document.querySelector('[class="all_input"]')
		this._blakns_paint_gramm = 590; //цена за грамм краски
		this._blakns_price_min = 330; //рабочее время печати за 1 мин
		this._blakns_price_newspaper = 12200;
		this._blakns_price_offsetpaper = 22000;
		this._inicialize()
	}


	_chooseSelect(options) {
	 	// перебор свой в исходных данных, для отрисовки селектов
	    let arr = options;
	    for (let i = 0; i < arr.length; i++) {
	      this._render(arr[i])
	    } 	 	// перебор свой в исходных данных, для отрисовки селектов
  	}

  	_render(obj) {
  		//создание нового блока, для каждого селекта
		let div = document.createElement('div');
		div.className = "contents";
	    this._element.appendChild(div);
	   	this._renderSelect(div, obj);   		//создание нового блока, для каждого селекта
	}

  	_renderSelect(elementInInner, obj) {
  		//отрисовка селектов
		let keys ;
	    let str = '';
	    for (let key in obj) {
	      keys = key;
	      obj[key].forEach( function(element, item) {
	        str += `<option>${element}</option>`
	      });
	    };
	    elementInInner.innerHTML = `
	      <div class="content_element"><span class="content_element_span">${keys}</span></div>
	      <select name="${keys}" class="${keys}">
	      ${str}
	      </select>`     		//отрисовка селектов
	}

	_inicialize() {
	 	//инициализация переменных
 		this._selectedOptionMaster = this._element.querySelector('[class="Мастер:"]');
 		this._painter = this._element.querySelector('[class="Красочность:"]');
 		this._blanks_paper = this._element.querySelector('[class="Тип бумаги:"]');
		this._blanks_formats = this._element.querySelector('[class="Формат:"]');	 	//инициализация переменных
 	}

 	_removeDivContent () {
		//удаление прошлых узлов, при выборе другого option в титульном селекте
		let rem = this._element.querySelectorAll('[class="contents"]')
		for (let i = 0; i < rem.length; i++) {
			rem[i].remove()
		}		//удаление прошлых узлов, при выборе другого option в титульном селекте
	}

	_removeDivResult () {
		//удаление в блоке результат, всех узлов
		let remove_result = this._element.querySelector('#res');
		let element = remove_result.firstElementChild;
		if (!element) {
			return
		}else {
			element.remove()
		} 		//удаление в блоке результат, всех узлов
	}

	_removeDivInfo () { // удаление блока информации
		let remove_info = this._element.querySelector('[class="menu_bar"]');
		let element = remove_info.firstElementChild;
		if (!element) {
			return
		}else {
			element.remove()
	}
  }

	_removeLastDiv (funA, funB, funcC) {
		funA();
		funB();
		funcC();
	}	

   _render_MenuBar() {
		this._element_menu_bar.innerHTML = `
	  <ul>
        <li><span data-tooltip="info">Информация</span></li>
        <li><span class="change_data">Изменить данные</a></li>
      </ul>
		` //отрисовка меню_бара
	}
}