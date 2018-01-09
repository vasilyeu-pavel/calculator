'use strict'
import HttpService from './http-service.js'

let DataService = {

	getServerData(succsesCallback) {

		HttpService.sendRequest(
			'/data/data-content-value.json',
			succsesCallback
			);
	}
}

export default DataService