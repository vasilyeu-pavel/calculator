'use strict'

class Book extends Component {
	constructor ({element, options, data}) {
		super(element)
		this._options = options;

		this._chooseSelect(this._options);
		this._renderPageInput()

		let button = document.querySelector('#button')

    	let menuBar = document.querySelector('[class="menu_bar"]')

		this._render_MenuBar(menuBar)
		let elemInnerRes = document.querySelector('#res');

		let books_price_newspaper = data.books_price_newspaper;
		let books_price_offsetpaper = data.books_price_offsetpaper;
		let books_paint_gramm = data.books_paint_gramm;
		let books_price_min = data.books_price_min;
		let books_price_master = data.books_price_master;
		let books_price_ISBN = data.books_price_ISBN;
		let books_price_konsul = data.books_price_konsul;
		let books_price_verstka = data.books_verstka;
		let books_price_korrektura = data.books_korrektura;
		let books_change_master1 = data.books_change_master1
		let books_change_master2 = data.books_change_master2
		this._input_circulation = document.querySelector('[class="all_input"]');
		this._input_paper = document.querySelector('.inputPaper');
		let ciculationPaper


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////событие на отображение блока информации////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		    let showingTooltip;

		    menuBar.onmouseover = function(e) {
			 if (showingTooltip) {
					        document.body.removeChild(showingTooltip);
					        showingTooltip = null;
					      }
			      let target = e.target;

			      let tooltip = target.getAttribute('data-tooltip');
			      if (!tooltip) return;

			      let tooltipElem = document.createElement('div');
			      tooltipElem.className = 'tooltip';
			      tooltipElem.innerHTML = `
	              <div class"content_element_change_oftions" style="float: left; width: 200px">Цена газетной бумаги (кг):</div> 
	              <input class="blanks_change_data" id="input_books_price_newspaper" value="${books_price_newspaper}"> <br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Цена офсетной бумаги (кг):</div> 
			      <input class="blanks_change_data" id="input_books_price_offsetpaper" value="${books_price_offsetpaper}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Цена краски (гр):</div>          
			      <input class="blanks_change_data" id="input_books_paint_gramm" value="${books_paint_gramm}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Рабочее время печати (мин):</div>
			      <input class="blanks_change_data" id="input_books_price_min" value="${books_price_min}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Цена мастера:</div>
			      <input class="blanks_change_data" id="input_books_price_master" value="${books_price_master}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Цена ISBN:</div>
			      <input class="blanks_change_data" id="input_books_price_ISBN" value="${books_price_ISBN}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Консул. книжной палаты:</div>
			      <input class="blanks_change_data" id="input_books_price_konsul" value="${books_price_konsul}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Вёрстка:</div>
			      <input class="blanks_change_data" id="input_books_verstka" value="${books_price_verstka}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Корректура:</div>
			      <input class="blanks_change_data" id="input_books_korrektura" value="${books_price_korrektura}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Затраты на смену мастера:</div>
			      <input class="blanks_change_data" id="input_books_change_master1" value="${books_change_master1}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Доп. затраты (мастер):</div>
			      <input class="blanks_change_data" id="input_books_change_master2" value="${books_change_master2}"><br>
			      
			       <button class="blanks_change_data_exit" id="exit">применить</button>
					 `
			      document.body.appendChild(tooltipElem);

			      let coords = target.getBoundingClientRect();

			      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
			      if (left < 0) left = 0; // не вылезать за левую границу окна

			      let top = coords.top - tooltipElem.offsetHeight - 5;
			      if (top < 0) { // не вылезать за верхнюю границу окна
			        top = coords.top + target.offsetHeight + 5;
			      }

			      tooltipElem.style.left = left + 'px';
			      tooltipElem.style.top = top + 'px';

			      showingTooltip = tooltipElem;

				    let input_books_price_newspaper = document.querySelector('#input_books_price_newspaper');
			     	let input_books_price_offsetpaper = document.querySelector('#input_books_price_offsetpaper');
			        let input_books_paint_gramm = document.querySelector('#input_books_paint_gramm');
			        let input_books_price_min = document.querySelector('#input_books_price_min');
			        let input_books_price_master = document.querySelector('#input_books_price_master');
			        let input_books_price_ISBN = document.querySelector('#input_books_price_ISBN');
			        let input_books_price_konsul = document.querySelector('#input_books_price_konsul');
			        let input_books_verstka = document.querySelector('#input_books_verstka');
			        let input_books_korrektura = document.querySelector('#input_books_korrektura');
					let input_books_change_master1 = document.querySelector('#input_books_change_master1');
			        let input_books_change_master2 = document.querySelector('#input_books_change_master2');

					input_books_price_newspaper.oninput = () => {
						books_price_newspaper = +input_books_price_newspaper.value || 12200;
					}
					input_books_price_offsetpaper.oninput = () => {
						books_price_offsetpaper = +input_books_price_offsetpaper.value || 23000;
					}

					input_books_paint_gramm.oninput = () => {
						books_paint_gramm = +input_books_paint_gramm.value || 590;
					}

					input_books_price_min.oninput = () => {
						books_price_min = +input_books_price_min.value || 330;
					}

					input_books_price_master.oninput = () => {
						books_price_master = +input_books_price_master.value || 5400;
					}
					input_books_price_ISBN.oninput = () => {
						books_price_ISBN = +input_books_price_ISBN.value || 70000;
					}
					input_books_price_konsul.oninput = () => {
						books_price_konsul = +input_books_price_konsul.value || 50000;
					}
					input_books_verstka.oninput = () => {
						books_price_verstka = +input_books_verstka.value || 40000;
					}
					input_books_korrektura.oninput = () => {
						books_price_korrektura = +input_books_korrektura.value || 300000;
					}
					input_books_change_master1.oninput = () => {
						books_change_master1 = +input_books_change_master1.value || 9100;
					}
					input_books_change_master2.oninput = () => {
						books_change_master2 = +input_books_change_master2.value || 10500;
					}
				      
				  let exit = document.querySelector('[class="blanks_change_data_exit"]')
					    if (exit) { 
					    	 exit.onclick = function(e) {
					    		if (showingTooltip) {
					        document.body.removeChild(showingTooltip);
					        showingTooltip = null;
					      }
					    };
					 }
		    };
//////////////////////////////////////конец события//////////////////////////////////////////////////////////////////////

		button.addEventListener('click', () => {
	    		this._showResult(books_price_newspaper, books_price_offsetpaper, books_paint_gramm, books_price_min,
	    		 books_price_master, books_price_ISBN, books_price_konsul, books_price_verstka, 
	    		 books_price_korrektura, books_change_master1, books_change_master2, elemInnerRes)
	    	});
		}

