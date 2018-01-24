let Tooltip = {
 	renderTooltip (element, data, target) {
	  element.innerHTML = `
      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Цена газетной бумаги (кг):</div> 
      <input class="blanks_change_data" id="input_blakns_price_newspaper"
       value="${data.blakns_price_newspaper}">
       <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Цена офсетной бумаги (кг):</div> 
      <input class="blanks_change_data" id="input_blakns_price_offsetpaper"
       value="${data.blakns_price_offsetpaper}">
       <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Цена краски (гр):</div>          
      <input class="blanks_change_data" id="input_blakns_paint_gramm"
       value="${data.blakns_paint_gramm}">
       <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Рабочее время печати (мин):</div>
      <input class="blanks_change_data" id="input_blakns_price_min"
       value="${data.blakns_price_min}">
       <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Цена мастера:</div>
      <input class="blanks_change_data" id="input_blakns_price_master"
       value="${data.blakns_price_master}">
       <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Калька:</div>
      <input class="blanks_change_data" id="input_blanks_price_kalka"
       value="${data.blanks_price_kalka}">
       <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Пластина:</div>
      <input class="blanks_change_data" id="input_blanks_price_plastina"
       value="${data.blanks_price_plastina}">
       <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Копировка пластин:</div>
      <input class="blanks_change_data" id="input_blanks_price_copy_plastin"
       value="${data.blanks_price_copy_plastin}">
       <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Цена краски при больших тиражах (гр):</div>
      <input class="blanks_change_data" id="input_blakns_paint_grammOver"
       value="${data.blakns_paint_grammOver}">
       <br>

      <div class"content_element_change_oftions" style="float: left; width: 200px">
      Рабочее время печати при больших тиражах (мин):</div>
      <input class="blanks_change_data" id="input_blakns_price_minOver"
       value="${data.blakns_price_minOver}">
       <br>

      <button type="button" class="btn btn-primary btn-sm" style="background: #007bff">применить</button>
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