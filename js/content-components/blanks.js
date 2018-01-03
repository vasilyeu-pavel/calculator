'use strict'

class Blanks extends Component{
	constructor({ element, options, elemInnerRes, button, element_menu_bar }) {
    	super(element);
    	this._element = element
    	this._options = options;
    	this._elemInnerRes = elemInnerRes;
    	this._button = button
    	this._element_menu_bar = element_menu_bar
    	this._showingInfoTooltip
		this._showingChangeTooltip

		this._element_menu_bar.addEventListener('mouseover', (e) => { //событие на всплывающее меню (меню информации)
			 this._showInfoOrChange(e)
		})

		this._element_menu_bar.addEventListener('mouseout', () => { //удаление блока информации при увода курсора мыши
			if (this._showingInfoTooltip) {
		        document.body.removeChild(this._showingInfoTooltip);
		        this._showingInfoTooltip = null;
      			}
      		})

    	this._render_MenuBar()
		this._chooseSelect(this._options);


		this._button.addEventListener('click', () => {
    		this._showResult()
    	})

	}


	_getPaper () {
		//получение бумаги(исп. формат и тип)
		this._blanks_paper = this._element.querySelector('[class="Тип бумаги:"]');
		this._blanks_formats = this._element.querySelector('[class="Формат:"]');

			if(this._blanks_paper.value === 'Газетная' && this._blanks_formats.value === 'A3') {
				this._result_paper = +this._input.value * 0.0066 * this._blakns_price_newspaper;
			 }
				else if(this._blanks_paper.value === 'Офсетная' && this._blanks_formats.value === 'A3') {
					 this._result_paper = +this._input.value * 0.01 * this._blakns_price_offsetpaper;	
			}
		} // расчёт

	_getPaint() { //расчет краски
		this._painter = this._element.querySelector('[class="Красочность:"]')
		  if (this._painter.value === "1+0") {
		  	this._result_paint = ( +this._input.value * 1 * 1000/16000 ) * this._blakns_paint_gramm
		  }else {
		  	this._result_paint = ( +this._input.value * 2 * 1000/16000 ) * this._blakns_paint_gramm
		     }
		  	}

    _cutting() { //расчет резки
		  this._result_cutting = +this._input.value * 3 / 1000 * this._blakns_price_min  
		}

	_printing_time () {
		 this._selectedOptionMaster = this._element.querySelector('[class="Мастер:"]')
		 if(this._selectedOptionMaster.value === '1') {
		 	 this._print_time = (((+this._input.value * 1 * 20)/1000) + 11 * 1) * this._blakns_price_min
		 }else{
			this._print_time = (((+this._input.value * 1 * 20)/1000) + 11 * 2) * this._blakns_price_min
		 } //расчёт время печати
		}
 
 	_getCalculatResult () {
		 this._getPaper();
		 this._getPaint();
		 this._printing_time();
		 this._cutting();
		 this.result = this._result_paint + this._print_time + this._result_cutting + this._result_paper + this._selectedOptionMaster.value*5400 // получения конечной суммы
		}

