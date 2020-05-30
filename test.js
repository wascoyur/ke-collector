// Объект для чтения файлов/буферов данных
let fr = new FileReader();

// Слушаем изменения
document.querySelector('#file').addEventListener('change', function(e){
  // Проверочки всякие
  if(this.files.length === 0)
    return;

  let file = this.files[0];
  if(file.type !== 'text/xml') // Если тип не XML - выходим
    return;

  // Прочиталось!
  fr.onload = e => {
    // Используем великое колдунство для парсинга из строки в DOM
    let dom = (new DOMParser()).parseFromString(fr.result, "application/xml");
    console.info('Самый всамделишный DOM из XML:', dom);
  };

  // Читаем как строку объект File (да, тот, что генерирует input[type='file'])
  fr.readAsText(file);
});
