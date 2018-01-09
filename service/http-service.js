'use strict'

const HttpService  = {
	
	sendRequest (url, succsesCallback) {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', url, true);

		xhr.send();

		xhr.onload = () => {
			succsesCallback(JSON.parse(xhr.responseText))
		}
	}

}

export default HttpService