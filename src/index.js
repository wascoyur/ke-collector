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
					let pages = xmlDOM.querySelectorAll('Page');
					pages.forEach(pageXmlNode => {
						console.log(pageXmlNode.textContent);
						if (pageXmlNode) {
							
						}
					})
			})
		})
})