import './css/style.css';

let formInputAidaFile = document.getElementById('file');
let configurationUnit = {};
formInputAidaFile.addEventListener('change', (ev) => {
	ev.preventDefault;
	let file = ev.target.file;

	fetch('../db/Report.xml')
		.then((response) => {
			response.text()
				.then((xml) => {
					let parser = new DOMParser();
					let xmlDOM = parser.parseFromString(xml, 'application/xml');
					let pages = xmlDOM.querySelectorAll('Item');
					parserData(pages);
			})
		})
})
function parserData(nodes) {
	nodes.forEach(pageXmlNode => {
		let arChildrNodes = Array.prototype.slice.call(pageXmlNode.childNodes);
		let title = arChildrNodes[0].textContent;
		let value = pageXmlNode.childNodes[arChildrNodes.length - 1].textContent;
		configurationUnit[title] = value;
	})
}