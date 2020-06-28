console.log('start');
import ('./xml2json.js');
let formInputAidaFile = document.getElementById('aida-xml');
let configurationUnit = {};
let myTable = document.querySelector('#aida-out');
let res = 'one';
const arrStdTemplReport = ['Имя ЦП CPUID', 'Тип памяти', 'Всего', 'Системная плата', 'Аппаратный адрес', 'Дисковый накопитель'];
const btnViewStndReportAida = document.getElementById('btn-stnd-set');
const btnViewAllReportAida = document.getElementById('btn-view-all');

formInputAidaFile.addEventListener('change', (ev) => {
	ev.preventDefault;
	getFileFromDrive(ev);
	let parser = new DOMParser();
	let xmlDOM = parser.parseFromString(res, 'application/xml');
	// let pages = xmlDOM.querySelectorAll('Page');
	let pages = xml2json(xmlDOM)
	console.log(pages);
	configurationUnit = JSON.parse(pages);
	lamper();
	// parserData(pages);
	// viewer(configurationUnit);
})

btnViewAllReportAida.addEventListener('click', (ev) => {
	viewer(configurationUnit)
})
btnViewStndReportAida.addEventListener('click', () =>{
	viewerStnd(configurationUnit);
})

/*=================== functions ======================  */
function parserData(nodes) {
	console.dir(nodes);
	nodes.forEach(pageXmlNode => {
		let arChildrNodes = Array.prototype.slice.call(pageXmlNode.childNodes);
		console.dir(arChildrNodes);
		let title = arChildrNodes[0].textContent;
		let value = pageXmlNode.childNodes[arChildrNodes.length - 1].textContent;
		configurationUnit[title] = value;
	})



}
function getFileFromDrive(event) {
	let file = event.target.files[0];
	if (!file) {
		return;
	}
	let reader = new FileReader();
	reader.readAsText(file, 'cp1251');
	reader.onloadstart = function (params) {
		console.log('begin loaded')
	}
	reader.onload = function (params) {
		console.log('Загрузка файла закончена')
	}
	reader.onload = function (e) {
		res = reader.result
	};
	reader.onerror = function () {
		console.log(reader.error);
		console.log('tic');
	};

}
function viewer(data) {
	const tbody = myTable.querySelector('tbody');
	for (const key in data) {
		let row = document.createElement('tr');
		let cell1 = document.createElement('td');
		let checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.setAttribute('scope', 'col');
		cell1.textContent = key;
		cell1.setAttribute('scope', 'col');
		let cell2 = document.createElement('td');
		cell2.textContent = data[key];
		cell2.setAttribute('scope', 'col');
		row.insertAdjacentElement('afterbegin', checkbox);
		row.insertAdjacentElement('afterbegin', cell2);
		row.insertAdjacentElement('afterbegin', cell1);
		tbody.insertAdjacentElement('afterbegin',row);
	}
}
function viewerStnd(data){
	let arrStndReport = {};
	arrStdTemplReport.forEach(el =>{
		for(const key in data){
			if (el == key) {
				arrStndReport[data] = key;
			}
		}
	})
	return arrStndReport;
}
function lamper(){
	if (Object.keys(configurationUnit).length !== 0) {
		const lamp = document.querySelector('#lamp');
		document.querySelector('#lamp-text').textContent = 'Есть внешние данные';
		lamp.style.backgroundColor = 'green';
	}
}
