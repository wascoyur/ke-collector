let elements = document.getElementsByTagName('input');
for (const iterator of elements) {
// console.log(iterator)
}
const listener = this.addEventListener('input', (event)=>{
    if(event.target && event.type == 'input'){
        console.log('сработал инпут: ' + (event.target));

    }
});

var demo1 = new autoComplete({
  selector: 'input[name="commissioning"]',
  minChars: 1,
  source: function(term, suggest) {
    term = term.toLowerCase();
    var choices = [
      "Подразделение",
      "Тип",
      "Модель",
      "Инвентарный номер",
      "Серийный номер",
      "Картридж",
      "Счетчик"
    ];
    var suggestions = [];
    for (i = 0; i < choices.length; i++)
      if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
    suggest(suggestions);
  }
});

// var copl = new autoComplete({q:"Подразделение",
// w:"Тип",
// e:"Модель",
// r:"Инвентарный номер",
// t:"Серийный номер",
// y:"Картридж",
// u:"Счетчик",
//   selector: 'input[name="organisation"]',
//   minChars: 1,
//   source: function(term, suggest) {
//     term = term.toLowerCase();
//     var choices = [
//       "Подразделение",
//       "Тип",
//       "Модель",
//       "Инвентарный номер",
//       "Серийный номер",
//       "Картридж",
//       "Счетчик"
//     ];
//     var suggestions = [];
//     for (i = 0; i < choices.length; i++)
//       if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
//     suggest(suggestions);
//   }
// });

//////////////
