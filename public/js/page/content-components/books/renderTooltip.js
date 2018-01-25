let Tooltip = {
	renderTooltip (element, data, target) {
		element.innerHTML = `
      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Цена газетной бумаги (кг):</div> 
      <input class="blanks_change_data" id="input_books_price_newspaper" 
      value="${data.books_price_newspaper}"> 
      <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Цена офсетной бумаги (кг):</div> 
      <input class="blanks_change_data" id="input_books_price_offsetpaper" 
      value="${data.books_price_offsetpaper}">
      <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Цена краски (гр):</div>          
      <input class="blanks_change_data" id="input_books_paint_gramm" 
      value="${data.books_paint_gramm}">
      <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Рабочее время печати (мин):</div>
      <input class="blanks_change_data" id="input_books_price_min" 
      value="${data.books_price_min}">
      <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Цена мастера:</div>
      <input class="blanks_change_data" id="input_books_price_master" 
      value="${data.books_price_master}">
      <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Цена ISBN:</div>
      <input class="blanks_change_data" id="input_books_price_ISBN" 
      value="${data.books_price_ISBN}">
      <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Консул. книжной палаты:</div>
      <input class="blanks_change_data" id="input_books_price_konsul" 
      value="${data.books_price_konsul}">
      <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Вёрстка:</div>
      <input class="blanks_change_data" id="input_books_verstka" 
      value="${data.books_verstka}">
      <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Корректура:</div>
      <input class="blanks_change_data" id="input_books_korrektura" 
      value="${data.books_korrektura}">
      <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Затраты на смену мастера:</div>
      <input class="blanks_change_data" id="input_books_change_master1" 
      value="${data.books_change_master1}">
      <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Доп. затраты (мастер):</div>
      <input class="blanks_change_data" id="input_books_change_master2" 
      value="${data.books_change_master2}">
      <br>
      
      <button type="button" class="btn btn-primary btn-sm" style="background: #007bff">
      применить</button>
		 `
      document.body.appendChild(element);

      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - element.offsetWidth) / 2;
      if (left < 0) left = 0; // не вылезать за левую границу окна

      let top = coords.top - element.offsetHeight - 5;
      if (top < 0) { // не вылезать за верхнюю границу окна
        top = coords.top + target.offsetHeight + 5;
      }

      element.style.left = left + 'px';
      element.style.top = top + 'px';
	}
}



export default Tooltip