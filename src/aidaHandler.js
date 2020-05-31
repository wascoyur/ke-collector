let convert = require('xml-js');
export default class AidaHandler {
	constructor(inputForm) {
		this.form = document.getElementById(inputForm);
		this.xmlContent = '';
	}
	
	getFile() {
		this.form.addEventListener('change', (event) => {
			let file = event.currentTarget.files[0];
			let reader = new FileReader();
			reader.onload = function (e) {
				this.xmlContent = e.target.result
			}
			reader.readAsText(file)
		})
	}
 
	convertFile(input) {
	  let options = {compact: true, ignoreComment: true, spaces: 4};
	  let jsObject = convert.xml2json(input, options);
	  return jsObject;
	}
		// console.log(inputFile);
	 
			
}
