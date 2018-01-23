'use strict'

const HttpService = { //метод для получения данных от сервера
 get(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    console.log('request was sent');
    xhr.onload = () => {
      let data = JSON.parse(xhr.responseText);
      callback(data)
    };
  },

  post(url) { //метод для отправки данных на сервер
  	var xhr = new XMLHttpRequest();
	var json = JSON.stringify({
		blakns_paint_gramm : 590, 
		blakns_price_min : 330, 
		blakns_price_newspaper : 12200,
		blakns_price_offsetpaper : 22000,
		blakns_price_master : 5400,
	    blanks_price_kalka : 1900,
		blanks_price_plastina : 15000,
		blanks_price_copy_plastin : 7500,
		blakns_paint_grammOver : 110,
		blakns_price_minOver : 500,
	});

	xhr.open("POST", url, true)
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

	xhr.send(json);
	}
};

export default HttpService;