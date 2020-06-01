let convert = require('xml-js');
export default class AidaHandler {
	constructor() {
		this.xmlContent = '';
	}

	getFile(event) {
			let file = event.target.value;
			let reader = new FileReader();

			reader.onload = function (e) {
				console.log(e.reader.result);
				return reader.result;
			};
			reader.onerror = function () {
				console.log(reader.error);
			};
			reader.readAsText(file)

	}

	convertFile(input) {
	  let options = {compact: true, ignoreComment: true, spaces: 4};
	  let jsObject = convert.xml2json(input, options);
	  return jsObject;
	}
		// console.log(inputFile);


}
