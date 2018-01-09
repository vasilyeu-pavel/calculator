'use strict'
//общий класс для всех компонентов страницы, от него наследую методы и свойства

class Component {
	constructor( element ) {
		this._element = element;
		this._initialization()
	}

    _renderComponentInputAndResult () {
	 		let div1 = document.createElement('div');
			div1.className = "contents";
		    this._element.appendChild(div1); 
		    div1.innerHTML = `
			       
            <div class="content_element"><span class="content_element_span">Тираж:<span> </div><input type="text" class="all_input" value="1" style="margin-bottom: 10px">
            <div id="buttonResult">
			<button id="button" style="margin-bottom: 10px">Посчитать</button>
            </div>
            <div name="result" id="res"></div>         
      
		    ` 		
	 }

    _chooseSelect(options) {
	 	// перебор свой в исходных данных, для отрисовки селектов
	    let arr = options;
	    for (let i = 0; i < arr.length; i++) {
	      this._render(arr[i])
	    }
	    this._renderComponentInputAndResult() 	 	// перебор свой в исходных данных, для отрисовки селектов
  	}

  	_render(obj) {
  		//создание нового блока, для каждого селекта
		let div = document.createElement('div');
		div.className = "contents";
	    this._element.appendChild(div);
	   	this._renderSelect(div, obj);
//создание нового блока, для каждого селекта
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
	      <select class="${keys}">
	      <option selected disabled>...</option>
	      ${str}
	      </select>
	      `     		//отрисовка селектов
	}

	_initialization() {
	 	//инициализация переменных
 		this._selectedOptionMaster = this._element.querySelector('[class="Мастер:"]');
 		this._painter = this._element.querySelector('[class="Красочность:"]');
 		this._blanks_paper = this._element.querySelector('[class="Тип бумаги:"]');
		this._blanks_formats = this._element.querySelector('[class="Формат:"]');	 	//инициализация переменных
 	}

 	_removeDivContent () {
		//удаление прошлых узлов, при выборе другого option в титульном селекте
		let bar_content = document.querySelector('[class="bar_content"]')
		let rem = bar_content.querySelectorAll('[class="contents"]')
		for (let i = 0; i < rem.length; i++) {
			rem[i].remove()
		}		//удаление прошлых узлов, при выборе другого option в титульном селекте
	}

	_removeMenuBar () {
		let menuBar = document.querySelector('[class="menu_bar"]')
		let element = menuBar.querySelector('ul')
		if (!element) {
			return
		}else {
			element.remove()
		}
	}

	_render_MenuBar(a) {
		a.innerHTML = `
	  
    	<img src="assets/img/settings.png" width="60px" height="46" data-tooltip="info">
      
		` //отрисовка меню_бара
	}
}