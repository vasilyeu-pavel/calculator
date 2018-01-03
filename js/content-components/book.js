'use strict'

class Book extends Component {
	constructor ({element, options, element_menu_bar}) {
		super(element)
		this._options = options;
		this._element_menu_bar = element_menu_bar
    	this._showingInfoTooltip
		this._showingChangeTooltip
		this._render_MenuBar()

		this._chooseSelect(this._options);
	}
	

	_showInfoDiv (target) {
		      let tooltip = target.getAttribute('data-tooltip');
		      if (!tooltip) return;

		      let tooltipElem = document.createElement('div');
		      tooltipElem.className = 'tooltip';
		      tooltipElem.innerHTML = `
		      <b>нет данных</b>
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
		 <bНет данных</b> <br>
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