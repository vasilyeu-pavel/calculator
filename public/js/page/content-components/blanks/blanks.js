'use strict'
import Component from '../component.js'
import httpService from './httpService.js'
import calculator from './calculator.js'
import Tooltip from './renderTooltip.js'

export default class Blanks extends Component{
	constructor({ element, options, elemInnerRes, data}) {
    	super(element);
    	this._options = options

		this._chooseSelect(this._options);

		let button = document.querySelector('#button');

		let menuBar = document.querySelector('[class="menu_bar"]');

		this._render_MenuBar(menuBar);

		let circulation //тираж

		let self = this
///////////////////////////событие на отображение блока информации////////////////////////////////////////////////////
		let showingTooltip;

		httpService.get('dataBlanks').then(function (data) {
		    menuBar.onmouseover = function(e) {
				    if (showingTooltip) {
				        document.body.removeChild(showingTooltip);
				        showingTooltip = null;
				      }

		      let target = e.target;

		      let tooltip = target.getAttribute('data-tooltip');
		      if (!tooltip) return;

		      let tooltipElem = document.createElement('div');
		      tooltipElem.className = 'tooltips';

			  Tooltip.renderTooltip(tooltipElem, data, target)

		      showingTooltip = tooltipElem;

		      let input_blakns_price_newspaper = document.querySelector('#input_blakns_price_newspaper');
		      let input_blakns_price_offsetpaper = document.querySelector('#input_blakns_price_offsetpaper');
		      let input_blakns_paint_gramm = document.querySelector('#input_blakns_paint_gramm');
		      let input_blakns_price_min = document.querySelector('#input_blakns_price_min');
		      let input_blakns_price_master = document.querySelector('#input_blakns_price_master');
		      let test = data

				input_blakns_price_newspaper.oninput = () => {
					test.blakns_price_newspaper = +input_blakns_price_newspaper.value || 12200;
				}
				input_blakns_price_offsetpaper.oninput = () => {
					test.blakns_price_offsetpaper = +input_blakns_price_offsetpaper.value || 22000;
				}

				input_blakns_paint_gramm.oninput = () => {
					test.blakns_paint_gramm = +input_blakns_paint_gramm.value || 590;
				}

				input_blakns_price_min.oninput = () => {
					test.blakns_price_min = +input_blakns_price_min.value || 330;
				}
				
				input_blakns_price_master.oninput = () => {
					test.blakns_price_master = +input_blakns_price_master.value || 5400;
				}
				input_blanks_price_kalka.oninput = () => {
					test.blanks_price_kalka = +input_blanks_price_kalka.value || 1900;
				}
				input_blanks_price_plastina.oninput = () => {
					test.blanks_price_plastina = +input_blanks_price_plastina.value || 15000;
				}
				input_blanks_price_copy_plastin.oninput = () => {
					test.blanks_price_copy_plastin = +input_blanks_price_copy_plastin.value || 7500;
				}
				input_blakns_paint_grammOver.oninput = () => {
					test.blakns_paint_grammOver = +input_blakns_paint_grammOver.value || 110;
				}	
				input_blakns_price_minOver.oninput = () => {
					test.blakns_price_minOver1 = +input_blakns_price_minOver.value || 500;
				}

				let dataForRequest = JSON.stringify(test);		  

			  let exit = document.querySelector('[class="btn btn-primary btn-sm"]')
				    if (exit) { 
				    	 exit.onclick = function(e) {
				    	 	httpService.post('dataBlanks', dataForRequest).then(function (text) {
				    	 	 console.log(text);
				    	 	})
				    		if (showingTooltip) {
				        document.body.removeChild(showingTooltip);
				        showingTooltip = null;
				      }
				    };
				 }
		    }; })
//////////////////////////////////////конец события//////////////////////////////////////////////////////////////////////
		button.addEventListener('click', () => {
			httpService.get('dataBlanks').then(function (data) {
		 	 calculator.get(data, circulation);
		 	 self._showTableRow();
			})
	    });
	}
}



