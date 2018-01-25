'use strict'
let calculator = {
	get(data, elemInnerRes, ciculationPaper) {
	 let master = document.querySelector('[class="Мастер:"]');

	 let input_circulation = document.querySelector('[class="all_input"]');
	 let input_paper = document.querySelector('.inputPaper');

	 let dataPaper = this._circulationForA3Paper(ciculationPaper, input_paper);
	 let result = this._getResult(data, elemInnerRes, ciculationPaper, input_circulation, input_paper)

		elemInnerRes.innerHTML = `
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
		let table = document.querySelector('tbody')
		table.firstElementChild.classList = "open";
		table.lastElementChild.classList = "open";			
	},

	_circulationForA3Paper(ciculationPaper, input_paper) {
	 let books_formats = document.querySelector('[class="Формат:"]');
	 if (books_formats.value === "A4") {
	 	ciculationPaper = +input_paper.value / 4
	  	return ciculationPaper
	  }else if (books_formats.value === "A5") {
	 	ciculationPaper = +input_paper.value / 8
	 	return ciculationPaper
	  }
	},

	_getPaper(dataPaper, dataNewspaper, dataOffsetPaper, input_circulation) {
		let blanks_paper = document.querySelector('[class="Тип бумаги:"]');
		if (blanks_paper.value === "Газетная") {
			this._result_paper = dataPaper * +input_circulation.value * 0.0066 * dataNewspaper + (15 * dataPaper * 2)
			;
		} else {
			this._result_paper = dataPaper * +input_circulation.value * 0.01 * dataOffsetPaper + (15 * dataPaper * 2)
		}
	},

	_getMaster(dataPaper, books_price_master) {
		
		this._result_master = dataPaper * 2 * books_price_master
	},

	_getPaint(dataPaper, books_paint_gramm, input_circulation) {

		this._result_paint = (dataPaper * +input_circulation.value * 2 * 1000/16000) * books_paint_gramm
	},

	_getTimePainting(dataPaper, books_price_master, books_price_min, input_circulation) {
	    this._result_timePainting = (dataPaper * +input_circulation.value * 20/1000 + 11 *
		(dataPaper * 2)) * books_price_min
	},

	_getCover(input_circulation) {

		this._result_cover = 4500 * +input_circulation.value / 2
	},

	_getCuttingForA4 (dataPaper, books_price_min, input_circulation) {

		this._result_CuttingForA4 = dataPaper * +input_circulation.value * 6 / 1000 * books_price_min
	},

	_getCompilation(books_price_min) {

		this._result_compilation = 26 * +this._result_CuttingForA4 / 1000 * 1.2 * books_price_min
	},

	_getCuttingIn2parts(books_price_min, input_circulation) {
	 let formats = document.querySelector('[class="Формат:"]');
	  if (formats.value === "A4") {
	  	this._CuttingIn2parts = 0
	  } else {
	  	this._CuttingIn2parts = +input_circulation.value * 29/100 * books_price_min
	  }

	},

	_checkSheetsForMarriage (dataPaper, books_price_min, input_circulation) {
		//провека листов на брак
		this._result_checkSheetsForMarriage = dataPaper * +input_circulation.value * 0.02 * books_price_min
	},

	_clogging(books_price_min,input_circulation) {
		//забивание скоб
		this._result_clogging = 105 * (+input_circulation.value / 100) * books_price_min
	},

	_sewing (books_price_min, input_circulation) {
		//шитьё
		this._result_sewing = 105 * (+input_circulation.value / 1000) * books_price_min
	},

	_cutting(books_price_min, input_circulation) {

		this._result_cutting = 0.8 * +input_circulation.value * books_price_min
	},

	_getResult(data, elemInnerRes, ciculationPaper, input_circulation, input_paper) {

		let dataPaper = this._circulationForA3Paper(ciculationPaper, input_paper);
		this._getPaper(dataPaper, data.books_price_newspaper, 
		 data.books_price_offsetpaper, input_circulation);
		this._getMaster(dataPaper, data.books_price_master);
		this._getPaint(dataPaper, data.books_paint_gramm, input_circulation);
		this._getTimePainting(dataPaper, data.books_price_master,
		 data.books_price_min, input_circulation);
		this._getCover(input_circulation);
		this._getCuttingForA4 (dataPaper, data.books_price_min, input_circulation);
		this._getCompilation(data.books_price_min);
		this._getCuttingIn2parts(data.books_price_min, input_circulation);
		this._checkSheetsForMarriage (dataPaper, data.books_price_min, input_circulation);
		this._clogging(data.books_price_min, input_circulation);
		this._sewing (data.books_price_min, input_circulation);
		this._cutting(data.books_price_min, input_circulation);

		let result = 
		 this._result_paper + this._result_master + this._result_paint + this._result_timePainting +
		 this._result_cover + this._result_CuttingForA4 + this._result_compilation + 
		 this._CuttingIn2parts + this._result_checkSheetsForMarriage + this._result_clogging + this._result_sewing +
		 this._result_cutting + data.books_change_master1 + data.books_change_master2 + data.books_price_ISBN + 
		 data.books_price_konsul + data.books_verstka + data.books_korrektura

		 return result
	},
}

export default calculator