		_renderPageInput() {
			let menuBar = document.querySelector('.bar_content')
			
			let div = document.createElement('div');
			div.className = "contents";
			div.innerHTML = `
			<div class="content_element"><span class="content_element_span">Объём страниц:<span> </div>
			<input type="text" class="inputPaper" value="1">
			`
		    menuBar.insertBefore(div, menuBar.firstChild.nextSibling.nextSibling);
		}

		_circulationForA3Paper(ciculationPaper) {
		 let books_formats = this._element.querySelector('[class="Формат:"]');
		 if (books_formats.value === "A4") {
		 	ciculationPaper = +this._input_paper.value / 4
		  	return ciculationPaper
		  }else if (books_formats.value === "A5") {
		 	ciculationPaper = +this._input_paper.value / 8
		 	return ciculationPaper
		  }

		}

		_getPaper(dataPaper, dataNewspaper, dataOffsetPaper) {
			let blanks_paper = document.querySelector('[class="Тип бумаги:"]');
			if (blanks_paper.value === "Газетная") {
				this._result_paper = dataPaper * +this._input_circulation.value * 0.0066 * dataNewspaper + (15 * dataPaper * 2)
				;
			} else {
				this._result_paper = dataPaper * +this._input_circulation.value * 0.01 * dataOffsetPaper + (15 * dataPaper * 2)
			}
		}

		_getMaster(dataPaper, books_price_master) {
			this._result_master = dataPaper * 2 * books_price_master
		}

		_getPaint(dataPaper, books_paint_gramm) {
			this._result_paint = (dataPaper * +this._input_circulation.value * 2 * 1000/16000) * books_paint_gramm
		}

		_getTimePainting(dataPaper, books_price_master, books_price_min) {
		    this._result_timePainting = (dataPaper * +this._input_circulation.value * 20/1000 + 11 *
			(dataPaper * 2)) * books_price_min
		}

		_getCover() {
			this._result_cover = 4500 * +this._input_circulation.value / 2
		}

		_getCuttingForA4 (dataPaper, books_price_min) {
			this._result_CuttingForA4 = dataPaper * +this._input_circulation.value * 6 / 1000 * books_price_min
		}

		_getCompilation(books_price_min) {
			this._result_compilation = 26 * +this._result_CuttingForA4 / 1000 * 1.2 * books_price_min
		}

		_getCuttingIn2parts(books_price_min) {
		 let formats = document.querySelector('[class="Формат:"]');
		  if (formats.value === "A4") {
		  	this._CuttingIn2parts = 0
		  } else {
		  	this._CuttingIn2parts = +this._input_circulation.value * 29/100 * books_price_min
		  }
	
		}

		_checkSheetsForMarriage (dataPaper, books_price_min) {
			//провека листов на брак
			this._result_checkSheetsForMarriage = dataPaper * +this._input_circulation.value * 0.02 * books_price_min
		}

