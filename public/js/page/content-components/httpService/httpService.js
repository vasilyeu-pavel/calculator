'use strict'

const HttpService = { //метод для получения данных от сервера
 get(url) {
 	 return new Promise((resolve, reject) => {
	    let xhr = new XMLHttpRequest();
	    xhr.open('GET',url , true);
	    xhr.send();
	    xhr.onload = () => {
		      let data = JSON.parse(xhr.responseText);
		      console.log(data);
		      resolve(data)
    	};
	})
  },

  post(url, json) { //метод для отправки данных на сервер
 	 return new Promise((resolve, reject) => {
	    let xhr = new XMLHttpRequest();
	    xhr.open("POST", url, true)
	    console.log(json);
	    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
	    xhr.onload = () => {
		     resolve(xhr.responseStatus)
    	};
    	xhr.send(json);
	})
  },
}

export default HttpService;