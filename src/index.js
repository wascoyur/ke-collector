let formInputAidaFile = document.getElementById('file');
let configurationUnit = {};
let myTable = document.querySelector('table');
let res = 'one';

formInputAidaFile.addEventListener('change', (ev) => {
	ev.preventDefault;
	getFileFromDrive(ev);
	let parser = new DOMParser();
	let xmlDOM = parser.parseFromString(res, 'application/xml');
	let pages = xmlDOM.querySelectorAll('Item');
	parserData(pages);		
})
viwer(configurationUnit);
/*=================== functions ======================  */
function parserData(nodes) {
	nodes.forEach(pageXmlNode => {
		let arChildrNodes = Array.prototype.slice.call(pageXmlNode.childNodes);
		let title = arChildrNodes[0].textContent;
		let value = pageXmlNode.childNodes[arChildrNodes.length - 1].textContent;
		configurationUnit[title] = value;
	})
}
function getFileFromDrive(event) {	
	let file = event.target.files[0];
	let reader = new FileReader();	
	reader.readAsText(file);
	reader.onload = function (e) {
		res = reader.result
	};
	reader.onerror = function () {
		console.log(reader.error);
		console.log('tic');
	};
	
}
function viwer(data) {
	// const cell = myTable.querySelector('')
	let row = document.createElement('tr');
	let m = myTable.insertAdjacentElement('afterbegin',row);
}

