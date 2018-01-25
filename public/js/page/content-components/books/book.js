'use strict'
import Component from '../component.js';
import httpService from '../httpService/httpService.js';
import calculator from './calculator.js';
import Tooltip from './renderTooltip.js';

export default class Book extends Component {
	constructor ({element, options}) {
		super(element)
		this._options = options;

		this._chooseSelect(this._options);
		this._renderPageInput()

		let button = document.querySelector('#button')

    	let menuBar = document.querySelector('[class="menu_bar"]')

		this._render_MenuBar(menuBar)
		let elemInnerRes = document.querySelector('#res');
	
		let ciculationPaper

		let self = this

		let showingTooltip; //событие на отображение блока информации
		   httpService.get('dataBooks').then(function (data) {
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
		      let booksData = data

		      let dataForRequest = self._changeDataValue(booksData)

				  let exit = document.querySelector('[class="btn btn-primary btn-sm"]')
				    if (exit) { 
				    	 exit.onclick = function(e) {
						    httpService.post('dataBooks', dataForRequest).then(function (text) {
				    	 	 console.log(text);
				    	 	})
				    		if (showingTooltip) {
				        document.body.removeChild(showingTooltip);
				        showingTooltip = null;
				      		}
				    };
				}
		    };
		  })

		button.addEventListener('click', () => {
			httpService.get('dataBooks').then(function (data) {
		 	 calculator.get(data, elemInnerRes, ciculationPaper);
		 	 self._showTableRow();
			})
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
		_changeDataValue(booksData) {
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
				booksData.books_price_newspaper = +input_books_price_newspaper.value || 12200;
			}
			input_books_price_offsetpaper.oninput = () => {
				booksData.books_price_offsetpaper = +input_books_price_offsetpaper.value || 23000;
			}

			input_books_paint_gramm.oninput = () => {
				booksData.books_paint_gramm = +input_books_paint_gramm.value || 590;
			}

			input_books_price_min.oninput = () => {
				booksData.books_price_min = +input_books_price_min.value || 330;
			}

			input_books_price_master.oninput = () => {
				booksData.books_price_master = +input_books_price_master.value || 5400;
			}
			input_books_price_ISBN.oninput = () => {
				booksData.books_price_ISBN = +input_books_price_ISBN.value || 70000;
			}
			input_books_price_konsul.oninput = () => {
				booksData.books_price_konsul = +input_books_price_konsul.value || 50000;
			}
			input_books_verstka.oninput = () => {
				booksData.books_price_verstka = +input_books_verstka.value || 40000;
			}
			input_books_korrektura.oninput = () => {
				booksData.books_price_korrektura = +input_books_korrektura.value || 300000;
			}
			input_books_change_master1.oninput = () => {
				booksData.books_change_master1 = +input_books_change_master1.value || 9100;
			}
			input_books_change_master2.oninput = () => {
				booksData.books_change_master2 = +input_books_change_master2.value || 10500;
			}
			
			let dataForRequest = JSON.stringify(booksData);

			return dataForRequest
		}

}
	



