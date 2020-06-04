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
	viewer(configurationUnit);
})

/*=================== functions ======================  */
function parserData(nodes) {
	nodes.forEach(pageXmlNode => {
		let arChildrNodes = Array.prototype.slice.call(pageXmlNode.childNodes);
		let title = arChildrNodes[0].textContent;
		let value = pageXmlNode.childNodes[arChildrNodes.length - 1].textContent;
		configurationUnit[title] = value;
	})
	console.log('psd');
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
function viewer(data) {
	const tbody = myTable.querySelector('tbody')	
	for (const key in data) {
		let row = document.createElement('tr');	
		let cell1 = document.createElement('td');		
		cell1.textContent = key;
		let cell2 = document.createElement('td');
		cell2.textContent = data[key];
		row.insertAdjacentElement('afterbegin', cell2);
		row.insertAdjacentElement('afterbegin', cell1);
		tbody.insertAdjacentElement('afterbegin',row);		
	}
	
	
	
}

