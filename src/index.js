import './css/style.css';
import './script';
import './output';
import aidaHandler from './aidaHandler';

let formInputAidaFile = document.getElementById('file');
let configurationUnit = {};
let getFileFromDrive = new aidaHandler();
formInputAidaFile.addEventListener('change', (ev) => {
	ev.preventDefault;
	// let file = ev.target.value;
	let file =getFileFromDrive.getFile(ev);

	fetch(file)
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
