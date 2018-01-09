'use strict'
import Component from './component.js'

export default class Book extends Component {
	constructor ({element, options}) {
		super(element)
		this._options = options;

		this._chooseSelect(this._options);

		let button = document.querySelector('#button')

		button.addEventListener('click', () => {
			alert('нет данных')
    		//this._showResult()
    	})

    	let menuBar = document.querySelector('[class="menu_bar"]')

		this._render_MenuBar(menuBar)

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
		              нет данных
		              <span class="blanks_change_data_exit" id="exit">применить</span>
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
		}


	}
	



