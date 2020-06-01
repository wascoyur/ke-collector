import './css/style.css';
import './script';
import './output';
let formInputAidaFile = document.getElementById('file');
let configurationUnit = {};
let myTable = document.querySelector('table');

formInputAidaFile.addEventListener('change', (ev) => {
	ev.preventDefault;
	let file = getFileFromDrive(ev);
	let parser = new DOMParser();
	let xmlDOM = parser.parseFromString(file, 'application/xml');
	let pages = xmlDOM.querySelectorAll('Item');
	parserData(pages);
	
})

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

			reader.onload = function (e) {
				// this.xmlContent = reader.result;
				return reader.result;
			};
			reader.onerror = function () {
				console.log(reader.error);
			};
			reader.readAsText(file)
}
function viwer(data) {
	
}

