'use strict'

class Blanks extends Component{
	constructor({ element, options, elemInnerRes, data}) {
    	super(element);
    	this._options = options

    	
		this._chooseSelect(this._options);

		let button = document.querySelector('#button');

		let menuBar = document.querySelector('[class="menu_bar"]');

		this._render_MenuBar(menuBar);

		let blakns_price_newspaper = data.blakns_price_newspaper;
		let blakns_price_offsetpaper = data.blakns_price_offsetpaper;
		let blakns_paint_gramm = data.blakns_paint_gramm;
		let blakns_price_min = data.blakns_price_min;
		let blakns_price_master = data.blakns_price_master;
		let blanks_price_kalka = data.blanks_price_kalka;
		let blanks_price_plastina = data.blanks_price_plastina;
		let blanks_price_copy_plastin = data.blanks_price_copy_plastin;
		let blakns_paint_grammOver = data.blakns_paint_grammOver;
		let blakns_price_minOver = data.blakns_price_minOver;

		this._input = document.querySelector('[class="all_input"]');
		let elemInner = document.querySelector('#res');

		let circulation //тираж

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
	              <input class="blanks_change_data" id="input_blakns_price_newspaper" value="${blakns_price_newspaper}"> <br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Цена офсетной бумаги (кг):</div> 
			      <input class="blanks_change_data" id="input_blakns_price_offsetpaper" value="${blakns_price_offsetpaper}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Цена краски (гр):</div>          
			      <input class="blanks_change_data" id="input_blakns_paint_gramm" value="${blakns_paint_gramm}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Рабочее время печати (мин):</div>
			      <input class="blanks_change_data" id="input_blakns_price_min" value="${blakns_price_min}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Цена мастера:</div>
			      <input class="blanks_change_data" id="input_blakns_price_master" value="${blakns_price_master}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Калька:</div>
			      <input class="blanks_change_data" id="input_blanks_price_kalka" value="${blanks_price_kalka}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Пластина:</div>
			      <input class="blanks_change_data" id="input_blanks_price_plastina" value="${blanks_price_plastina}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Копировка пластин:</div>
			      <input class="blanks_change_data" id="input_blanks_price_copy_plastin" value="${blanks_price_copy_plastin}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Цена краски при больших тиражах (гр):</div>
			      <input class="blanks_change_data" id="input_blakns_paint_grammOver" value="${blakns_paint_grammOver}"><br>
			      <div class"content_element_change_oftions" style="float: left; width: 200px">Рабочее время печати при больших тиражах (мин):</div>
			      <input class="blanks_change_data" id="input_blakns_price_minOver" value="${blakns_price_minOver}"><br>
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

		      let input_blakns_price_newspaper = document.querySelector('#input_blakns_price_newspaper');
		      let input_blakns_price_offsetpaper = document.querySelector('#input_blakns_price_offsetpaper');
		      let input_blakns_paint_gramm = document.querySelector('#input_blakns_paint_gramm');
		      let input_blakns_price_min = document.querySelector('#input_blakns_price_min');
		      let input_blakns_price_master = document.querySelector('#input_blakns_price_master');

				input_blakns_price_newspaper.oninput = () => {
					blakns_price_newspaper = +input_blakns_price_newspaper.value || 12200;
				}
				input_blakns_price_offsetpaper.oninput = () => {
					blakns_price_offsetpaper = +input_blakns_price_offsetpaper.value || 22000;
				}

				input_blakns_paint_gramm.oninput = () => {
					blakns_paint_gramm = +input_blakns_paint_gramm.value || 590;
				}

				input_blakns_price_min.oninput = () => {
					blakns_price_min = +input_blakns_price_min.value || 330;
				}

				input_blakns_price_master.oninput = () => {
					blakns_price_master = +input_blakns_price_master.value || 5400;
				}
				input_blanks_price_kalka.oninput = () => {
					blanks_price_kalka = +input_blanks_price_kalka.value || 1900;
				}
				input_blanks_price_plastina.oninput = () => {
					blanks_price_plastina = +input_blanks_price_plastina.value || 15000;
				}
				input_blanks_price_copy_plastin.oninput = () => {
					blanks_price_copy_plastin = +input_blanks_price_copy_plastin.value || 7500;
				}
				input_blakns_paint_grammOver.oninput = () => {
					blakns_paint_grammOver = +input_blakns_paint_grammOver.value || 110;
				}	
				input_blakns_price_minOver.oninput = () => {
					blakns_price_minOver = +input_blakns_price_minOver.value || 500;
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
	    		this._showResult(blakns_price_newspaper, blakns_price_offsetpaper, blakns_paint_gramm, blakns_price_min,
	    		 elemInner, circulation, blakns_price_master, blanks_price_kalka, blanks_price_plastina, blanks_price_copy_plastin,
	    		 blakns_paint_grammOver, blakns_price_minOver)
	    				this._showTableRow()
	    	});

	}

	_getPaper (dataNewspaper, dataOffsetPaper, circulation) {
		//получение бумаги(исп. формат и тип)
		let blanks_paper = this._element.querySelector('[class="Тип бумаги:"]');
			if(blanks_paper.value === 'Газетная') {
				this._result_paper = circulation * 0.0066 * dataNewspaper;
			 }
				else if(blanks_paper.value === 'Офсетная') {
					 this._result_paper = circulation * 0.01 * dataOffsetPaper;	
			}
		} 

	_getPaint(dataPaintGr, circulation) { //расчет краски
		let painter = this._element.querySelector('[class="Красочность:"]')
		  if (painter.value === "1+0") {
		  	this._result_paint = ( circulation * 1 * 1000/16000 ) * dataPaintGr
		  }else if (painter.value === "1+1") {
		  	this._result_paint = ( circulation * 2 * 1000/16000 ) * dataPaintGr
		  }else if (painter.value === "2+0") {
		  	alert('Красочность 2+0 доступно, только при тираже >= 2500 A3')
		  }else if (painter.value === "2+2") {
		  	alert('Красочность 2+2 доступно, только при тираже >= 2500 A3')
		  }
		 }	  	

    _cutting(dataPriceMin, circulation) { //расчет резки
    	let blanks_formats = this._element.querySelector('[class="Формат:"]');
	    	if(blanks_formats.value !== "A3") {
			  this._result_cutting = circulation * 3 / 1000 * dataPriceMin  
	    	}else {
	    		this._result_cutting = 0;
	    	}
		}

	_printing_time (dataPriceMin, circulation) {
		 this._selectedOptionMaster = this._element.querySelector('[class="Мастер:"]')
		 if(this._selectedOptionMaster.value === '1') {
		 	 this._print_time = (((circulation * 1 * 20)/1000) + 11 * 1) * dataPriceMin
		 }else{
			this._print_time = (((circulation * 1 * 20)/1000) + 11 * 2) * dataPriceMin
		 } //расчёт время печати
		}
 
 	_circulationForA3 (circulationData) {
 		let blanks_formats = this._element.querySelector('[class="Формат:"]')

 		if (blanks_formats.value === "A3") {
 			circulationData = +this._input.value
 			return circulationData
 		}
 		else if(blanks_formats.value === "A4") {
 			circulationData = +this._input.value / 2
 			return circulationData
 		}
 		else if(blanks_formats.value === "A5") {
 			circulationData = +this._input.value / 4
 			return circulationData
 		}
 		else if(blanks_formats.value === "A6") {
 			circulationData = +this._input.value / 8
 			return circulationData
 		}
 		else if(blanks_formats.value === "A7") {
 			circulationData = +this._input.value / 16
 			return circulationData
 		}
 	}

 	_getCalculatResult (dataNewspaper, dataOffsetPaper, dataPaintGr, dataPriceMin, circulationData, blakns_price_master,
 	 blanks_price_kalka, blanks_price_plastina, blanks_price_copy_plastin,
	    		 blakns_paint_grammOver, blakns_price_minOver) {
 		 let painter = this._element.querySelector('[class="Красочность:"]');
 		 let circulation = this._circulationForA3(circulationData)

 		 if (circulation < 2500) {
		  this._getPaper(dataNewspaper, dataOffsetPaper, circulation);
		  this._getPaint(dataPaintGr, circulation);
		  this._printing_time(dataPriceMin, circulation);
		  this._cutting(dataPriceMin, circulation);
		 	 
		  this.result = this._result_paint + this._print_time + this._result_cutting 
     	   + this._result_paper + this._selectedOptionMaster.value*blakns_price_master	
 		 }else {
 		 	let i = 1;
 		 	if (painter.value === "1+1" || painter.value ==="2+0") {
 		 		i = 2
 		 	}else if (painter.value ==="2+2") {
 		 		i = 4
 		 	}

 		 	this._getPaperLargeCirculation(dataNewspaper, dataOffsetPaper, circulation);
 		 	this._getPaintLargeCirculation(blakns_paint_grammOver, circulation, i);
 		 	this._printing_timeLargeCirculation(blakns_price_minOver, circulation, blanks_price_plastina, blanks_price_copy_plastin,
			 blanks_price_kalka, i);

 		 	this._cuttingLargeCirculation(blakns_price_minOver, circulation, i);

 		 	this.result = this._result_paint + this._print_time + this._result_cutting 
     	      + this._result_paper + i * blanks_price_kalka + i * blanks_price_copy_plastin + i * blanks_price_plastina
 		 }	
	}

	_showResult (dataNewspaper, dataOffsetPaper, dataPaintGr, dataPriceMin, elemInnerRes, 
		circulationData, blakns_price_master, blanks_price_kalka, blanks_price_plastina, blanks_price_copy_plastin,
	    		 blakns_paint_grammOver, blakns_price_minOver) {
		  this._getCalculatResult(dataNewspaper, dataOffsetPaper, dataPaintGr, dataPriceMin, 
		  	circulationData, blakns_price_master, blanks_price_kalka, blanks_price_plastina, blanks_price_copy_plastin,
	    		 blakns_paint_grammOver, blakns_price_minOver);
		    elemInnerRes.innerHTML = `
			<table>
			  <caption>
			    Результат <span class="drop-down">▼</span>
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
			    <td>Краска</td>
			    <td>${Math.round(this._result_paint)}</td>
			  </tr>
			  <tr>
			    <td>Время печати</td>
			    <td>${Math.round(this._print_time)}</td>
			  </tr>
			  <tr>
			    <td>Резка</td>
			    <td>${Math.round(this._result_cutting)}</td>
			  </tr>
			   <tr>
			    <td><b>Цена тиража</b></td>
			    <td><b>${Math.round(this.result)}</b></td>
			  </tr>
			</table>    ` //отрисовка результата
			let table = document.querySelector('tbody')
			table.firstElementChild.classList = "open";
			table.lastElementChild.classList = "open";
		}

	_getPaperLargeCirculation(dataNewspaper, dataOffsetPaper, circulation) {
		let blanks_paper = this._element.querySelector('[class="Тип бумаги:"]');
		  if(blanks_paper.value === 'Газетная') {
				this._result_paper = (circulation + 100) * 0.0066 * dataNewspaper;
			 }
				else if(blanks_paper.value === 'Офсетная') {
					 this._result_paper = (circulation + 100) * 0.01 * dataOffsetPaper;	
			}
	}
	_getPaintLargeCirculation(blakns_paint_grammOver, circulation, i) {

		  	this._result_paint = ( circulation * i / 1000)*50 * blakns_paint_grammOver;

	}
	_printing_timeLargeCirculation(blakns_price_minOver, circulation, blanks_price_plastina, blanks_price_copy_plastin,
		blanks_price_kalka, i){
			  this._print_time = (circulation * 1 / 1000 + 36 * i) * blakns_price_minOver 
   }
   _cuttingLargeCirculation(blakns_price_minOver, circulation) {
		let blanks_formats = this._element.querySelector('[class="Формат:"]');
	    	if(blanks_formats.value !== "A3") {
			  this._result_cutting = circulation * 3 / 1000 * blakns_price_minOver  
	    	}else {
	    		this._result_cutting = 0;
	    	}
   }
}