	_showResult () {
		  this._getCalculatResult();
		    this._elemInnerRes.innerHTML = `
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
			    <td>Мастер * 5400 рублей</td>
			    <td>${this._selectedOptionMaster.value}</td>
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
		}	
	
	_render_MenuBar() {
		//отрисовка меню_бара
		this._element_menu_bar.innerHTML = `
	  <ul>
        <li><span data-tooltip="info">Информация</span></li>
        <li><span class="change_data">Изменить данные</a></li>
      </ul>
		` //отрисовка меню_бара
	}

	_showInfoDiv (target) {
		      let tooltip = target.getAttribute('data-tooltip');
		      if (!tooltip) return;

		      let tooltipElem = document.createElement('div');
		      tooltipElem.className = 'tooltip';
		      tooltipElem.innerHTML = `
		      <b>Бланки: </b> <br>
		      Цена газетной бумаги (кг): ${this._blakns_price_newspaper} р. <br>
		      Цена офсетной бумаги (кг): ${this._blakns_price_offsetpaper} р. <br>
		      Цена краски (гр): ${this._blakns_paint_gramm} р. <br>
		      Рабочее время печати (мин): ${this._blakns_price_min} р. <br>
		      `;
		      document.body.appendChild(tooltipElem);

		      let coords = target.getBoundingClientRect();

		      let left = coords.left // не вылезать за левую границу елемента

		      let top = coords.top - tooltipElem.offsetHeight - 5;
		      if (top < 0) { // не вылезать за верхнюю границу окна
		        top = coords.top + target.offsetHeight + 5;
		      }

		      tooltipElem.style.left = left + 'px';
		      tooltipElem.style.top = top + 'px';

		      this._showingInfoTooltip = tooltipElem;  //добавление блока информации
	}

	_showChangeDiv (target) {	

			if (this._showingChangeTooltip) { //удаление при повторном наведении
		        document.body.removeChild(this._showingChangeTooltip);
		        this._showingChangeTooltip = null;
		    }

			 let prover = document.querySelector('#tooltip.change'); //создание блока, если его нет

			 let tooltipElem = document.createElement('div');
			 tooltipElem.className = 'tooltip';
			 tooltipElem.setAttribute('id', 'tooltip_change');
			 this._showChangeOptions(tooltipElem);

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

		      this._showingChangeTooltip = tooltipElem;//добавление блока изменения данных

	}

	_showInfoOrChange(event) {
		if (event.target.closest("[data-tooltip]")) {
			 let target = event.target
			this._showInfoDiv(target)
		}else if (event.target.closest('.change_data')) {
			//показ блока изменения данных
			let target = event.target
			this._showChangeDiv(target)

			this._changeOptions()

			console.log(this)

			this._exit = document.querySelector('[class="blanks_change_data_exit"]')
			//удаление блока изменения данных при нажатии на кнопку "закрыть"
			this._exit.addEventListener('click', (e) => {
				if (this._showingChangeTooltip) {
		        document.body.removeChild(this._showingChangeTooltip);
		        this._showingChangeTooltip = null;
      			}			
		})
		}//показ блока информации
	}

	_showChangeOptions (element) {

		element.innerHTML = `
		 <b>Бланки: </b> <br>
              <div class"content_element_change_oftions" style="float: left; width: 190px">Цена газетной бумаги (кг):</div> <input class="blanks_change_data" id="input_blakns_price_newspaper" value="${this._blakns_price_newspaper}"> <br>
		      <div class"content_element_change_oftions" style="float: left; width: 190px">Цена офсетной бумаги (кг):</div> <input class="blanks_change_data" id="input_blakns_price_offsetpaper" value="${this._blakns_price_offsetpaper}"><br>
		      <div class"content_element_change_oftions" style="float: left; width: 190px">Цена краски (гр):</div>          <input class="blanks_change_data" id="input_blakns_paint_gramm" value="${this._blakns_paint_gramm}"><br>
		      <div class"content_element_change_oftions" style="float: left; width: 190px">Рабочее время печати (мин):</div><input class="blanks_change_data" id="input_blakns_price_min" value="${this._blakns_price_min}"><br><br>
		      <span class="blanks_change_data_exit" id="exit">применить</span>
		      `;//отрисовка ввода опций
	}

	_changeOptions() {
		let newspaperData = document.querySelector('#input_blakns_price_newspaper');
		let ofsetpaperData = document.querySelector('#input_blakns_price_offsetpaper');
		let paintGrData = document.querySelector('#input_blakns_paint_gramm');
		let priceMinData = document.querySelector('#input_blakns_price_min');

		newspaperData.oninput = () => {
			this._blakns_price_newspaper = +newspaperData.value || 12200;
		}

		ofsetpaperData.oninput = () => {
			this._blakns_price_offsetpaper = +ofsetpaperData.value || 22000;
		}

		paintGrData.oninput = () => {
			this._blakns_paint_gramm = +paintGrData.value || 590;
		}

		priceMinData.oninput = () => {
			this._blakns_price_min = +priceMinData.value || 330;
		}//слушать событие инпутов внутри блока изменения данных и перезаписывать свойства
	}
}


