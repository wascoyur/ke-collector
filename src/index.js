import './css/style.css';
let convert = require('xml-js');
import AidaHandler from './aidaHandler';

let dataFromAida = new AidaHandler();
let inputForm = document.getElementById('file');
let inputFile = '';
inputForm.addEventListener('change', (event) => {
  let file = event.currentTarget.files[0];
  let reader = new FileReader();
  reader.onload = function(e){
    inputFile = getFile(e.target.result)
  }
  reader.readAsText(file)
  
} )
function getFile(input) {
  let file = input;
  let options = {compact: true, ignoreComment: true, spaces: 4};
  let jsObject = convert.xml2json(input, options);
  return jsObject;
}
console.log(inputFile);



