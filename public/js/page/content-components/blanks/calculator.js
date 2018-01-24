'use strict'
let calculator = {
	get (data, circulationData) {
		let input = document.querySelector('[class="all_input"]');
		let elemInner = document.querySelector('#res');
		  this._getCalculatResult(data, circulationData, input);
		    elemInner.innerHTML = `
			<table>	
			  <div class="tableHeader">
			    Результат <span class="drop-down">▼</span>
			  </div>
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
	},

	_getPaper (data, circulation) {
		//получение бумаги(исп. формат и тип)
		let blanks_paper = document.body.querySelector('[class="Тип бумаги:"]');
			if(blanks_paper.value === 'Газетная') {
				this._result_paper = circulation * 0.0066 * data.blakns_price_newspaper;
			 }
				else if(blanks_paper.value === 'Офсетная') {
					 this._result_paper = circulation * 0.01 * data.blakns_price_offsetpaper;	
			}
	}, 

	_getPaint(dataPaintGr, circulation) { //расчет краски
		let painter = document.body.querySelector('[class="Красочность:"]')
		  if (painter.value === "1+0") {
		  	this._result_paint = ( circulation * 1 * 1000/16000 ) * dataPaintGr
		  }else if (painter.value === "1+1") {
		  	this._result_paint = ( circulation * 2 * 1000/16000 ) * dataPaintGr
		  }else if (painter.value === "2+0") {
		  	alert('Красочность 2+0 доступно, только при тираже >= 2500 A3')
		  }else if (painter.value === "2+2") {
		  	alert('Красочность 2+2 доступно, только при тираже >= 2500 A3')
		  }
	},	  	

    _cutting(dataPriceMin, circulation) { //расчет резки
    	let blanks_formats = document.body.querySelector('[class="Формат:"]');
	    	if(blanks_formats.value !== "A3") {
			  this._result_cutting = circulation * 3 / 1000 * dataPriceMin  
	    	}else {
	    		this._result_cutting = 0;
	    	}
	},

	_printing_time (dataPriceMin, circulation) {
		 this._selectedOptionMaster = document.body.querySelector('[class="Мастер:"]')
		 if(this._selectedOptionMaster.value === '1') {
		 	 this._print_time = (((circulation * 1 * 20)/1000) + 11 * 1) * dataPriceMin
		 }else{
			this._print_time = (((circulation * 1 * 20)/1000) + 11 * 2) * dataPriceMin
		 } //расчёт время печати
	},
 
 	_circulationForA3 (circulationData, input) {
 		let blanks_formats = document.body.querySelector('[class="Формат:"]')

 		if (blanks_formats.value === "A3") {
 			circulationData = +input.value
 			return circulationData
 		}
 		else if(blanks_formats.value === "A4") {
 			circulationData = +input.value / 2
 			return circulationData
 		}
 		else if(blanks_formats.value === "A5") {
 			circulationData = +input.value / 4
 			return circulationData
 		}
 		else if(blanks_formats.value === "A6") {
 			circulationData = +input.value / 8
 			return circulationData
 		}
 		else if(blanks_formats.value === "A7") {
 			circulationData = +input.value / 16
 			return circulationData
 		}
 	},

 	_getCalculatResult (data, circulationData, input) {
 		 let painter = document.body.querySelector('[class="Красочность:"]');
 		 let circulation = this._circulationForA3(circulationData, input)

 		 if (circulation < 2500) {
		  this._getPaper(data, circulation);
		  this._getPaint(data.blakns_paint_gramm, circulation);
		  this._printing_time(data.blakns_price_min, circulation);
		  this._cutting(data.blakns_price_min, circulation);
		 	 
		  this.result = this._result_paint + this._print_time + this._result_cutting 
     	   + this._result_paper + this._selectedOptionMaster.value*data.blakns_price_master	
 		 }else {
 		 	let i = 1;
 		 	if (painter.value === "1+1" || painter.value ==="2+0") {
 		 		i = 2
 		 	}else if (painter.value ==="2+2") {
 		 		i = 4
 		 	}

 		 	this._getPaperLargeCirculation(data.blakns_price_newspaper, data.blakns_price_offsetpaper, circulation);
 		 	this._getPaintLargeCirculation(data.blakns_paint_grammOver, circulation, i);
 		 	this._printing_timeLargeCirculation(data.blakns_price_minOver, circulation, 
 		 	 data.blanks_price_plastina, data.blanks_price_copy_plastin,
			 data.blanks_price_kalka, i);

 		 	this._cuttingLargeCirculation(data.blakns_price_minOver, circulation, i);

 		 	this.result = this._result_paint + this._print_time + this._result_cutting 
     	      + this._result_paper + i * data.blanks_price_kalka + i *
     	      data.blanks_price_copy_plastin + i * data.blanks_price_plastina
 		 }	
	},

	_getPaperLargeCirculation(dataNewspaper, dataOffsetPaper, circulation) {
		let blanks_paper = document.body.querySelector('[class="Тип бумаги:"]');
		  if(blanks_paper.value === 'Газетная') {
				this._result_paper = (circulation + 100) * 0.0066 * dataNewspaper;
			 }
				else if(blanks_paper.value === 'Офсетная') {
					 this._result_paper = (circulation + 100) * 0.01 * dataOffsetPaper;	
			}
	},

	_getPaintLargeCirculation(blakns_paint_grammOver, circulation, i) {

		  	this._result_paint = ( circulation * i / 1000)*50 * blakns_paint_grammOver;
	},

	_printing_timeLargeCirculation(blakns_price_minOver, circulation, 
		blanks_price_plastina, blanks_price_copy_plastin,
		blanks_price_kalka, i){
			  this._print_time = (circulation * 1 / 1000 + 36 * i) * blakns_price_minOver 
    },

    _cuttingLargeCirculation(blakns_price_minOver, circulation) {
		let blanks_formats = document.body.querySelector('[class="Формат:"]');
	    	if(blanks_formats.value !== "A3") {
			  this._result_cutting = circulation * 3 / 1000 * blakns_price_minOver  
	    	}else {
	    		this._result_cutting = 0;
	    	}
    }

}

export default calculator;