console.log('start');
import ('./xml2json.js');
let formInputAidaFile = document.getElementById('aida-xml');
let configurationUnit = {};
let myTable = document.querySelector('#aida-out');
let res = '';
const arrStdTemplReport = ['Тип ЦП', 'Чипсет системной платы', 'Системная память', 'Всего', 'Системная плата', 'Аппаратный адрес', 'Дисковый накопитель'];
const btnViewStndReportAida = document.getElementById('btn-stnd-set');
const btnViewAllReportAida = document.getElementById('btn-view-all');

formInputAidaFile.addEventListener('change', (ev) => {
	ev.preventDefault;
	getFileFromDrive(ev);
})

btnViewAllReportAida.addEventListener('click', (ev) => {
	parserData();
	tableCreater(configurationUnit);

})
btnViewStndReportAida.addEventListener('click', () =>{
	parserData();
	tableCreater(viewerStnd(configurationUnit)) ;
})

/*=================== functions ======================  */
function parserData(nodes) {
	let pages = X2J.parseXml(res);
	configurationUnit = pages[0].Report[0].Page;
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
	reader.loadend = function () {
		console.log('Загрузка файла закончена')

	}
	reader.onload = function (e) {
		res = reader.result
		lamper();
	};
	reader.onerror = function () {
		console.log(reader.error);
		console.log('tic');
	};

}
function tableCreater(data) {
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
	data.forEach(page => {
		console.dir(page)
	})
	stndDataReport.forEach(el =>{
		arrStdTemplReport.forEach(elin => {
			console.log(`ключ: ${el.Title[0].jValue}`, `значение: ${el.Value[0].jValue}` );
			if (elin === el.Title[0].jValue) {
				arrStndReport[el.Title[0].jValue] = el.Value[0].jValue;
			}
		})
	})
	return arrStndReport;
}
function lamper(){
	if (res !== 0) {
		const lamp = document.querySelector('#lamp');
		document.querySelector('#lamp-text').textContent = 'Есть внешние данные';
		lamp.style.backgroundColor = 'green';
	}
}