		_clogging(books_price_min) {
			//забивание скоб
			this._result_clogging = 105 * (+this._input_circulation.value / 100) * books_price_min
		}

		_sewing (books_price_min) {
			//шитьё
			this._result_sewing = 105 * (+this._input_circulation.value / 1000) * books_price_min
		}

		_cutting(books_price_min) {
			this._result_cutting = 0.8 * +this._input_circulation.value * books_price_min
		}

		_getResult(books_price_newspaper, books_price_offsetpaper, books_paint_gramm, books_price_min,
	    books_price_master, books_price_ISBN, books_price_konsul, books_price_verstka, 
	    books_price_korrektura, books_change_master1, books_change_master2, elemInnerRes, ciculationPaper) {

	    	let dataPaper = this._circulationForA3Paper(ciculationPaper);
	    	this._getPaper(dataPaper, books_price_newspaper, books_price_offsetpaper);
	    	this._getMaster(dataPaper, books_price_master);
	    	this._getPaint(dataPaper, books_paint_gramm);
	    	this._getTimePainting(dataPaper, books_price_master, books_price_min);
	    	this._getCover();
	    	this._getCuttingForA4 (dataPaper, books_price_min);
	    	this._getCompilation(books_price_min);
	    	this._getCuttingIn2parts(books_price_min);
	    	this._checkSheetsForMarriage (dataPaper, books_price_min);
	    	this._clogging(books_price_min);
	    	this._sewing (books_price_min);
	    	this._cutting(books_price_min);

	    	let result = this._result_paper + this._result_master + this._result_paint + this._result_timePainting + 
	    	 this._result_cover + this._result_CuttingForA4 + this._result_compilation + this._CuttingIn2parts + 
	    	 this._result_checkSheetsForMarriage + this._result_clogging + this._result_sewing + this._result_cutting +
	    	 books_change_master1 + books_change_master2 + books_price_ISBN + books_price_konsul + books_price_verstka +
	    	 books_price_korrektura

	    	 return result
		}

		_showResult(books_price_newspaper, books_price_offsetpaper, books_paint_gramm, books_price_min,
	     books_price_master, books_price_ISBN, books_price_konsul, books_price_verstka, 
	     books_price_korrektura, books_change_master1, books_change_master2, elemInnerRes, ciculationPaper) {
	     let master = document.querySelector('[class="Мастер:"]');

	     let dataPaper = this._circulationForA3Paper(ciculationPaper);
		 let result = this._getResult(books_price_newspaper, books_price_offsetpaper, books_paint_gramm, books_price_min,
	     books_price_master, books_price_ISBN, books_price_konsul, books_price_verstka, 
	     books_price_korrektura, books_change_master1, books_change_master2, elemInnerRes, ciculationPaper)

			elemInnerRes.innerHTML = `
			<table>
			  <caption>
			    Результат
			  </caption>
			  <tr>
			    <th>Наименование операции</th>
			    <th>Цена, руб.</th>
			  </tr>
			    <tr>
			    <td>Бумага</td>
			    <td>${Math.round(this._result_paper)}</td>
			  </tr>
			  <tr>
			    <td>Мастер</td>
			    <td>${this._result_master}</td>
			  </tr>
			  <tr>
			    <td>Количество мастеров</td>
			    <td>${dataPaper * 2}</td>
			  </tr>
			  <tr>
			    <td>Краска</td>
			    <td>${Math.round(this._result_paint)}</td>
			  </tr>
			  <tr>
			    <td>Время печати</td>
			    <td>${Math.round(this._result_timePainting)}</td>
			  </tr>
			  <tr>
			    <td>Обложка</td>
			    <td>${Math.round(this._result_cover)}</td>
			  </tr>
			    <tr>
			    <td>Резка на А4</td>
			    <td>${Math.round(this._result_CuttingForA4)}</td>
			  </tr>
			   <tr>
			    <td>Подборка</td>
			    <td>${Math.round(this._result_compilation)}</td>
			  </tr>
			    <td>Резка блока на 2-е части</td>
			    <td>${Math.round(this._CuttingIn2parts)}</td>
			  </tr>
			   <tr>
			    <td>Проверка листов на брак</td>
			    <td>${Math.round(this._result_checkSheetsForMarriage)}</td>
			  </tr>
			    <td>Забивание скоб</td>
			    <td>${Math.round(this._result_clogging)}</td>
			  </tr>
			   <tr>
			    <td>Шитьё</td>
			    <td>${Math.round(this._result_sewing)}</td>
			  </tr>		
			  	<tr>
			    <td>Резка</td>
			    <td>${Math.round(this._result_cutting)}</td>
			  </tr>		  			  
			    <td><b>Цена тиража</b></td>
			    <td><b>${Math.round(result)}</b></td>
			  </tr>
			</table>    
			` //отрисовка результата
			
		}


	}
	



