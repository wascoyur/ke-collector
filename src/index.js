import './css/style.css'

let elements = document.getElementsByTagName('input');
for (const iterator of elements) {
// console.log(iterator)
}
const listener = this.addEventListener('input', (event)=>{
    if(event.target && event.type == 'input'){
        console.log('сработал инпут: ' + (event.form.elements()));

    }
});
class ConfigurationUnit{
  
}

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
